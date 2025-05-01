
// Use import type to avoid React being bundled in the output
import type { ReactElement } from 'react';
import { useToast as useToastOriginal } from "@/components/ui/use-toast";

// Re-export the hook
export const useToast = useToastOriginal;
