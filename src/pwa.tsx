
import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const PWA = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      // We're intentionally not storing the event since we're not using the prompt
      // functionality in this version
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
                  // Update is available, show toast notification
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
  }, [toast]);

  return null;
};

export default PWA;
