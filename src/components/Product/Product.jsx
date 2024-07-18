import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'
import Loader from '../Loader/Loader'
function Product() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
           axios.get('https://fakestoreapi.com/products')
             .then((res) =>{
                console.log(res);
                setProducts(res.data) 
                isLoading(false)
             }).catch((err)=>{
                console.log(err);

             })
    }, [])
  return (

    <>
     {
      isLoading? (<Loader />):(
        <section className={classes.products_container}> 
        {
      //same as return   instead of the return we can use () 
            products?.map((singleProduct)=>(
                <ProductCard  product={singleProduct}  key= {singleProduct.id} renderAdd={true} />
            ))
           }
   

    </section>
      )
     }
    
    </>
    
  )
}

export default Product