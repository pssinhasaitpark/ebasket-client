import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header.jsx";
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./layout/Footer.jsx";
import { useState, useEffect } from 'react';
import { LoadingSpinner, AddressLoader } from "./component/spinner";
import { useSelector } from "react-redux";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store.js';
import DemoHeader from "./layout/Demo.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Map from "./component/Map.jsx";
import Transcation from './pages/transaction/Transaction.jsx'



const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  console.log("check", isSignedIn);

  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);

    }, 1000)

  }, [loading]);

  return (
    <>

    <PersistGate loading={null} persistor={persistor}>
      <Header/>
        {loading && (<LoadingSpinner />)
        }
        <>
        {isSignedIn ? (<>
          <PublicRoutes />
          <ProtectedRoutes />
        </>):(
          <PublicRoutes />
        )}

{/* <PublicRoutes />
<ProtectedRoutes /> */}

        </>
       <Footer /> 
         
       </PersistGate>

        {loading && (<LoadingSpinner />)}
        
        <>
        <Header/>
        {isSignedIn ? 
        (<> 
          <PublicRoutes />
          <ProtectedRoutes />
         </>):
         (
           <PublicRoutes /> 
         )
         } 
         
        </>
    

    </>
  );
}

export default App;
