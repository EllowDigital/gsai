
import { useEffect, useRef, useState } from 'react';

// Define affiliation types for better type safety
interface Affiliation {
  name: string;
  logo: string;
}

const Affiliations = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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

    // Observe elements with the 'affiliation-animate' class
    const elements = document.querySelectorAll('.affiliation-animate');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Auto-scroll carousel with pause on hover
  useEffect(() => {
    let scrollInterval: ReturnType<typeof setInterval>;

    const carousel = carouselRef.current;

    const startCarousel = () => {
      if (carousel && !isHovered) {
        scrollInterval = setInterval(() => {
          if (carousel) {
            carousel.scrollLeft += 1;

            // Reset scroll position when reaching the end
            if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
              carousel.scrollLeft = 0;
            }
          }
        }, 20);
      }
    };

    // Start the carousel
    startCarousel();

    // Pause carousel on hover
    carousel?.addEventListener('mouseenter', () => setIsHovered(true));
    carousel?.addEventListener('mouseleave', () => setIsHovered(false));

    // Restart on hover state change
    if (isHovered && scrollInterval) {
      clearInterval(scrollInterval);
    } else if (!isHovered) {
      startCarousel();
    }

    // Cleanup event listeners and interval
    return () => {
      clearInterval(scrollInterval);
      carousel?.removeEventListener('mouseenter', () => setIsHovered(true));
      carousel?.removeEventListener('mouseleave', () => setIsHovered(false));
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
    <section className="py-20 bg-black">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white affiliation-animate opacity-0">Recognitions & Affiliations</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <p
            className="text-gray-300 max-w-2xl mx-auto affiliation-animate opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Ghatak Sports Academy India™ is proud to be recognized and affiliated with these prestigious organizations.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-hidden py-8 affiliation-animate opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex space-x-8 animate-scroll">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="min-w-[200px] glass-card p-4 flex flex-col items-center">
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  className="w-32 h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-white text-center">{affiliation.name}</p>
              </div>
            ))}

            {/* Duplicate items for smooth infinite scrolling */}
            {affiliations.map((affiliation, index) => (
              <div key={`dup-${index}`} className="min-w-[200px] glass-card p-4 flex flex-col items-center">
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  className="w-32 h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-white text-center">{affiliation.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
