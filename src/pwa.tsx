
import { useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const PWA = () => {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Register service worker with correct MIME type
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { type: 'classic' })
        .then(registration => {
          console.log('ServiceWorker registered with scope:', registration.scope);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setIsUpdateAvailable(true);
                  toast({
                    title: "Update Available",
                    description: "A new version of the app is available. Refresh to update.",
                    action: <button 
                      onClick={() => window.location.reload()}
                      className="bg-gsai-red text-white px-4 py-1 rounded-md"
                    >
                      Refresh
                    </button>
                  });
                }
              });
            }
          });
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return null;
};

export default PWA;
