import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header.jsx";
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./layout/Footer.jsx";
import { useState, useEffect } from 'react';
import { LoadingSpinner} from "./component/spinner";
import { useSelector } from "react-redux";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store.js';

import ScrollToTop from "./component/Scroll.jsx";


const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn ?? false);
  // console.log("check", isSignedIn);

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
        <ScrollToTop />
          {/* <PublicRoutes /> */}
          <ProtectedRoutes />
       <Footer /> 
         
       </PersistGate>

    

    </>
  );
}

export default App;
