import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/glassmorphism.css';

// Performance monitoring function to log metrics
const reportWebVitals = (metric: any) => {
    // Send the metric to your analytics service if necessary
    console.log(metric);
};

// Create a PerformanceObserver to capture web vitals
const observer = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(entry => reportWebVitals(entry));
});

// Observe the core web vitals metrics
['largest-contentful-paint', 'first-input', 'layout-shift'].forEach(type => {
    observer.observe({ type, buffered: true });
});

// Safely check if the root element exists before rendering
const rootElement = document.getElementById("root");

if (!rootElement) {
    console.error("Root element with id 'root' not found. Please ensure it's present in your HTML.");
} else {
    try {
        const startTime = performance.now();

        // Create the root and render the application
        const root = createRoot(rootElement);
        root.render(<App />);

        // Log the initial render time for performance monitoring
        const renderTime = performance.now() - startTime;
        console.log(`Initial render took ${renderTime.toFixed(2)}ms`);
    } catch (error) {
        console.error("Error rendering the app:", error);

        // Display a user-friendly error message
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
}
