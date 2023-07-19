import React, { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import { useStateContext } from '../Context/StateContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [total,setTotal] = useState(0)
  const {state: {cart},dispatch} = useStateContext()
  const navigate = useNavigate()

  const checkout = () => {
    dispatch({type:'empty_cart'})
    navigate('/success')
  }

  useEffect(() => {
      setTotal(cart.reduce((pv,cv) => pv+cv.price ,0))
  },[])

  const incPrice = (price) => {
    setTotal(total + price)
  }
  const decPrice = (price) => {
    setTotal(total - price)
  }

  return (
      <>
      {cart.length > 0 ?
            <div className='flex justify-between items-start'>
            <div className='flex gap-5 flex-col'>
              {cart?.map(item => <CartItem key={item.id} item={item} incPrice={incPrice} decPrice={decPrice}/>)}
            </div>
     
          <div className='flex flex-col gap-5 items-start'>
            <div className='bg-gray-200 w-96 p-10 rounded'>
              <h1 className='text-2xl font-semibold text-badge mb-5'>Total - ${total.toFixed(2)}</h1>
                <div onClick={checkout} className='bg-badge cursor-pointer text-white   py-1 rounded  w-32 text-center'>Check Out</div>
            </div>
            <button onClick={() => dispatch({type:'empty_cart'})} className='bg-badge px-2 py-1 text-white rounded'>Empty Cart</button>
          </div>
    
          </div>
       :    <div className='flex justify-center animate__animated animate__bounceInDown my-10'>
    <div className='bg-gray-200 w-96 p-10 rounded'>
        <h1 className='text-2xl font-semibold text-badge mb-5'>Your Cart is Empty</h1>
        <Link to={'/'}>
            <div  className='bg-badge cursor-pointer text-white   py-1 rounded  w-32 text-center'>Go Shopping</div>
        </Link>
    </div>
   </div>}
      </>
  )
}

export default Cart