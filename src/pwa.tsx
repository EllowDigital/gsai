
import { useEffect } from 'react';
import { toast } from "react-toastify";

const PWA = () => {
  useEffect(() => {
    // Handle service worker registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('ServiceWorker registered with scope:', registration.scope);
            
            // Handle updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New content is available, show update toast
                    toast.info('New content available! Refresh to update.', {
                      onClick: () => window.location.reload(),
                      autoClose: false,
                      closeOnClick: true,
                      position: 'bottom-right'
                    });
                  }
                });
              }
            });
          })
          .catch(error => {
            console.error('ServiceWorker registration failed:', error);
          });
      });
    }

    // Handle beforeinstallprompt for app installation
    window.addEventListener('beforeinstallprompt', () => {
      // For future implementation: store event for later use
      // Currently not showing install prompt automatically
    });
  }, []);

  return null;
};

export default PWA;
