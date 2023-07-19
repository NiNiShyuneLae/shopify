import React, { useEffect, useState } from 'react'
import { createContext, useContext, useReducer } from "react";
import {getData} from '../api'


export const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const [productLists,setProductLists] = useState([])
    const [search,setSearch] = useState('')
    const initialState = {
        products:[],
        cart:[]
    }
    const reducer = (state,action) => {

        switch (action.type){
            case 'get_data':
                return {...state, products: action.payload}
            case 'add_to_cart':
                const data = action.payload
                const isExisted = state.cart.find(it => it.id === data.id)
                if(isExisted){
                    return(
                        {...state,cart: state.cart.map(it => it.id === data.id ? {...data} : {...it})}
                    )
                }else{
                    return(
                        {...state,cart : [...state.cart,{...data}]}
                    )
                }
            case 'remove_cart':
                return {...state, cart:state.cart.filter(ca => ca.id !== action.payload.id)}
            case 'empty_cart':
                return {...state,cart:state.cart=[]}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const getProducts = async() => {
        const data = await getData('/products')
        setProductLists(data)
    }
    useEffect(() => {
        getProducts()
    },[])

    useEffect(() => {
        dispatch({type:'get_data',payload:productLists})
        const filteredProducts = productLists.filter(pd => pd.title.toLowerCase().includes(search.toLocaleLowerCase()))
        dispatch({type:'get_data',payload:filteredProducts})
    },[productLists,search])

    const data = {state,search,setSearch,dispatch}
    return <StateContext.Provider value={data}>
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)