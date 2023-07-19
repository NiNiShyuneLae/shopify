import React, { useState } from 'react'
import {BiTrashAlt} from 'react-icons/bi'
import { useStateContext } from '../Context/StateContext'

const CartItem = ({item,incPrice,decPrice}) => {
    const {dispatch} = useStateContext()
    const [qty,setQty] = useState(1)
    const inc = () => {
        setQty(pre => pre + 1)
        incPrice(item.price)
    }
 
    const dec = () => {
        if(qty > 1){
            setQty(pre => pre - 1)
            decPrice(item.price)
        }
    }

    const deleteCart = () => {
        decPrice(item.price * qty)
        dispatch({type:'remove_cart',payload:item})
    }
  return (
            <div className='flex gap-5'>
                <img src={item.image} alt="" className='h-28 border p-4 rounded'/>
                <div>
                    <p className='text-lg font-semibold tracking-wide'>{item.title}</p>
                    <p className='my-3'>$ {item.price * qty}</p>
                    <div className='flex gap-2 mb-3'>
                        <button onClick={inc} className='bg-badge text-lg text-white px-1 rounded'>+</button>
                        <p className='px-2'>{qty}</p>
                        <button onClick={dec} className='bg-badge text-lg text-white px-1 rounded'>-</button>
                    </div>
                    <BiTrashAlt className='text-xl' onClick={deleteCart}/>
                </div>
            </div>


  )
}

export default CartItem