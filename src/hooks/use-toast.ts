
import React from 'react'; // Add React import
import { useToast as useToastOriginal } from "@/components/ui/use-toast";

// Re-export the hook
export const useToast = useToastOriginal;
