import React from 'react'
import {AiTwotoneStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useStateContext } from '../Context/StateContext'

const Card = ({products}) => {
    const{title,image} = products
    const {dispatch} = useStateContext()
  return (
    <div className='w-72 border rounded p-5 shadow-md hover:shadow-xl transform transition-all duration-200 hover:scale-105'>
        <img src={image} alt="" className='h-[180px] mx-auto ' />
        <h1 className='truncate text-sm text-center my-5'>{title}</h1>
        <p className='font-medium'>${products.price}</p>
        <div className='flex gap-1 my-3'>
            <AiTwotoneStar className='text-warning'/>
            <small>({products.rating?.rate})</small>
        </div>
        <div className='flex gap-3  mt-auto'>
            <button onClick={() => dispatch({type:'add_to_cart',payload:products})} className='bg-info text-white text-sm px-2 py-1 rounded shadow-sm transform transition hover:scale-90'>Add To Cart</button>
            <Link to={`/details/${products.id}`}>
                <button className='bg-header  text-white text-sm  px-2 py-1 rounded shadow-sm transform transition hover:scale-90'>Details</button>
            </Link>
        </div>
    </div>
  )
}

export default Card