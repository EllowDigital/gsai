
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import ThreePreloader from './ThreePreloader';
import { isWebGLSupported, isLowPowerDevice } from '@/utils/webglDetection';
import './Preloader.css';

interface PreloaderProps {
  isVisible: boolean;
}

const Preloader = ({ isVisible }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shouldUse3D, setShouldUse3D] = useState(false);
  
  // Determine if we should use 3D preloader based on device capabilities
  useEffect(() => {
    const webGLSupported = isWebGLSupported();
    const lowPowerDevice = isLowPowerDevice();
    setShouldUse3D(webGLSupported && !lowPowerDevice);
  }, []);

  useEffect(() => {
    // Hide initial raw HTML preloader if any
    const initial = document.getElementById('initial-preloader');
    if (initial) initial.style.display = 'none';

    // Prevent page scroll during preloader
    document.body.style.overflow = isVisible ? 'hidden' : '';

    // Simulate loading progress (replace with real loading progress if available)
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + (100 - prev) * 0.05;
          return next >= 99.5 ? 100 : next;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }

    // Faster preloader fadeout
    if (!isVisible) {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
      }, 600); // Faster fade-out time

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  if (!isVisible && !fadeOut) return null;

  return (
    <motion.div
      ref={containerRef}
      id="preloader-container"
      className={cn('preloader-container', fadeOut && 'fade-out')}
      role="progressbar"
      aria-valuenow={fadeOut ? 100 : Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {shouldUse3D ? (
          // 3D WebGL Preloader
          <motion.div 
            key="3d-preloader"
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThreePreloader progress={progress} />
            <div className="absolute bottom-24 left-0 right-0 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="preloader-content"
              >
                <h1 className="preloader-title">Ghatak Sports Academy</h1>
                <p className="preloader-subtitle">Excellence in Martial Arts</p>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          // Fallback 2D Preloader
          <motion.div 
            key="2d-preloader"
            className="preloader-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="preloader-logo-container">
              <motion.img 
                src="/images/logo.png" 
                alt="GSAI Logo"
                className="preloader-logo"
                width={120}
                height={120}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            <div className="preloader-content">
              <h1 className="preloader-title">Ghatak Sports Academy</h1>
              <p className="preloader-subtitle">Excellence in Martial Arts</p>
              
              {/* 2D Progress bar */}
              <div className="mt-4 w-full max-w-xs mx-auto">
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-gsai-red to-gsai-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-white/70 text-xs mt-2">{Math.round(progress)}%</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
