import React from 'react'
import penguin from './assets/images/featured-product/yoga.png'

export const ProductDetailsImages = (item) => {

  
  return (
    <div className="grid-container">
    <div className="item-1">

        

        <div className="item-1-prod-images">
         <div className="item-1"> <img src={penguin} alt={item.productName} /></div>
         <div className="item-2"><img src={penguin} alt="prod-2" /></div>
         <div className="item-3"><img src={penguin} alt="prod-3" /></div>
         <div className="item-4"><img src={penguin} alt="prod-4" /></div>
            
             
        </div>
    </div>
    
</div>
  )
}
