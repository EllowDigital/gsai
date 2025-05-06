
/**
 * Detects if WebGL is supported in the current browser
 * @returns {boolean} True if WebGL is supported
 */
export const isWebGLSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

/**
 * Detects if the device is a low-powered mobile device
 * This is a simple heuristic and not 100% accurate
 */
export const isLowPowerDevice = (): boolean => {
  // Check for navigator.hardwareConcurrency as a rough estimate
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) && 
    (!navigator.hardwareConcurrency || navigator.hardwareConcurrency < 4)
  );
};
