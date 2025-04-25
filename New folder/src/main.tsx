
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
const reportWebVitals = (metric: any) => {
  // You can send the metrics to your analytics service
  console.log(metric);
};

// Add web vitals observer
const observer = new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    reportWebVitals(entry);
  }
});

// Observe core web vitals
observer.observe({ type: 'largest-contentful-paint', buffered: true });
observer.observe({ type: 'first-input', buffered: true });
observer.observe({ type: 'layout-shift', buffered: true });

// Check if the root element exists to avoid potential null errors
const rootElement = document.getElementById("root");

if (!rootElement) {
    console.error("Failed to find the root element. Make sure your HTML has an element with id 'root'.");
} else {
    try {
        const startTime = performance.now();
        
        const root = createRoot(rootElement);
        root.render(<App />);
        
        // Log render time for performance monitoring
        const renderTime = performance.now() - startTime;
        console.log(`Initial render took ${renderTime.toFixed(2)}ms`);
    } catch (error) {
        console.error("An error occurred while rendering the app:", error);
        
        // Show a user-friendly error message in the UI
        rootElement.innerHTML = `
            <div style="padding: 20px; text-align: center; font-family: sans-serif;">
                <h2>Something went wrong</h2>
                <p>We're sorry, but there was an error loading the application. Please try refreshing the page.</p>
                <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 20px; cursor: pointer;">
                    Refresh Page
                </button>
            </div>
        `;
    }
}
