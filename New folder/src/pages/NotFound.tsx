import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  // Using useCallback to prevent unnecessary re-renders for the log function
  const logError = useCallback(() => {
    console.error(
      `404 Error: User attempted to access a non-existent route: ${location.pathname}`,
      `Referrer: ${document.referrer || 'Direct Access'}`
    );
  }, [location.pathname]);

  useEffect(() => {
    logError();
  }, [logError]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 transition-all duration-500"
      aria-live="polite"
    >
      <div className="text-center max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-600 mb-4 animate-pulse">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-500 mb-4">
          The URL <code className="text-red-500">{location.pathname}</code> could not be found.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
