import { useState, useEffect } from 'react';

interface PWAProps {
  className?: string;
}

const PWA = ({ className = "" }: PWAProps) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  // Effect to register the service worker and handle update
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const handleServiceWorkerUpdate = (registration: ServiceWorkerRegistration) => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setIsUpdateAvailable(true);
            }
          });
        }
      };

      // Register the service worker and detect updates
      navigator.serviceWorker
        .register('/sw.js') // Ensure sw.js is located in the public folder
        .then((registration) => {
          // Check if there’s already a waiting worker (i.e., update available)
          if (registration.waiting) {
            setIsUpdateAvailable(true);
          }
          registration.addEventListener('updatefound', () => handleServiceWorkerUpdate(registration));
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error);
        });
    }
  }, []);

  // Trigger service worker update
  const handleUpdate = () => {
    if (navigator.serviceWorker.controller) {
      // Send a message to the service worker to skip waiting and activate the new version
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
    // Reload the page to get the updated service worker
    window.location.reload();
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
