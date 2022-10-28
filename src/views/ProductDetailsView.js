import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import TopBannerDiscount from '../components/TopBannerDiscount'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import { ProductDetailsInfoGrid } from '../components/ProductDetailsInfoGrid'
import { QuantityButton } from '../components/QuantityButton'
import { useState } from 'react'

function ProductDetailsView() {
  const [featuredProducts, setFeaturedProducts ] = useState([
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"}
  
  ])
  
  return (
    <div>
<NavbarGlobal /> 

   <div className="container mt-5">
    
     
   
    </div> 
    <TopBannerDiscount />
    <BreadCrumbsSections currentPage="Product Details" /> 
    <ProductDetailsInfoGrid products={featuredProducts} />
   <QuantityButton />
    <Footer />   
    </div>
  )
}

export default ProductDetailsView