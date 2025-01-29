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
import Footer from "./layout/Footer.jsx";
import Category from "./pages/Category/Category.jsx";
import { useState, useEffect } from 'react';
import LoadingSpinner from "./component/spinner";
import Search from "./pages/Search/search-page.jsx";
import { Route, Routes } from "react-router-dom";
import CouponsList from "./component/Offers.jsx";
import Refund from "./pages/Refund.jsx";
import Privacy from "./pages/Privacy.jsx";
import Termofuse from "./pages/Termofuse.jsx";
import Help from "./pages/Help.jsx";
import About from "./pages/About.jsx";
import Setlocation from "./pages/Setlocation.jsx";
import Categories from "./pages/Home/demoCategory.jsx";
import TopCategories from "./pages/Home/demoCategory.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
 <>

    <div>

      {/* <Header /> */}
      {/* <Login />
      <SignUpForm />
      <Home />
      <ProductList />
      <ProductDetail/> */}
      
        {/* {loading && <LoadingSpinner />}


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/offers" element={<CouponsList />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Termofuse />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/setlocation" element={<Setlocation />} />
          <Route path="/searchpage" element={<Search />} />
          
        </Routes> */}
        {/* <Header /> */}
        {/* <Login /> */}
        {/* <SignUpForm /> */}
        {/* <Home /> */}
        {/* <ProductList /> */}
        {/* <ProductDetail/> */}
        {/* <Footer /> */}


       {/* {loading && <LoadingSpinner />}
       <div> */}
      {/* <Routes>
      <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUpForm/> } />
        <Route path="/productList" element={<ProductList />}/>
        <Route path="/productDetail" element={<ProductDetail/>}/>
        <Route path="/offers" element={<CouponsList/>}/>
      </Routes> */}
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <SignUpForm /> */}
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <ProductDetail/> */}
      {/* <Footer/> */}
      
      
        {loading && <LoadingSpinner />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/offers" element={<CouponsList />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Termofuse />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/setlocation" element={<Setlocation />} />
        </Routes>
        <Header />
        {/* <Login /> */}
        {/* <SignUpForm /> */}
        {/* <Home /> */}
        {/* <ProductList /> */}
        {/* <ProductDetail/> */}
        <Footer />

      </div>

      </>
  );
};

export default App;
