  /*NOT IN USE*/
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import SignUpForm from "../pages/auth/SignupForm";
import CouponsList from "../pages/offers/Offers";
import Refund from "../pages/refund/Refund";
import Privacy from "../pages/privacy/Privacy";
import Termofuse from "../pages/termofuse/Termofuse";
import Help from "../pages/help/Help";
import About from "../pages/about/About";
import Setlocation from "../pages/setlocation/Setlocation";
import Category from "../pages/Category/Category";
import Search from "../pages/Search/search-page";
import ContactUs from "../pages/contactus/Contactus";
import ProductList from "../pages/Products/Products";
import ProductDetailPage from "../component/AddToCart";
import NotFound from "../pages/NotFound/NotFound";


import { useSelector } from "react-redux";

import FaqPage from "../pages/faq-support/Faq";
import VerifyOTP from "../pages/auth/OtpVerify";


const PublicRoutes = () => {

    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    return (
        <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login"  element={isSignedIn ? <Home /> : <Login />} />
            <Route path="/signup" element={isSignedIn ? <Home /> : <SignUpForm />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/productDetail/:id" element={<ProductDetailPage />} />
            <Route path="/offers" element={<CouponsList />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Termofuse />} />
            <Route path="/help" element={<Help />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/setlocation" element={<Setlocation />} />
            <Route path="/categories/:id" element={<Category />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/support" element={<FaqPage/>}/>
            <Route path="/verify-otp" element={<VerifyOTP/>}/>
         {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </>
    );
};

export default PublicRoutes;
