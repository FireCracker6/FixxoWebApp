
import './App.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import CategoriesView from './views/CategoriesView';
import { ProductsView } from './views/ProductsView';
import {FeaturedProductsContext, ProductsContext} from './components/contexts/contexts'
import { useEffect } from 'react';
import { ProductDetailGalleryHeader } from './components/ProductDetailGalleryHeader';






function App() {

  const [products, setProducts ] = useState( [])
  const [featured, setFeatured ] = useState( [])
  const [sales, setSales ] = useState( [])
  const [related, setRelated ] = useState( [])



  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
      console.log(result)
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFeatured(await result.json())
      console.log(result)
    }
    fetchFeaturedData()

  }, [setProducts, setFeatured])  
   /*  useEffect( () => {

      
     const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')

      setProducts(await result.json())
      console.log(result)
    
    }
    fetchAllProducts()
    
   const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFeatured( await result.json())
      console.log(result)
    
    }
    fetchFeaturedProducts()  

   
    const fetchSalesProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSales( await result.json())
      console.log(result)
    
    }
    fetchSalesProducts()  
  
  
   
   
  }, [])   */ 




/*   const [products, setProducts ] = useState(

    [ {id: 1, productName: "Penguin Blouse", category: "Fashion", price: "$20.50", rating: 5, img: "https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?cs=srgb&dl=pexels-david-dibert-1299391.jpg&fm=jpg"},
  {id: 2, productName: " BW Penquin", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?cs=srgb&dl=pexels-taryn-elliott-9085057.jpg&fm=jpg"},
  {id: 3, productName: "Modern Black PW", category: "Fashion", price: "$55.90", rating: 5, img: "https://images.pexels.com/photos/7177267/pexels-photo-7177267.jpeg?cs=srgb&dl=pexels-jeffrey-eisen-7177267.jpg&fm=jpg"},
  {id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$42.90", rating: 5, img: "https://images.pexels.com/photos/9393990/pexels-photo-9393990.jpeg?cs=srgb&dl=pexels-chris-f-9393990.jpg&fm=jpg"}
] 
  ) */
 
  return (

   <>

  

    <Router>
    <ProductsContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>

    <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/products' element={<ProductsView   /> }/>
      <Route path='/productdetails/:id' element={<ProductDetailsView />}/>
      <Route path='/productdetails/:id' element={<ProductDetailGalleryHeader />}/>
      <Route path='/categories' element={<CategoriesView />}/>
      <Route path='/contacts' element={<ContactsView />}/>
      <Route path='/*' element={<NotFoundView />}/>

      <Route path='/search' element={<SearchView />}/>
      <Route path='/wishlist' element={<WishListView />}/>
      <Route path='/shoppingcart' element={<ShoppingCartView />}/>
      <Route path='/compare' element={<CompareView />}/>

    </Routes>
 
   </FeaturedProductsContext.Provider>
    </ProductsContext.Provider>
      
    </Router>


   
   </>
  );
}

export default App;
