
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import './Preloader.css';

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader = ({ isVisible }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      className={cn('preloader-container', fadeOut && 'fade-out')}
      role="progressbar"
      aria-valuenow={fadeOut ? 100 : 0}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="preloader-wrapper">
        <div className="preloader-logo-container">
          <img 
            src="/images/logo.png" 
            alt="GSAI Logo"
            className="preloader-logo"
            width={120}
            height={120}
          />
        </div>
        <div className="preloader-content">
          <h1 className="preloader-title">Ghatak Sports Academy</h1>
          <p className="preloader-subtitle">Getting the field ready for action...</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
