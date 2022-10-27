import React from 'react'
import WhiteButton from './WhiteButton'
import { ProductCard } from './ProductCard'
import MobileGridCard from './MobileGridCard'
import { useState } from 'react'
import ProductCard2 from './ProductCard2'

const SpecialOffer2 = ({products}) => {

  


      const [width, setWidth] = React.useState(window.innerWidth);
      const breakpoint = 1200;
    
      React.useEffect(() =>  {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, [] );

      return width < breakpoint ? 
      <div className="container-fluid">
    
           
          <section className="special-offer-2"> 
          <div className="container--md">
                  <div className="item-2">
                  <h2>2 FOR USD $29</h2>
                  <WhiteButton link="/productdetails" text="SHOP NOW!"  />  
                  </div>
                  </div>
            
                  <div className="item-1 ">
                        
                        <div className="products-grid-wrapper ">



                        <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2  g-4  row-cols-md-2 g-4   row-cols-xl-4  g-4">
     
              {

              products.map(product =>     <MobileGridCard key={product.id} item={product} />) 
              

              }
       
  </div>
  </div> 
                       
    </div>

                  </div>

          
                  
                 
                        

            </section>
      </div> :  
      
      
            <div className="container-fluid">
                    <section className="special-offer-2">
                      
                    <div className="item-1">
                              
                              <div className="products-grid-wrapper">
        
                                
                      {
                products.map(product =>    <ProductCard2 key={product.id} item={product} />)

              }
                              </div>
        
                          </div>
                                
                      <div className="item-2">
                        <h2>2 FOR USD $29</h2>
                        <WhiteButton link="/productdetails" text="SHOP NOW!"  />  
                      </div>
                      
                
                              
                    
                    </section>
            </div>; 
    }

  


export default SpecialOffer2