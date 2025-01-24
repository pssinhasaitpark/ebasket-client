import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Header from "./layout/Header.jsx";
import React from "react";
import Login from "./pages/Login";
import "bootstrap/dist/js/bootstrap.min.js";
import SignUpForm from "./pages/SignupForm.jsx";
import ProductList from "./pages/Products.jsx";
import ProductDetail from "./pages/AddToCart.jsx";
import Category from "./pages/Category/Category.jsx";
import { useState, useEffect } from 'react';
import LoadingSpinner from "./component/spinner";
import Search from "./pages/Search/search-page.jsx";


const App = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }, []);
  return (
    <div>
       {loading && <LoadingSpinner />}
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <SignUpForm /> */}
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <ProductDetail/> */}
      {/* <Category /> */}
      <Search />
    </div>
  );
};

export default App;
