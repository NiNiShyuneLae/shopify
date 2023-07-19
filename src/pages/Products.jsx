import { useStateContext } from '../Context/StateContext'
import Card from '../Components/Card'
import { useEffect, useState } from 'react'
import Loading from '../Components/Loading'

const Products = () => {
    const {state: {products}} = useStateContext()


  return (
    <div className='flex flex-wrap gap-10 justify-center'>
    {products.length> 0 ? products?.map(pd => <Card key={pd.id} products={pd}/>) : <Loading/>}
    </div>
  )
}

export default Products