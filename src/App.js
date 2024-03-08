import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop.js';
import ShopCategory from './pages/ShopCategory.js';
import Product from './pages/Product.js';
import Cart from './pages/Cart.js';
import LoginSignUp from './pages/LoginSignUp.js';
import Footer from "./components/Footer/Footer.js";
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
import Terms from "./components/Terms/Terms.js";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner = {men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner = {women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner = {kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/login" element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
