import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import TopBannerDiscount from '../components/TopBannerDiscount'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import { ProductDetailsInfoGrid } from '../components/ProductDetailsInfoGrid'
import { useState } from 'react'
import { ProductDetailGalleryHeader } from '../components/ProductDetailGalleryHeader'
import {ProductContext} from '../components/contexts/contexts'
import { useContext } from 'react'
import { ProductDetailsImages } from '../components/ProductDetailsImages'

function ProductDetailsView() {
  const productContext = useContext(ProductContext)
 

  return (
    <div>
<NavbarGlobal /> 

   <div className="container mt-5">
    
    
   
    </div> 
    <TopBannerDiscount />
    <BreadCrumbsSections currentPage="Product Details" /> 
    <ProductDetailsInfoGrid  items={productContext.all}/>
    <div className="container">
    <ProductDetailGalleryHeader  title="Related Products" items={productContext.all}  />
   
    </div>
    <div className="container" style={{height: "100px"}}></div>
    <Footer />   
    </div>
  )
}

export default ProductDetailsView