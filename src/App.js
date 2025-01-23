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

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <SignUpForm /> */}
      {/* <Home /> */}
      {/* <ProductList /> */}
      <ProductDetail/>
    </div>
  );
};

export default App;
