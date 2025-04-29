
const SectionLoader = () => (
  <div
    className="w-full py-10 flex items-center justify-center"
    aria-label="Loading content section"
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className="relative">
      <div
        className="w-8 h-8 rounded-full bg-gradient-to-r from-gsai-red to-gsai-gold animate-pulse"
        style={{ animationDuration: '0.8s' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gsai-red/30 to-gsai-gold/30 rounded-full blur-lg animate-pulse" 
        style={{ animationDuration: '1.2s' }} />
    </div>
  </div>
);

export default SectionLoader;
