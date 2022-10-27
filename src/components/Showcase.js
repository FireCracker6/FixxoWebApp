import React from 'react'
import pLeft from './assets/images/PLeft.png'
import pRight from './assets/images/PRight.png'
import ShowcaseBanner from './ShowcaseBanner'

const Showcase = () => {
  return (
   <section className="__showcase">
   <div className="container-fluid">
    <div className="showcase-Grid">
  <img className='fr-1 left-img'  src={pLeft} alt="left image" />
    <div className='fr-1' ><ShowcaseBanner /></div>
    <img className='fr-1' src={pRight} alt="right image" />
    </div>
   </div>
   </section>

   
  )
}

export default Showcase

