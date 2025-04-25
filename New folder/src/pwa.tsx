
import { useState, useEffect } from 'react';

interface PWAProps {
  className?: string;
}

const PWA = ({ className = "" }: PWAProps) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  
  // Simple PWA update checker implementation
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setIsUpdateAvailable(true);
              }
            });
          }
        });
      }).catch(error => {
        console.error('Service worker registration failed:', error);
      });
    }
  }, []);

  const handleUpdate = () => {
    if (isUpdateAvailable) {
      window.location.reload();
    }
  };

  if (!isUpdateAvailable) return null;

  return (
    <div className={`fixed bottom-4 right-4 p-4 bg-black bg-opacity-80 rounded-lg shadow-lg z-50 text-white ${className}`}>
      <p className="mb-2 font-medium">New version available!</p>
      <button
        onClick={handleUpdate}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
      >
        Update Now
      </button>
    </div>
  );
};

export default PWA;
