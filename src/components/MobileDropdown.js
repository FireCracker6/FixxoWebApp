import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";

function MobileDropdown() {
  return (
    <>
       <div className='mobile-container '>
                        <div className="mobile-menu">
     <Dropdown className=''>
       <Dropdown.Toggle >
       <i className="fas fa-bars "></i>
       </Dropdown.Toggle>
       <Dropdown.Menu>
         <Dropdown.Item href="/">
          Home
         </Dropdown.Item>
         <Dropdown.Item href="/categories">
           Categories
         </Dropdown.Item>
         <Dropdown.Item href="/productdetails">
           Products
         </Dropdown.Item>
         <Dropdown.Item href="/contacts">
           Contacts
         </Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>

                        
                            
                          
                               
                         
                        </div>
                      </div>
                      
                    
                      
                      
                      
                      </>
  )
}

export default MobileDropdown

