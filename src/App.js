import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home.jsx";
import Header from "./layout/Header.jsx";
import React from "react";
import Login from "./pages/auth/Login.jsx";
import "bootstrap/dist/js/bootstrap.min.js";
import SignUpForm from "./pages/auth/SignupForm.jsx";
import ProductList from "./pages/Products/Products.jsx";
import ProductDetail from "./pages/AddToCart.jsx";
import Footer from "./layout/Footer.jsx";
import Category from "./pages/Category/Category.jsx";
import { useState, useEffect } from 'react';
import {LoadingSpinner, AddressLoader} from "./component/spinner";
import Search from "./pages/Search/search-page.jsx";
import { Route, Routes } from "react-router-dom";
import CouponsList from "./pages/offers/Offers.jsx";
import Refund from "./pages/refund/Refund.jsx";
import Privacy from "./pages/privacy/Privacy.jsx";
import Termofuse from "./pages/termofuse/Termofuse.jsx";
import Help from "./pages/help/Help.jsx";
import About from "./pages/about/About.jsx";
import ContactUs from "./pages/contactus/Contactus.jsx";
import Profile from "./pages/profie/Profile.jsx";
import AddressForm from "./pages/deliveryaddress/DeliveryAddress.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import OrderTabs from "./pages/MyOrders/MyOrder.jsx";
import Setlocation from "./pages/setlocation/Setlocation.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Transcation from './pages/transaction/Transaction.jsx'
import PayWallet from "./pages/paywallet/PayWallet.jsx";
import Success from "./pages/success/Success.jsx";
import TopCategories from "./component/TopCategory.jsx";
import Slick from "./component/Slick-Slider.jsx";




const App = () => {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
      
    }, 1000)

  }, []);
 
  return (
    <> 
    
      {/*  <AddressLoader/> */}
      <div>
        {loading && (<LoadingSpinner />) 
         }

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/offers" element={<CouponsList />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Termofuse />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/setlocation" element={<Setlocation />} />
          <Route path="/categories" element={<Category />} />

          <Route path="/search" element={<Search />} />

          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/delivery-address" element={<AddressForm/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/myorder" element={<OrderTabs/>}/>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={< AddressForm/>} />
      
          <Route path="/transaction" element={<Transcation />} />
          <Route path="/pay-wallet" element={<PayWallet/>}/>
          <Route path="/success" element={<Success/>}/>

          <Route path="*" element={<NotFound />} />



        </Routes>


        <Footer />
      
      </div>
      </>
     
  );
}

export default App;
