import React from 'react';
import './notify.css';
const NotificationModal = ({ notification, onClose }) => {
    console.log('Rendering NotificationModal with:', notification);
  
    return (
      <div className="notification-modal">
        <div className="modal-notify-content">
          <button className="close-notify-btn" onClick={onClose}>×</button>
          <p>{notification.title}</p>
          <p>{notification.body}</p>
        </div>
      </div>
    );
  };
  

export default NotificationModal;
