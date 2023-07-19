import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
   <div className='flex justify-center animate__animated animate__bounceInDown my-10'>
    <div className='bg-gray-200 w-96 p-10 rounded'>
        <h1 className='text-2xl font-semibold text-badge mb-5'>Purchase Successfully!!</h1>
        <Link to={'/'}>
            <div  className='bg-badge cursor-pointer text-white   py-1 rounded mx-auto w-32 text-center'>Go Shopping</div>
        </Link>
    </div>
   </div>
  )
}

export default Success