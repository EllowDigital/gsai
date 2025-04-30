import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const { pathname } = useLocation();

  const logError = useCallback(() => {
    console.error(
      `404 Error: Attempted to access a non-existent route: ${pathname}`,
      `Referrer: ${document.referrer || 'Direct Access'}`
    );
  }, [pathname]);

  useEffect(() => {
    logError();
  }, [logError]);

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gray-100 transition-all duration-500"
      aria-live="polite"
    >
      <section className="text-center max-w-lg p-8 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-6xl font-extrabold text-red-600 mb-6 animate-pulse">
          404
        </h1>
        <p className="text-2xl text-gray-700 mb-4">
          Oops! We couldn’t find that page.
        </p>
        <p className="text-lg text-gray-500 mb-6">
          The URL <code className="text-red-500 break-words">{pathname}</code> could not be located.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300"
        >
          Return to Home
        </a>
      </section>
    </main>
  );
};

export default NotFound;
