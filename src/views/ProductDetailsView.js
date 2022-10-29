import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import TopBannerDiscount from '../components/TopBannerDiscount'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import { ProductDetailsInfoGrid } from '../components/ProductDetailsInfoGrid'
import { useState } from 'react'
import { ProductDetailGalleryHeader } from '../components/ProductDetailGalleryHeader'

function ProductDetailsView() {
  const [featuredProducts, setFeaturedProducts ] = useState([
    {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
    {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
    {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"},
    {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$42.90", rating: 5, img: "https://images.pexels.com/photos/9393990/pexels-photo-9393990.jpeg?cs=srgb&dl=pexels-chris-f-9393990.jpg&fm=jpg"}

  ])
  
  return (
    <div>
<NavbarGlobal /> 

   <div className="container mt-5">
    
     
   
    </div> 
    <TopBannerDiscount />
    <BreadCrumbsSections currentPage="Product Details" /> 
    <ProductDetailsInfoGrid products={featuredProducts} />
    <div className="container">
    <ProductDetailGalleryHeader title="Related Products" products={featuredProducts}  />
    </div>
    <div className="container" style={{height: "100px"}}></div>
    <Footer />   
    </div>
  )
}

export default ProductDetailsView