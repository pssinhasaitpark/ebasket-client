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
import DemoHeader from "./layout/Demo.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";




const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);

    }, 1000)

  }, []);

  return (

    <>
      {/* <DemoHeader/> */}
   
      <Header/>
        {loading && (<LoadingSpinner />)
        }
        <>
          {isSignedIn ? (
            <>
              <PublicRoutes />
              <ProtectedRoutes />
            </>
          ) : (
            <PublicRoutes />
          )}
        </>
       <Footer /> 
         

    </>
  );
}

export default App;
