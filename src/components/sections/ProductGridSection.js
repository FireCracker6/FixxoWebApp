import React  from 'react'




import ProductCard2 from '../ProductCard2';



const ProductGridSection = ({title, items = []}) => {

 
  




  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() =>  {

   
 
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );

  return width < breakpoint ? <>
    <div className='section-title'><h1>{title}</h1></div>
    <div className="container-md ">
    <div className="row row-cols-1 row-cols-sm-2  g-4  row-cols-md-2 g-4   row-cols-xl-4  g-4">

            {

                 items.map(product =>    <ProductCard2 key={product.articleNumber} item={product} />)
            

              }
       

  </div> 
  </div>
  </> :   
  <>
  
            <div className='section-title'><h1>{title}</h1></div>
            <div className="container">
    
              <div className="product-gallery-grid"> 
              {
                  items.map(product =>    <ProductCard2 key={product.articleNumber} item={product} />)

              }
           
                 
              </div>
  </div>;
  </>
}

export default ProductGridSection