
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'light' | 'system';

interface AppState {
  // UI State
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  
  // User preferences
  theme: Theme;
  setTheme: (theme: Theme) => void;
  
  // Loading state
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  
  // Section visibility tracker for animations
  visibleSections: Record<string, boolean>;
  setVisibleSection: (sectionId: string, isVisible: boolean) => void;
  
  // Contact form state
  contactFormData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  updateContactForm: (field: keyof AppState['contactFormData'], value: string) => void;
  resetContactForm: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // UI State
      isMobileMenuOpen: false,
      toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
      closeMobileMenu: () => set({ isMobileMenuOpen: false }),
      
      // User preferences
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      
      // Loading state
      isLoading: true,
      setLoading: (isLoading) => set({ isLoading }),
      
      // Section visibility for animations
      visibleSections: {},
      setVisibleSection: (sectionId, isVisible) => 
        set((state) => ({
          visibleSections: {
            ...state.visibleSections,
            [sectionId]: isVisible
          }
        })),
      
      // Contact form state
      contactFormData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      updateContactForm: (field, value) => 
        set((state) => ({
          contactFormData: {
            ...state.contactFormData,
            [field]: value
          }
        })),
      resetContactForm: () => 
        set({
          contactFormData: {
            name: '',
            email: '',
            phone: '',
            message: ''
          }
        })
    }),
    {
      name: 'gsai-app-storage',
      partialize: (state) => ({
        theme: state.theme,
        // Only persist non-sensitive data
      })
    }
  )
);
