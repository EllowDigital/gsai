import React, { useState, useEffect } from 'react';
import './Preloader.css';  // Make sure the path is correct

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsVisible(false);  // Hide the preloader when the page is fully loaded
    };

    // Attach the event listener for window load
    window.addEventListener('load', handleLoad);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // If `isVisible` is `false`, the preloader won't render
  return (
    isVisible ? (
      <div className="preloader-container">
        <div className="preloader-wrapper">
          <div className="preloader-circle"></div>
          <div className="preloader-text">Ghatak Sports Academy</div>
        </div>
      </div>
    ) : null
  );
};

export default Preloader;
