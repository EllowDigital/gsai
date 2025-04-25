
import React, { useEffect, useState } from 'react';
import './Preloader.css';

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide the raw HTML preloader on mount
    const htmlPreloader = document.getElementById('initial-preloader');
    if (htmlPreloader) {
      htmlPreloader.style.display = 'none';
    }

    // Set body to not scroll during preloader
    document.body.style.overflow = isVisible ? 'hidden' : '';

    if (!isVisible) {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        const el = document.getElementById('preloader-container');
        if (el) el.style.display = 'none';
      }, 1000); // Same as fade-out duration

      return () => clearTimeout(timeout); // Clean up if unmounted early
    }
  }, [isVisible]);

  if (!isVisible && !fadeOut) return null;

  return (
    <div
      id="preloader-container"
      className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}
    >
      <div className="preloader-wrapper">
        <div className="preloader-circle"></div>
        <div className="preloader-text">Ghatak Sports Academy</div>
        <div className="preloader-subtext">Loading experience...</div>
      </div>
    </div>
  );
};

export default Preloader;
