import React from 'react'
import pinquin from './assets/images/featured-product/pinquin.png'

function DiscountCardMobile() {
  return (
    <div className="card mb-3 " >
    <div className="row g-0">
      <div className="col-md-4">
      <img src={pinquin}  alt="placeholder image" />
      </div>
      <ul className="card-menu ">
        <li><button className='productButton'><i className="fa-light fa-heart "></i></button></li>
        <li><button className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
        <li><button className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
        </ul>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Category</h5>
          <h4>Modern Black <br />Blouse</h4>
                    <div className="text-theme">
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                    </div>
            
              <div className="price">
                
                <p className="new-price">$35.00</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DiscountCardMobile