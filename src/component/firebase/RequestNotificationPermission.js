import React, { useEffect } from 'react';
import { messaging } from './Firebase'; // Import messaging
import { getToken } from 'firebase/messaging'; // Import getToken directly
const BASE_URL = process.env.REACT_APP_BASE_URL;

const RequestNotificationPermission = () => {

  useEffect(() => {
    const requestPermission = async () => {
      try {
        console.log('Requesting notification permission...');
        const permission = await Notification.requestPermission();
        console.log('Notification permission status:', permission);
        const vapidKey = 'BEpqmRx7kup5eCDvyZccYlp1f94Vci8_CHuqjusfAFM-sL5x8ollyHjwjnMnYaXVr86-toazezEHhO3zPGWIAiY';
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          // Get FCM token using the modular getToken
          const token = await getToken(messaging, { vapidKey }); // Pass messaging instance and vapidKey
          console.log('FCM Token:', token); // Log the token
          // Send token to your backend (just log here to test)
          console.log('Sending token to backend...');
          await saveFCMToken(token);
        } else {
          console.log('Notification permission denied.');
        }
      } catch (error) {
        console.error('Error getting notification permission or token:', error);
      }
    };

    requestPermission();
  }, []);

  // This is a sample function to send the FCM token to your backend
  async function saveFCMToken(fcmToken) {
    try {
      const response = await fetch(`${BASE_URL}/user/save-fcm-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Use authentication if required
        },
        body: JSON.stringify({ fcmToken }), // Send the FCM token in the request body
      });

      const data = await response.json();
      if (data.success) {
        console.log('FCM token saved successfully.');
      } else {
        console.error('Error saving FCM token:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return <div></div>;
};

export default RequestNotificationPermission;