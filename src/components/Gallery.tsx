
import { useState, useEffect, useRef } from 'react';
import { useParallax } from '@/hooks/use-parallax';
import Card3D from './ui/3d-card';

interface ImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryImage = ({ src, alt, onClick }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useParallax<HTMLDivElement>({ speed: 0.05, direction: 'vertical' });

  return (
    <Card3D
      className="overflow-hidden rounded-lg"
      intensity={10}
    >
      <div
        ref={imageRef}
        onClick={onClick}
        className="relative w-full h-64 cursor-pointer gallery-animate opacity-0"
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} image`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-gsai-gray-700 animate-pulse flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gsai-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white font-semibold text-lg">{alt}</p>
        </div>
      </div>
    </Card3D>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const titleRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            if (entry.target instanceof HTMLElement) {
              entry.target.style.visibility = 'visible';
              entry.target.style.opacity = '1';
            }
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
    { src: '/images/slider.png', alt: 'National Martial Arts Games 2019' },
    { src: '/images/gallery1.png', alt: 'With Anurag Thakur Sir' },
    { src: '/images/gallery3.jpg', alt: 'With Parul Chaudhary Ma\'am' },
    { src: '/images/gallery3.png', alt: 'International Martial Arts Champion' },
    { src: '/images/gallery4.png', alt: 'Kalaripayattu Nationals 2022' },
    { src: '/images/gallery5.png', alt: 'World Martial Arts Games' },
    { src: '/images/slider2.png', alt: 'Outdoor Training Session' },
    { src: '/images/slider5.png', alt: 'National Kalaripayattu Championship 2022' },
    { src: '/images/slider4.png', alt: 'In-depth Interview' },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].src);
    setSelectedImageAlt(galleryImages[index].alt);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    let newIndex: number;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].src);
    setSelectedImageAlt(galleryImages[newIndex].alt);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'ArrowLeft') navigateImage('prev');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gsai-gray-900 to-black">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="section-title text-white gallery-animate opacity-0"
          >
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <p
            className="text-gray-300 max-w-2xl mx-auto gallery-animate opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Take a glimpse into our state-of-the-art facilities and training sessions at Ghatak Sports Academy India™.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-animate opacity-0" style={{ animationDelay: `${0.1 * index}s` }}>
              <GalleryImage
                src={image.src}
                alt={image.alt}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>

        {/* Enhanced 3D Lightbox */}
        {selectedImage && (
          <div
            ref={lightboxRef}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div 
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg overflow-hidden">
                <button
                  className="absolute top-4 right-4 text-white hover:text-gsai-red transition-colors z-10"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <img
                  src={selectedImage}
                  alt={selectedImageAlt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <p className="text-white text-center">{selectedImageAlt}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
