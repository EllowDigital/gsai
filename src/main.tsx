import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Check if the root element exists to avoid potential null errors
const rootElement = document.getElementById("root");

if (!rootElement) {
    console.error("Failed to find the root element. Make sure your HTML has an element with id 'root'.");
} else {
    try {
        createRoot(rootElement).render(<App />);
    } catch (error) {
        console.error("An error occurred while rendering the app:", error);
    }
}
