import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { ProductDetailsImages } from './ProductDetailsImages'
import { QuantityButton } from './QuantityButton'
import { DetailInfoProduct } from './DetailInfoProduct'
import { NavItem } from 'react-bootstrap'
import ProductCard2 from './ProductCard2'
import { useContext } from 'react';
import {ProductContext} from './contexts/contexts'
import { Link } from "react-router-dom"


export const ProductDetailsInfoGrid = ({title, items = []}) => {

    const productContext = useContext(ProductContext)

    const params = useParams()
    const setProduct = useParams()
    const { id } = useParams()
    
  

    
  return (
    <section className="product-detail-section">
    <div className="container">
    
   

               

             
                  {
                items.map(product =>    <ProductDetailsImages key={product.articleNumber} item={product} />)

              }


 
       


  

        <div className="product-detail-description">
           <div className="prod-desc-1">
            <h2>{params.name}</h2>
         
            <p><small>SKU: 12345670 BRAND: The Northland</small></p>
            <div className="text-theme">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
              </div>  
              <h3>{params.price}</h3>
              <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more) </p>
           </div>
           <div className="prod-desc-2">
            <div className="item-1">

                <div className="size">
                    <h2>Size: </h2>
                
                </div>
                <div className="buttons">
                    <button className="btn btn-primary size-button border border-dark">S</button>
                    <button className="btn btn-primary size-button border border-dark">M</button>
                    <button className="btn btn-primary size-button border border-dark">L</button>
                    <button className="btn btn-primary size-button border border-dark">X</button>
                </div>
            
            </div>
            <div className="item-2">
                <div className="color">
                    <h2>Color: </h2>
                </div>
                <div className="CART-dropdown">
                    <button className="btn  dropdown border border-dark " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose an Option
                    <i className="fa-regular fa-chevron-down ms-5"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Option 1</a></li>
                      <li><a className="dropdown-item" href="#">Option 2</a></li>
                      <li><a className="dropdown-item" href="#">Option 3</a></li>
                      <li><a className="dropdown-item" href="#">Option 4</a></li>
                      <li><a className="dropdown-item" href="#">Option 5</a></li>
                      <li><a className="dropdown-item" href="#">Option 6</a></li>
                    </ul>
                  </div> 

            </div>
            <div className="item-3">
                <div className="quantity">
                    <h2>Qty: </h2>
                    <div className="center">
                   
                        <QuantityButton />
                     </div> 
  
                     
                </div>
                <div className="cart-red-buttons "><button type="submit"  className="post-button">Add To Cart</button>
                    </div> 
            </div>
       
           <div className="item-4">
                <div className="share">
                    <h2>Share:  </h2>
                
                 <div className="social">
                     <div className="social-media-circle"> <i className="fa-brands fa-facebook-f"></i></div>
                        <div className="social-media-circle">  <i className="fa-brands fa-instagram"></i></div>
                        <div className="social-media-circle"> <i className="fa-brands fa-twitter"></i></div>
                        <div className="social-media-circle">  <i className="fa-brands fa-google"></i></div>
                        <div className="social-media-circle">  <i className="fa-brands fa-linkedin"></i></div>
                        </div>
                  
                </div>
            </div> 
           </div>
        </div>

 
    </div>

    <DetailInfoProduct />
  
</section>
  )
}

