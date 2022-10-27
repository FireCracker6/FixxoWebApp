import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

function ProductDetailsView() {

  const params = useParams()
  return (
    <div>
<NavbarGlobal /> 

    <div className="container mt-5">
      <h1>{params.name}</h1>
   
    </div>
    <div style={{"height": "5000px"}}></div>  
    <Footer />   
    </div>
  )
}

export default ProductDetailsView