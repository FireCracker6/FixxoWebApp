import React from 'react'
import MobileGridCard from './MobileGridCard'
import ProductCard2 from './ProductCard2'


export const ProductDetailGalleryHeader = ({title, products}) => {


    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() =>  {

    
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  
  return width < breakpoint ? 
    <>
    <div class="products-gallery-header">
    <div class="container">
    <div class="header">
    <div class="item-1">
        <h2>{title}</h2>
    </div>
    <div class="item-2">
    <button class="circle"><i class="fa-solid fa-chevron-right fa-flip-horizontal"></i></button>
    <button class="circle"><i class="fa-solid fa-chevron-right "></i></button>
    </div>
    </div>
  
        </div>
        
        <div className="container-md ">

      
     <div className="row row-cols-1 row-cols-sm-2  g-4  row-cols-md-2 g-4   row-cols-xl-4  g-4">

        
     {

products.map(product =>     <ProductCard2 key={product.id} item={product} />) 


}
        </div>
    </div>
    </div>
    </> : 

<>
<div class="products-gallery-header">
<div class="container">
<div class="header">
<div class="item-1">
    <h2>{title}</h2>
</div>
<div class="item-2">
    <button class="circle"><i class="fa-solid fa-chevron-right fa-flip-horizontal"></i></button>
    <button class="circle"><i class="fa-solid fa-chevron-right "></i></button>
</div>
</div>

    </div>
    
    <div className="container ">

  
    <div className="product-gallery-grid"> 

    
 {

products.map(product =>     <ProductCard2 key={product.id} item={product} />) 


}
    </div>
</div>
</div>
</> ;

    
  
}
