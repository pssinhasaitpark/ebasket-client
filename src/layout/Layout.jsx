import React from 'react';
import Header from './Header'; // Your header component
import Footer from './Footer'; // Your footer component

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main>{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
