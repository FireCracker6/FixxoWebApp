import React from 'react'

import { NavLink } from 'react-router-dom'

const MobileGridCard = ({item}) => {

    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 600;

  React.useEffect(() =>  {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  return width < breakpoint ?      
  
  <section className="mobile-card">
        <div className="container-fluid">
            <div className="container-md ">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        
                            <div className="featured-image"><img src={item.img} alt={item.productName} />
                            </div> 

                                <ul className="card-menu ">
                                <li><button className='productButton'><i className="fa-light fa-heart "></i></button></li>
                                <li><button className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
                                <li><button className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
                                </ul>
                                <div className="quickview-buttons"> <NavLink to="/productdetails" className="quickview-button quick-btn-border">QUICK VIEW</NavLink>
                                </div>   
                            
                                <div className="card-background">  </div>

                                <div className="card-body">
                                        <h5 className="card-title">{item.category}</h5>
                                        <h4>{item.productName} </h4>
                                            <div className="text-theme">
                                                <i className="fa-solid fa-star-sharp"></i>
                                                <i className="fa-solid fa-star-sharp"></i>
                                                <i className="fa-solid fa-star-sharp"></i>
                                                <i className="fa-solid fa-star-sharp"></i>
                                                <i className="fa-solid fa-star-sharp"></i>
                                            </div>
                                        <div className="price">
                                            <p className="old-price">$35.00</p>
                                            <p className="new-price">{item.price}</p>
                                        </div>
                                </div>
                        </div>
                    </div>


     
                </div>

            </div>
        </div>
    </section> : 


<section className="mobile-card">
<div className="container-fluid">
<div className="container">

  

       
           {/*  <div className="col"> */}
            <div className="card">
            
                <div className="featured-image"><img src={item.img} alt={item.productName} />
                </div> 

                    <ul className="card-menu ">
                            <li><button className='productButton'><i className="fa-light fa-heart "></i></button></li>    
                            <li><button className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
                            <li><button className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
                    </ul>
                    <div className="quickview-buttons"> <NavLink to="/productdetails" className="quickview-button quick-btn-border">QUICK VIEW</NavLink>
                    </div>   
                
                    <div className="card-background">  </div>

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
                                <p className="new-price">{item.price}</p>
                            </div>
                    </div>
            </div>
            </div>
      


        </div>

{/* </div> */}
{/* </div> */}
</section>;


}

export default MobileGridCard