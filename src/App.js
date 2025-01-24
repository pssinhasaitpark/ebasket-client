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
import { Route, Routes } from "react-router-dom";
import CouponsList from "./component/Offers.jsx";

const App = () => {
  return (

<>
      <div>
      <Routes>
      <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUpForm/> } />
        <Route path="/productList" element={<ProductList />}/>
        <Route path="/productDetail" element={<ProductDetail/>}/>
        <Route path="/offers" element={<CouponsList/>}/>
      </Routes>
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <SignUpForm /> */}
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <ProductDetail/> */}
      </div>
      </>

  );
};

export default App;
