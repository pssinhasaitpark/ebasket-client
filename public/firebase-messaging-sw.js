importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


self.addEventListener('install', (event) => {
  event.waitUntil(
    fetch('/config.json')
      .then((response) => response.json())
      .then((config) => {
        // console.log('Firebase config loaded:', config);

        self.firebaseConfig = config;

        // Now initialize Firebase with the loaded config
        if (self.firebaseConfig) {
          const firebaseConfig = self.firebaseConfig;

          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

          const messaging = firebase.messaging();

          messaging.onBackgroundMessage(function (payload) {
            // console.log('[firebase-messaging-sw.js] Received background message', payload);
            if (payload.notification) {
              const notificationTitle = payload.notification.title;
              const notificationOptions = {
                body: payload.notification.body,
                icon: payload.notification.icon || 'default-icon.png',
              };
              self.registration.showNotification(notificationTitle, notificationOptions);
            } else {
              // console.log('No notification payload found.');
            }
          });          

        } else {
          // console.error('Firebase config not available.');
        }
      })
      .catch((error) => {
        // console.error('Error loading Firebase config:', error);
      })
  );
});

// Listen for the 'activate' event to make sure the service worker gets control immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
