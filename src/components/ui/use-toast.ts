// use-toast.ts
import { useState } from "react";

export function useToast() {
  // Manage the list of toasts
  const [toasts, setToasts] = useState<any[]>([]);

  // Function to add a toast
  const toast = (newToast: any) => {
    setToasts((prev) => [...prev, newToast]);
  };

  // Optionally, a function to remove a toast
  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { toasts, toast, removeToast };
}
