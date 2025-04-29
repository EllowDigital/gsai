import { useEffect, useRef, useState } from 'react';

// Define affiliation types for better type safety
interface Affiliation {
  name: string;
  logo: string;
}

const Affiliations = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollInterval, setScrollInterval] = useState<ReturnType<typeof setInterval> | null>(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('animate-fade-in-up');
            target.style.visibility = 'visible';
            target.style.opacity = '1';

            // Unobserve after animation for better performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    const elements = document.querySelectorAll('.affiliation-animate');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Auto-scroll carousel with pause on hover
  useEffect(() => {
    const carousel = carouselRef.current;

    const startCarousel = () => {
      if (carousel && !isHovered) {
        if (scrollInterval) {
          clearInterval(scrollInterval); // Clear existing interval
        }

        const interval = setInterval(() => {
          if (carousel) {
            carousel.scrollLeft += 1;

            // Reset scroll position when reaching the end
            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
              carousel.scrollLeft = 0;
            }
          }
        }, 20);

        setScrollInterval(interval);
      }
    };

    // Start the carousel and setup hover events
    startCarousel();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    carousel?.addEventListener('mouseenter', handleMouseEnter);
    carousel?.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners and interval
    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
      carousel?.removeEventListener('mouseenter', handleMouseEnter);
      carousel?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  const affiliations: Affiliation[] = [
    { name: 'Government of India', logo: '/images/india.png' },
    { name: 'Ministry of Youth Affairs and Sports', logo: '/images/ministry.png' },
    { name: 'MSME Certification', logo: '/images/MSME.png' },
    { name: 'ISO Certified', logo: '/images/iso.png' },
    { name: 'Fit India Movement', logo: '/images/fit-india.png' },
    { name: 'Khelo India Program', logo: '/images/khelo-india.png' },
    { name: 'School Games Federation of India', logo: '/images/SGF.png' },
    { name: 'Taekwondo Federation of India', logo: '/images/takewondo.png' },
    { name: 'Uttar Pradesh Olympic Association', logo: '/images/up-olympic.png' },
    { name: 'UP Kalaripayattu Association', logo: '/images/up-kalarippayattu.png' },
    { name: 'Kalaripayattu Association Event', logo: '/images/IMG-20250404-WA0015.png' },
    { name: 'Ghatak Sports Academy Logo', logo: '/images/logo.png' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="gsai-container">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl text-white affiliation-animate opacity-0">
            Recognitions & Affiliations
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gsai-red mx-auto mt-3 mb-6 sm:mt-4 sm:mb-8"></div>
          <p
            className="text-gray-300 text-sm md:text-base max-w-xl sm:max-w-2xl mx-auto px-4 affiliation-animate opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Ghatak Sports Academy India™ is proud to be recognized and affiliated with these prestigious organizations.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto py-4 sm:py-6 md:py-8 affiliation-animate opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 animate-scroll">
            {affiliations.map((affiliation, index) => (
              <div
                key={index}
                className="min-w-[160px] sm:min-w-[180px] md:min-w-[220px] glass-card p-3 sm:p-4 flex flex-col items-center mx-2"
              >
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-lg mb-3 sm:mb-4"
                  loading="lazy"
                />
                <p className="text-white text-center text-sm sm:text-base">{affiliation.name}</p>
              </div>
            ))}

            {/* Duplicate items for smooth infinite scrolling */}
            {affiliations.map((affiliation, index) => (
              <div
                key={`dup-${index}`}
                className="min-w-[160px] sm:min-w-[180px] md:min-w-[220px] glass-card p-3 sm:p-4 flex flex-col items-center mx-2"
                aria-hidden="true" // Hide duplicate items from screen readers
              >
                <img
                  src={affiliation.logo}
                  alt=""
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-lg mb-3 sm:mb-4"
                  loading="lazy"
                />
                <p className="text-white text-center text-sm sm:text-base">{affiliation.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
