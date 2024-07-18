import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import CarouselEffect from '../../components/Carousel/Carousel'
import Category from '../../components/Catagory/Category'
import Product from '../../components/Product/Product'

function Landing() {
  return (
    <LayOut>
    <CarouselEffect />
    <Category />
    <Product /> 
    </LayOut> 
  )
}

export default Landing