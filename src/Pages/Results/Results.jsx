import React, { useEffect, useState } from 'react'
import classes from './results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/EndPoints'
import ProductCard from '../../components/Product/ProductCard'
function Results() {
  const {categoryName} = useParams();
//  console.log(categoryName);
const [results, setResults] = useState([])
  useEffect(() =>{
         axios.get(`${productUrl}/products/category/${categoryName}`)
     .then((res)=>{
    // console.log(res)
      setResults(res.data)
  }).catch((err) => {
    console.log(err)
  })
  }, [])

 



  return (
    <LayOut>
        <section>
          <h1 style={{padding: "30px"}}>Results</h1>
          <p  style={{padding: "30px"}}>Category/{categoryName}</p>
        <hr />
        <div  className={classes.products_container}>
                   {
                    results?.map((product) => {
                   return   <ProductCard 
                    key={product.id} 
                    product={product}
                    renderAdd={true}
                    />
                    })
                   }
        </div>
        </section>
    </LayOut> 

  )
}

export default Results