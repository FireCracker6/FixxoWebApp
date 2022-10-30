import React from 'react'
import penguin from './assets/images/featured-product/yoga.png'
import HomeView from '../views/HomeView'
import { NavItem } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


export const ProductDetailsImages = (product) => {

  const params = useParams()
  return (
    <div className="grid-container">
    <div className="item-1">

        

        <div className="item-1-prod-images">
         <div className="item-1"> <img src= "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"  alt={product.productName} /></div>
         <div className="item-2"><img src="https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg" alt="prod-2" /></div>
         <div className="item-3"><img src="https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg" alt="prod-3" /></div>
         <div className="item-4"><img src="https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg" alt="prod-4" /></div>
            
             
        </div>

    </div>
    
</div>
  )
}
