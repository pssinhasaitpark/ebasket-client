import Slider from "./Hero_slider";
import Coupon from "./Coupons";
import Categories from "./Top_categories";
import Product from "./Our_product";
import Selling from "./Most_selling";
import All from "./all-products";
import React, { useState, useEffect } from 'react';
import LoadingSpinner from "../../component/spinner";
import { Route, Routes } from "react-router-dom";
import Header from "../../layout/Header";
import Search from "../Search/search-page";

function Home() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }, []);
    return(
      <>     
     
       {loading && <LoadingSpinner />}
        <Header/>
        <Slider />
        <Coupon />
        <Categories />
        <Product />
        <Selling />
        <All />
        <Search />

      </>
    );
}

export default Home;