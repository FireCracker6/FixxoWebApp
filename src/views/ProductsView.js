import React, { useContext } from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import ProductGridSection from '../components/sections/ProductGridSection'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import {ProductContext} from '../components/contexts/contexts'
export const ProductsView = ({title }) => {
  
  const productContext = useContext(ProductContext)

  return (
    <div>
    <NavbarGlobal />
 
    <div className="container" style={{height: "100px"}}></div>
<BreadCrumbsSections currentPage="Products"/>
 
   <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'></div>


          
           <ProductGridSection title="Products" items={productContext.featuredProducts} /> 

           
        
              
         
   <div style={{"height": "750px"}}></div> 
   <Footer />
   </div>
  )
}
