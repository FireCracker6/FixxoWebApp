import React from 'react'



import {ProductContext} from '../components/contexts/contexts'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetailsImages = ({item}) => {

  const params= useParams()

  const productContext = useContext(ProductContext)

  const thisProduct = productContext.featuredProducts.find(obj => {
    return obj.articleNumber == params.articleNumber
  })




  return (
   
    <div className="grid-container">
   <div className="grid-container">
    <div className="item-1">

       

        <div className="item-1-prod-images">
         <div className="item-1"> <img src={thisProduct.imageName}  alt={thisProduct.imageName} /></div>
         <div className="item-2"><img src={thisProduct.imageName} alt={thisProduct.imageName} /></div>
         <div className="item-3"><img src={thisProduct.imageName} alt={thisProduct.imageName} /></div>
         <div className="item-4"><img src={thisProduct.imageName} alt={thisProduct.imageName} /></div>
   
   
             
        </div>

    </div>
    
</div>
    
</div>
  )
}
