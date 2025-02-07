import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../pages/profie/Profile";
import Checkout from "../pages/checkout/Checkout";
import OrderTabs from "../pages/MyOrders/MyOrder";
import NotFound from "../pages/NotFound/NotFound";
import AddressForm from "../pages/deliveryaddress/DeliveryAddress";
import PayWallet from "../pages/paywallet/PayWallet";
import Success from "../pages/success/Success";
import WishlistPage from "../pages/FavoriteItems";
import Transcation from '../pages/transaction/Transaction'
import Login from "../pages/auth/Login";
import PublicRoutes from "./PublicRoutes";
const ProtectedRoutes = () => {

    // const isSignedIn = useSelector((state) => state.auth.isSignedIn);

    // if (!isSignedIn) {
    //     return <Navigate to="/login" />;
    //   }

    return (
        <> 
            <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/delivery-address" element={<AddressForm />} />
            <Route path="/orders" element={<OrderTabs />} />
            <Route path="/transaction" element={<Transcation />} />
            <Route path="/pay-wallet" element={<PayWallet />} />
            <Route path="/success" element={<Success />} />
            <Route path="/favorite-products" element={<WishlistPage />} />
            </Routes>
        </>
    );
};

export default ProtectedRoutes;
