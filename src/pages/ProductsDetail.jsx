import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../api'
import { useStateContext } from '../Context/StateContext'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'

const ProductsDetail = () => {
    const {dispatch} = useStateContext()
    const [details,setDetails] = useState({})
    const [other,setOther] = useState([])
    const {id} = useParams()
    const getProductsDetail = async() => {
        setDetails(await getData(`/products/${id}`))
    }

    const getCatProducts = async() => {
        const data = await getData(`/products/category/${details.category}`)
        const filteredData = data.filter(item => item.id !== details.id)
        setOther(filteredData)
    }

    useEffect(() => {
        getProductsDetail()
        getCatProducts()
    },[other,details])
  return (
    <>
    {details && other.length > 0 ?     <div className='container mx-auto'>
        <div className=' flex gap-16  items-center my-14'>
            <img src={details?.image} alt=""  className='h-56 border-2 p-5 shadow-md'/>
            <div>
                <div className='flex gap-5 items-center mb-5'>
                    <h1 className='font-semibold text-lg'>{details?.title}</h1>
                    <small className='bg-badge text-white rounded-xl px-2 py-1'>{details?.category}</small>
                </div>
                <div className='mb-5'>
                    <h1 className='font-semibold mb-2'>Description</h1>
                    <small className='text-gray-800'>
                        {details?.description}
                    </small>
                </div>
                <p className='mb-3'>rating - ({details?.rating?.rate})</p>
                <p className=' font-semibold text-lg'>$ {details?.price}</p>
                <div className='flex gap-3 items-center mt-3'>
                    <button onClick={() => dispatch({type:'add_to_cart',payload:details})} className='bg-info text-white px-2 py-1 rounded text-md'>Add To Cart</button>
                    <Link to={'/success'}>
                        <button className='bg-header text-white px-2 py-1 rounded text-md'>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
        <h1 className='my-5 text-xl font-semibold'>You May Also Like</h1>
        <div className='flex flex-wrap gap-10 '>
            {other?.map(item =>(
                <div key={item.id} className='flex gap-5 flex-col'>
                    <img src={item.image} className='h-36 border-2 p-4 shadow-md'/>
                    <p className='text-center font-semibold'>$ {item.price}</p>
                </div>
            ))}
        </div>
    </div> :<Loading/>}
    </>

  )
}

export default ProductsDetail