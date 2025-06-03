import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: `${process.env.REACT_APP_authDomain}`,
  projectId: `${process.env.REACT_APP_projectId}`,
  storageBucket:`${process.env.REACT_APP_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`,
};

// console.log("firebaseConfig",firebaseConfig);


// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// console.log("app",app);

// Get the messaging instance
const messaging = getMessaging(app);

// Export the messaging instance
export { messaging, getToken };