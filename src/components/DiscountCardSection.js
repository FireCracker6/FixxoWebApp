import React from 'react'

import DiscountCardMobile from './DiscountCardMobile'
const titles = [];

const DiscountCard2 = ({title1}, {title2}) => {
  return (
    
    <section className="disc-card container">
   

{/*      
      <div className=" row row-cols-2 row-cols-sm-1  row-cols-md-2  row-cols-xl-3 g-4 "> */}
        
      <div className="grid-wrapper row row-cols-2 row-cols-sm-2  row-cols-md-2 row-cols-xl-3 g-4 ">
      <div className="item-1">
        <h4>Latest Product</h4>
       <DiscountCardMobile />
       <DiscountCardMobile />
       <DiscountCardMobile />
       
       </div>
         
               
   
        
       <div className="item-2">
       <h4>Best Selling Product</h4>
       <DiscountCardMobile />
       <DiscountCardMobile />
       <DiscountCardMobile />
       
       </div>
               
            
                
     
        
 
           
       <div className="item-3">
       <h4>Top Ratings</h4>
       <DiscountCardMobile />
       <DiscountCardMobile />
       <DiscountCardMobile />
       
       </div>
               
               
             </div>
          </section>  
              

  )
}

export default DiscountCard2