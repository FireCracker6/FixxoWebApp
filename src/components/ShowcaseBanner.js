import React from 'react'
import RedButton from './RedButton'

function ShowcaseBanner() {
  return (
<>
        <div className='sale-banner'>
        <h1><strong>SALE UP <br/>To 50% OFF</strong> </h1>
       
           
             <p>Online shopping free home delivery over $100</p>
             <div className='top-banner-btn'> <RedButton link="/productdetails" text="SHOP NOW!" /> </div>
            </div>
    
            </>
       
    
  )
}

export default ShowcaseBanner