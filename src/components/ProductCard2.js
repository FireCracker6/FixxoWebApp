import React from 'react'


import { NavLink } from 'react-router-dom'

const ProductCard2 = ({item}) => {

  const addToWishList = (e) => {
    console.log(`added to wish list)`)
  }

  const addToCompare = (e) => {
    console.log("added to compare")
  }
  const addToCart = (e) => {
    console.log("added to Cart")
  }
  return (
    <>

    <div className="product-grid">
            <div className="card" >
              <div className="card" >
              
                 <div className="featured-image"><img src={item.img}  alt={item.productName} />
                 </div> 
                  <ul className="card-menu ">
                  <li><button onClick={addToWishList} className='productButton'><i className="fa-light fa-heart "></i></button></li>
               
                      <li><button  onClick={addToCompare} className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
                      <li><button onClick={addToCart}  className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
                  </ul>
                  <div className="quickview-buttons"> <NavLink to={`/productdetails/${item.productName.replace(/ /gi, "-")}`} className="quickview-button quick-btn-border">QUICK VIEW</NavLink>
                  </div>   
                 
                  <div className="card-background">  <div className="featured-image-dark"><img src={item.img}  alt={item.productName} /></div></div>
              <div className="card-body">
                
                    <h5 className="card-title">{item.category}</h5>
                    <h4>{item.productName}</h4>
                        <div className="text-theme">
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                        </div>
                    <div className="price">
                      <p className="old-price">$35.00</p>
                      <p className="new-price">{item.price} </p>
                  </div>
              </div>  
             
          </div>
        </div>
        </div>
        
    
    
     </>
  )
}

export default ProductCard2