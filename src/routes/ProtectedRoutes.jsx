import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
// import Profile from "../pages/profie/Profile";
import Checkout from "../pages/checkout/Checkout";
import OrderTabs from "../pages/MyOrders/MyOrder";
import AddressForm from "../pages/deliveryaddress/DeliveryAddress";
import PayWallet from "../pages/paywallet/PayWallet";
import Success from "../pages/success/Success";
import WishlistPage from "../pages/FavoriteItems";
import Transcation from '../pages/transaction/Transaction'
import NotFound from "../pages/NotFound/NotFound";
import Profile from '../pages/profie/Demo'

const ProtectedRoutes = () => {

    const isSignedIn = useSelector((state) => state.auth.isSignedIn);

    return (
        <> 
            <Routes>
            <Route path="/profile" element={isSignedIn ? <Profile /> : <Navigate to="/login" />}/>
            <Route path="/checkout" element={isSignedIn ? <Checkout /> : <Navigate to="/login" />}/>
            <Route path="/delivery-address" element={isSignedIn ? <AddressForm /> : <Navigate to="/login" />}/>
            <Route path="/orders" element={isSignedIn ? <OrderTabs /> : <Navigate to="/login" />}/>
            <Route path="/transaction" element={isSignedIn ? <Transcation /> : <Navigate to="/login" />}/>
            <Route path="/pay-wallet" element={isSignedIn ? <PayWallet /> : <Navigate to="/login" />}/>
            <Route path="/success" element={isSignedIn ? <Success /> : <Navigate to="/login" />}/>
            <Route path="/favorite-products" element={isSignedIn ? <WishlistPage /> : <Navigate to="/login" />}/>
            {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </>
    );
};

export default ProtectedRoutes;
