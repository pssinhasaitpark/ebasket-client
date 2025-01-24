import Slider from "./Hero_slider";
import ShopNow from "../../component/Shop_Now_Button";
import Coupon from "./Coupons";
import Categories from "./Top_categories";
import Product from "./Our_product";
import Selling from "./Most_selling";
import All from "./all-products";

function Home() {
    return(
      <>
        <Slider />
        <Coupon />
        <Categories />
        <Product />
        <Selling />
        <All />




    
      </>
    );
}

export default Home;