
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

const reportWebVitals = (metric: any) => {
    console.log(metric);
};

const observer = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(entry => reportWebVitals(entry));
});

['largest-contentful-paint', 'first-input', 'layout-shift'].forEach(type => {
    observer.observe({ type, buffered: true });
});

const rootElement = document.getElementById("root");

if (rootElement) {
    try {
        const startTime = performance.now();
        const root = createRoot(rootElement);
        root.render(
            <>
                <App />
                <ToastContainer position="top-right" autoClose={3000} />
            </>
        );

        const renderTime = performance.now() - startTime;
        console.log(`Initial render took ${renderTime.toFixed(2)}ms`);
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
