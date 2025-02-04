import React, { useState, useEffect } from 'react';
import Slider from "../../component/Hero_slider";
import Coupon from "../../component/Coupons";
import TopCategories from "../../component/TopCategory";
import Product from "../../component/Our_product";
import Selling from "../../component/Most_selling";
import All from "../../component/all-products";
import {LoadingSpinner} from "../../component/spinner";

import Header from "../../layout/Header";
import Search from "../../pages/Search/search-page";


function Home() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
    return(
      <>     
     
       {loading && <LoadingSpinner />}
        <Header/>
        <Slider />
        <Coupon />
        <TopCategories />
 
        <Product />
        <Selling />
        <All />
 
      </>
    );
}

export default Home;