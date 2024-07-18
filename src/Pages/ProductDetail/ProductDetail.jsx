import React, { useEffect, useState } from 'react'
import classes from './productDetail.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'
function ProductDetail() {
  const {productId} =useParams();
  const [product, setproduct] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  
  // console.log(productId)
  // setIsLoading(true);
  useEffect(() => {
           axios.get(`${productUrl}/products/${productId}`)
              .then((res) =>{
                // console.log(res)
                setproduct(res.data)
                setIsLoading(false);
              }).catch((err) =>{
                console.log(err)
                
                setIsLoading(false);
                isLoading(false);
              })
              }, [])
  
              // if (isLoading) {
              //   return <LayOut>Loading...</LayOut>;
              // }

  return (
    <LayOut>
      {
      isLoading? (<Loader />): (<ProductCard  product={product} 
      
        flex = {true}
        renderDesc = {true}
        renderAdd={true}
      />)
      }
      
    </LayOut>
  )
}

export default ProductDetail