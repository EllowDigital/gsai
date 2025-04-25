import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/components/ui/sonner"; // ✅ Toast notification

const PWA = () => {
  const [show, setShow] = useState(false);

  const {
    needRefresh,
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, registration) {
      console.log("✅ Service Worker registered:", swUrl);
    },
    onRegisterError(error) {
      console.error("❌ SW registration error:", error);
    },
    onNeedRefresh() {
      console.info("🔄 New version available");
      setShow(true);
    },
  });

  const handleRefresh = () => {
    toast("🔄 Updating to the latest version...");
    updateServiceWorker(true);
    setShow(false);
  };

  const handleDismiss = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 max-w-sm z-50"
        >
          <Alert
            className="shadow-lg border border-yellow-500 bg-yellow-100 text-yellow-900"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-2 items-start">
                <AlertTriangle className="w-5 h-5 mt-1" />
                <div>
                  <AlertTitle>New Update Available</AlertTitle>
                  <AlertDescription>
                    A new version of this app is ready. Refresh to update and enjoy the latest features.
                  </AlertDescription>
                </div>
              </div>
              <button onClick={handleDismiss} className="p-1 text-yellow-700 hover:text-yellow-900">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="ghost" onClick={handleDismiss}>
                Later
              </Button>
              <Button onClick={handleRefresh} className="gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
            </div>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWA;
