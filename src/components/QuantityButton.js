import React from 'react'
import { useState } from 'react'


// This is original code by Leah
export const QuantityButton = () => {
   const [count, setCount] =  useState((countInitial) => {
    console.log('run function')
    return 1
   })
    function decrementCount() {
        setCount(prevCount =>
            prevCount - 1)
        }


    function incrementCount() {
        
        setCount(prevCount =>
            prevCount + 1)
        }

        // quantity set to max 13 products minimum 1 product
        const initNumber = 1
        switch(count) {
          
        case -1:  
        setCount(initNumber);
        break
        case 0:
        setCount(initNumber);
        break
        case 13:
        setCount(initNumber);
        break
       
    }
       
        
 
   

  return (
   
   <>
   <div className='quantity-group'>
   <button className='qbtn' onClick={decrementCount} >-</button>
   <input type="text" className='q-text' value={count} disabled/>  
   <button className='qbtn'   onClick={incrementCount}>+</button>
   </div>

    {/*   <div className="input-group">
                               <span className="input-group-btn">
                                   <button type="button" className="btn btn-default btn-lg btn-number border border-dark" disabled="disabled" data-type="minus" data-field="quant[1]">
                                       <span className="glyphicon glyphicon-minus"></span>
                                   </button>
                               </span>
                               <input  type="text"  name="quant[1]" className="form-control input-lg input-number border border-dark" value="1" min="1" max="10" />
                               <span className="input-group-btn">
                                   <button type="button" className="btn btn-default btn-lg btn-number border border-dark" data-type="plus" data-field="quant[1]">
                                       <span className="glyphicon glyphicon-plus"></span>
                                   </button>
                               </span>
                           </div>*/}
   </>
  )
}
