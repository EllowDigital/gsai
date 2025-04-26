const SectionLoader = () => (
  <div
    className="w-full py-16 flex items-center justify-center"
    aria-label="Loading content section"
  >
    <div
      className="animate-pulse w-8 h-8 rounded-full bg-gsai-red"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default SectionLoader;
