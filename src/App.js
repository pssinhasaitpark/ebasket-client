import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header.jsx";
import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./layout/Footer.jsx";
import { useState, useEffect } from 'react';
import { LoadingSpinner } from "./component/spinner";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store.js';
import ScrollToTop from "./component/Scroll.jsx";
import RequestNotificationPermission from './component/firebase/RequestNotificationPermission.js'
import { messaging } from './component/firebase/Firebase.js';
import { onMessage } from 'firebase/messaging';
import NotificationModal from './component/Notification/Notify.jsx';
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";


const App = () => {
  const [notification, setNotification] = useState(null);

  onMessage(messaging, (payload) => {
    console.log('Message received.............. ', payload);
    setNotification(payload.notification);
  });


  const closeModal = () => {
    setNotification(null);
  };

  // Fetch the config file and store it in a global variable for the service worker
  fetch('/config.json')
    .then((response) => response.json())
    .then((config) => {
      console.log(config);

      // Set the Firebase config globally so the service worker can access it
      window.firebaseConfig = config;

      // Register the service worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        }).catch((err) => {
          console.error('Service Worker registration failed:', err);
        });
      }
    })
    .catch((error) => {
      console.error('Error loading Firebase config:', error);
    });

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

        {loading && (<LoadingSpinner />)
        }
        <ScrollToTop />
        <ProtectedRoutes />
        {notification && (
          <NotificationModal notification={notification} onClose={closeModal} />
        )}
      </PersistGate>



    </>
  );
}

export default App;
