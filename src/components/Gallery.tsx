
import React, { useState, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryImage = ({ src, alt, onClick }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 gallery-animate opacity-0"
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gsai-gray-700 animate-pulse flex items-center justify-center">
          <svg className="w-10 h-10 text-gsai-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-64 object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-semibold text-lg">{alt}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.gallery-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1517438476312-10d79c077509', alt: 'Karate Training' },
    { src: 'https://images.unsplash.com/photo-1593352216894-89108a0d2653', alt: 'Boxing Class' },
    { src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865', alt: 'Taekwondo Competition' },
    { src: 'https://images.unsplash.com/photo-1559395242-3a671e234c6c', alt: 'MMA Training' },
    { src: 'https://images.unsplash.com/photo-1603455907087-5b246b0aa7ed', alt: 'Self-Defense Workshop' },
    { src: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0', alt: 'Kickboxing Session' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gsai-gray-900 to-black">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white gallery-animate opacity-0">Gallery</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto gallery-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            Take a glimpse into our state-of-the-art facilities and training sessions at Ghatak Sports Academy India™.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-gsai-red"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery expanded view" 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
