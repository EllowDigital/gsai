import { useState, useEffect } from 'react';

interface PWAProps {
  className?: string;
  updateMessage?: string;
  autoUpdateTimeout?: number; // Time before auto update
}

const PWA = ({
  className = "",
  updateMessage = "New version available!",
  autoUpdateTimeout = 30000, // 30 seconds default timeout
}: PWAProps) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [countdown, setCountdown] = useState(autoUpdateTimeout / 1000); // Convert ms to seconds
  const [updateInProgress, setUpdateInProgress] = useState(false);

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

  // Countdown timer for auto update
  useEffect(() => {
    if (isUpdateAvailable && countdown > 0 && !updateInProgress) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isUpdateAvailable, countdown, updateInProgress]);

  // Trigger service worker update
  const handleUpdate = () => {
    if (navigator.serviceWorker.controller) {
      // Send a message to the service worker to skip waiting and activate the new version
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
    // Reload the page to get the updated service worker
    window.location.reload();
    setUpdateInProgress(true);
  };

  // Close the update notification
  const handleClose = () => {
    setIsUpdateAvailable(false);
    setCountdown(autoUpdateTimeout / 1000); // Reset the countdown
  };

  if (!isUpdateAvailable) return null;

  return (
    <div className={`fixed bottom-4 right-4 p-4 bg-black bg-opacity-80 rounded-lg shadow-lg z-50 text-white ${className}`}>
      <p className="mb-2 font-medium">{updateMessage}</p>
      {countdown > 0 && !updateInProgress && (
        <p className="mb-2 text-sm">Auto update in {countdown} seconds...</p>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
        >
          Update Now
        </button>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PWA;
