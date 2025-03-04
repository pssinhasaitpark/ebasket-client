import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
// import Profile from "../pages/profie/Profile";
import Checkout from "../pages/checkout/Checkout";
import OrderTabs from "../pages/MyOrders/MyOrder";
import AddressForm from "../pages/deliveryaddress/DeliveryAddress";
import PayWallet from "../pages/paywallet/PayWallet";
import Success from "../pages/success/Success";
import WishlistPage from "../pages/Favourite/FavoriteItems"; 
import Transcation from '../pages/transaction/Transaction'
import NotFound from "../pages/NotFound/NotFound";
import Notification from "../pages/notification/notification";
import Profile from '../pages/profie/Demo'
import Pending_order from "../pages/Pending-Order/Pending_order";
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
import FaqPage from "../pages/faq-support/Faq";
import VerifyOTP from "../pages/auth/OtpVerify";

const ProtectedRoutes = () => {

    const isSignedIn = useSelector((state) => state.auth.isSignedIn ?? false);

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


            <Route path="/profile" element={isSignedIn ? <Profile /> : <Navigate to="/login" />}/>
            <Route path="/checkout" element={isSignedIn ? <Checkout /> : <Navigate to="/login" />}/>
            <Route path="/delivery-address" element={isSignedIn ? <AddressForm /> : <Navigate to="/login" />}/>
            <Route path="/orders" element={isSignedIn ? <OrderTabs /> : <Navigate to="/login" />}/>
            <Route path="/transaction" element={isSignedIn ? <Transcation /> : <Navigate to="/login" />}/>
            <Route path="/pay-wallet" element={isSignedIn ? <PayWallet /> : <Navigate to="/login" />}/>
            <Route path="/success" element={isSignedIn ? <Success /> : <Navigate to="/login" />}/>
            <Route path="/my-order" element={isSignedIn ? <OrderTabs /> : <Navigate to="/login" />}/>
            <Route path="/notification" element={isSignedIn ? <Notification /> : <Navigate to="/login" />}/>
            <Route path="/favorite-products" element={isSignedIn ? <WishlistPage /> : <Navigate to="/login" />}/>
            <Route path="/pending_order/:id" element={isSignedIn ? <Pending_order/> : <Navigate to="/login" />}/>
            
            {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </>
    );
};

export default ProtectedRoutes;
