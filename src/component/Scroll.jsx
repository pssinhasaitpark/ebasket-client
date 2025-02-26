import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Delay scrolling to top in case of initial render
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, 100); // Delay can be adjusted based on need

    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [location]); // This runs whenever the route changes

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;
