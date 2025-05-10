
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/glassmorphism.css';
import './styles/about-animations.css';
import './styles/theme.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeSite } from './utils/site-initializer';

// Initialize site optimizations
initializeSite();

// Set up performance monitoring with error handling
const reportWebVitals = (metric: any) => {
    if (metric && typeof metric === 'object') {
        console.log(metric);
    }
};

// Set up performance observer with error handling
try {
    const observer = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach(entry => reportWebVitals(entry));
    });

    ['largest-contentful-paint', 'first-input', 'layout-shift'].forEach(type => {
        observer.observe({ type, buffered: true });
    });
} catch (error) {
    console.warn('Performance observer not supported:', error);
}

// Get the root element
const rootElement = document.getElementById("root");

if (rootElement) {
    try {
        // Measure render time
        const startTime = performance.now();
        
        // Create root and render app
        const root = createRoot(rootElement);
        root.render(
            <>
                <App />
                <ToastContainer 
                    position="top-right" 
                    autoClose={3000} 
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>
        );

        // Log render time
        const renderTime = performance.now() - startTime;
        console.log(`Initial render took ${renderTime.toFixed(2)}ms`);
        
        // Add some extra performance metrics
        window.addEventListener('load', () => {
            setTimeout(() => {
                const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                if (navTiming) {
                    console.log('Performance metrics:', {
                        pageLoad: Math.round(navTiming.loadEventEnd - navTiming.startTime),
                        domContentLoaded: Math.round(navTiming.domContentLoadedEventEnd - navTiming.startTime)
                    });
                }
            }, 0);
        });
        
    } catch (error) {
        console.error("Error rendering the app:", error);
        rootElement.innerHTML = `
            <div style="padding: 20px; text-align: center; font-family: sans-serif;">
                <h2>Something went wrong</h2>
                <p>Sorry, an error occurred while loading the application. Please try refreshing the page.</p>
                <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 20px; cursor: pointer;">
                    Refresh Page
                </button>
            </div>
        `;
    }
} else {
    console.error("Root element with id 'root' not found. Please ensure it's present in your HTML.");
}
