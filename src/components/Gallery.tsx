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
    <Card3D className="overflow-hidden rounded-2xl shadow-lg">
      <div
        ref={imageRef}
        onClick={onClick}
        className="relative w-full h-64 md:h-72 lg:h-80 xl:h-96 cursor-pointer gallery-animate opacity-0 transition-all"
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} image`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClick();
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
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
          <p className="text-white font-semibold text-lg">{alt}</p>
        </div>
      </div>
    </Card3D>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const titleRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          if (entry.target instanceof HTMLElement) {
            entry.target.style.visibility = 'visible';
            entry.target.style.opacity = '1';
          }
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.gallery-animate');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const galleryImages = [
    // Major Events
    { src: '/images/slider.png', alt: 'National Martial Arts Games 2019' },
    { src: '/images/slider5.png', alt: 'National Kalaripayattu Championship 2022' },
    { src: '/images/gallery4.png', alt: 'Kalaripayattu Nationals 2022' },
    { src: '/images/gallery5.png', alt: 'World Martial Arts Games' },
  
    // Prominent Figures
    { src: '/images/gallery1.png', alt: 'With Anurag Thakur Sir' },
    { src: '/images/gallery3.jpg', alt: "With Parul Chaudhary Ma'am" },
    { src: '/images/gallery3.png', alt: 'International Martial Arts Champion' },
  
    // Practice & Training
    { src: '/images/slider2.png', alt: 'Outdoor Training Session' },
    { src: '/images/branch2.webp', alt: 'Branch 2: Outdoor Sunday Practice' },
    { src: '/images/new1.webp', alt: 'Martial Arts Practice Session 1' },
    { src: '/images/new2.webp', alt: 'Martial Arts Practice Session 2' },
    { src: '/images/student.webp', alt: 'Our Student' },
  
    // Instructor Highlights
    { src: '/images/new4.webp', alt: 'Our Instructor: Nitesh Yadav' },
    { src: '/images/new3.webp', alt: 'Our Instructor: Nitesh Yadav (Portrait)' },
  
    // Media
    { src: '/images/slider4.png', alt: 'In-depth Interview with Instructor' },
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
    const total = galleryImages.length;
    const newIndex = direction === 'next' ? (currentIndex + 1) % total : (currentIndex - 1 + total) % total;
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
    <section id="gallery" className="py-20 bg-gradient-to-b from-gsai-gray-900 to-black text-white">
      <div className="gsai-container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="section-title text-3xl md:text-4xl font-bold gallery-animate opacity-0">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto gallery-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            Take a glimpse into our state-of-the-art facilities and training sessions at Ghatak Sports Academy India™.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-animate opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
              <GalleryImage {...image} onClick={() => openLightbox(index)} />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            ref={lightboxRef}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div
              className="relative w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gsai-red z-20"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-lg overflow-hidden">
                <img src={selectedImage} alt={selectedImageAlt} className="w-full max-h-[70vh] object-contain mx-auto" />
              </div>
              <div className="flex justify-between items-center mt-4 px-2">
                <button
                  onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <p className="text-white text-sm text-center flex-1 px-4">{selectedImageAlt}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
