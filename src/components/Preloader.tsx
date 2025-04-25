import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isVisible }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide initial raw HTML preloader if any
    const initial = document.getElementById('initial-preloader');
    if (initial) initial.style.display = 'none';

    // Prevent page scroll during preloader
    document.body.style.overflow = isVisible ? 'hidden' : '';

    if (!isVisible) {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
      }, 1000); // Match CSS fade-out time

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  if (!isVisible && !fadeOut) return null;

  return (
    <div
      ref={containerRef}
      id="preloader-container"
      className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}
    >
      <div className="preloader-wrapper">
        <div className="preloader-ring"></div>
        <div className="preloader-text">Ghatak Sports Academy</div>
        <div className="preloader-subtext">Getting the field ready for action...</div>
      </div>
    </div>
  );
};

export default Preloader;
