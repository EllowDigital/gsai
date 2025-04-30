
import { useEffect } from 'react';

// Types
export type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  showCloseButton?: boolean;
  onClose?: () => void;
};

/**
 * Custom hook for showing toast notifications
 */
export function useToast() {
  // Effect to clean up any remaining toasts on unmount
  useEffect(() => {
    return () => {
      // Find and remove any existing toast containers
      const existingContainers = document.querySelectorAll('.toast-container');
      existingContainers.forEach(container => {
        container.remove();
      });
    };
  }, []);

  // Function to show a toast notification
  const showToast = ({
    message,
    type = 'info',
    duration = 3000,
    position = 'top-right',
    showCloseButton = true,
    onClose
  }: ToastProps) => {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector(`.toast-container.${position}`);
    
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = `toast-container ${position} fixed z-50`;
      
      // Position the container based on position prop
      switch (position) {
        case 'top-right':
          toastContainer.classList.add('top-4', 'right-4');
          break;
        case 'top-left':
          toastContainer.classList.add('top-4', 'left-4');
          break;
        case 'bottom-right':
          toastContainer.classList.add('bottom-4', 'right-4');
          break;
        case 'bottom-left':
          toastContainer.classList.add('bottom-4', 'left-4');
          break;
        case 'top-center':
          toastContainer.classList.add('top-4', 'left-1/2', '-translate-x-1/2');
          break;
        case 'bottom-center':
          toastContainer.classList.add('bottom-4', 'left-1/2', '-translate-x-1/2');
          break;
      }
      
      document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast flex items-center justify-between p-3 mb-3 rounded shadow-lg max-w-sm text-sm animate-fade-in w-full`;
    toast.setAttribute('role', 'alert');
    
    // Set toast background color based on type
    switch (type) {
      case 'success':
        toast.classList.add('bg-green-500', 'text-white');
        break;
      case 'error':
        toast.classList.add('bg-red-500', 'text-white');
        break;
      case 'warning':
        toast.classList.add('bg-yellow-500', 'text-white');
        break;
      case 'info':
      default:
        toast.classList.add('bg-blue-500', 'text-white');
    }
    
    // Create message content
    const messageElement = document.createElement('div');
    messageElement.className = 'flex-1 mr-2';
    messageElement.textContent = message;
    toast.appendChild(messageElement);
    
    // Add close button if needed
    if (showCloseButton) {
      const closeButton = document.createElement('button');
      closeButton.className = 'text-white hover:text-gray-200';
      closeButton.innerHTML = '&times;';
      closeButton.onclick = () => {
        removeToast();
      };
      toast.appendChild(closeButton);
    }
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Auto-remove toast after duration
    const timeoutId = setTimeout(removeToast, duration);
    
    // Function to remove toast
    function removeToast() {
      toast.classList.add('opacity-0');
      setTimeout(() => {
        if (toastContainer && toastContainer.contains(toast)) {
          toastContainer.removeChild(toast);
          
          // Call onClose callback if provided
          if (onClose) {
            onClose();
          }
          
          // Remove container if empty
          if (toastContainer.childNodes.length === 0) {
            document.body.removeChild(toastContainer);
          }
        }
      }, 300);
      clearTimeout(timeoutId);
    }
    
    // Return function to manually close toast
    return removeToast;
  };

  return { showToast };
}
