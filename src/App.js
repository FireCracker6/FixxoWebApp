
import './App.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import NavbarGlobal from './components/NavbarGlobal';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import CategoriesView from './views/CategoriesView';
import ExternalLinkIcon from './components/ExternalLinkIcon';







function App() {


    
  return (

   <>

  

    <Router>
    <Routes>
      <Route path='/' element={<HomeView />}/>
      <Route path='/productdetails/:name' element={<ProductDetailsView />}/>
      <Route path='/categories' element={<CategoriesView />}/>
      <Route path='/contacts' element={<ContactsView />}/>
      <Route path='/*' element={<NotFoundView />}/>

      <Route path='/search' element={<SearchView />}/>
      <Route path='/wishlist' element={<WishListView />}/>
      <Route path='/shoppingcart' element={<ShoppingCartView />}/>
      <Route path='/compare' element={<CompareView />}/>

    </Routes>
      
    </Router>


   
   </>
  );
}

export default App;
