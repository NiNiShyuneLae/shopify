import React from 'react'
import { FaSearch, FaShopify} from 'react-icons/fa'
import {CiShoppingCart} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useStateContext } from '../Context/StateContext'

const Nav = () => {
    const {search,setSearch,state:{cart}} = useStateContext()
  return (
    <div className='flex items-center justify-between bg-white z-50 px-4 py-3 rounded mb-5 shadow-md sticky top-0'>
        <Link to={'/'}>
            <div className='flex items-center gap-3'>
                <FaShopify className='text-4xl'/>
                <p className='font-semibold text-xl'>Shopify</p>
            </div>
        </Link>
        <div className='flex items-center gap-4'>
            <Link to={'/cart'}>
                <div className='flex items-center gap-2 bg-header px-4 py-2 rounded-sm cursor-pointer'>
                    <CiShoppingCart className='text-2xl text-white'/>
                    <small className='text-white'>{cart.length}</small>
                </div>
            </Link>
            <div className='flex items-center gap-2 border  px-2 py-1 shadow-md'>
                <FaSearch/>
                <input value={search} onChange={e => setSearch(e.target.value)} type="text" className='outline-none text-sm bg-transparent px-2 py-1' placeholder='Search...' />
            </div>
        </div>
    </div>
  )
}

export default Nav