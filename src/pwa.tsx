import { useState, useEffect } from "react";

interface PWAProps {
  className?: string;
  updateMessage?: string;
  autoUpdateTimeout?: number; // Time before auto update in milliseconds
}

const PWA = ({
  className = "",
  updateMessage = "New version available!",
  autoUpdateTimeout = 30000, // 30 seconds default
}: PWAProps) => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [countdown, setCountdown] = useState(autoUpdateTimeout / 1000); // in seconds
  const [updateInProgress, setUpdateInProgress] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const handleServiceWorkerUpdate = (registration: ServiceWorkerRegistration) => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setIsUpdateAvailable(true);
            }
          });
        }
      };

      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          if (registration.waiting) {
            setIsUpdateAvailable(true);
          }
          registration.addEventListener("updatefound", () => handleServiceWorkerUpdate(registration));
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (isUpdateAvailable) {
      setShowNotification(true);
    }

    if (isUpdateAvailable && countdown > 0 && !updateInProgress) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isUpdateAvailable, countdown, updateInProgress]);

  const handleUpdate = () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "SKIP_WAITING" });
    }
    setUpdateInProgress(true);
    window.location.reload();
  };

  const handleClose = () => {
    setIsUpdateAvailable(false);
    setShowNotification(false);
    setCountdown(autoUpdateTimeout / 1000); // Reset countdown
  };

  const progressPercentage = (countdown / (autoUpdateTimeout / 1000)) * 100;

  if (!isUpdateAvailable) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 bg-black bg-opacity-80 rounded-lg shadow-lg z-50 text-white transform transition-transform ${showNotification ? "translate-y-0" : "translate-y-full"
        } ${className}`}
      style={{ transition: "transform 0.5s ease-in-out" }}
    >
      <p className="mb-2 font-medium">{updateMessage}</p>
      {countdown > 0 && !updateInProgress && (
        <div className="mb-2 text-sm">
          Auto-update in {countdown} seconds...
          <div className="mt-2 h-2 bg-gray-600 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
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
