
import React, { useEffect } from 'react';
import { useParallax } from '@/hooks/use-parallax';

const About = () => {
  // References for parallax effects
  const headingRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });
  const textRef1 = useParallax<HTMLParagraphElement>({ speed: 0.05, direction: 'horizontal' });
  const textRef2 = useParallax<HTMLParagraphElement>({ speed: 0.08 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
              entry.target.style.visibility = 'visible';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-black">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef} 
            className="section-title text-white about-animate opacity-0"
          >
            About Us
          </h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <p 
            className="text-gray-300 max-w-3xl mx-auto about-animate opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Established in 2019, Ghatak Sports Academy India™ is a premier martial arts academy 
            dedicated to excellence in combat sports training and character development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8 about-animate opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gsai-red flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p 
              ref={textRef1} 
              className="text-gray-300"
            >
              To foster physical excellence, mental discipline, and character development through 
              professional martial arts training. We strive to create champions in the ring and 
              leaders in society by instilling values of respect, perseverance, and self-discipline.
            </p>
          </div>

          <div className="glass-card p-8 about-animate opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gsai-red flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p 
              ref={textRef2} 
              className="text-gray-300"
            >
              To become the leading martial arts academy in India, recognized internationally for 
              producing elite athletes and transforming lives through our unique training methodology. 
              We aim to expand our reach to every corner of India, making quality martial arts training 
              accessible to all.
            </p>
          </div>

          <div className="glass-card p-8 about-animate opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gsai-red flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Values</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Discipline: The foundation of martial arts and personal growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Respect: For self, instructors, fellow students, and opponents</span>
              </li>
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Perseverance: Pushing beyond limits to achieve excellence</span>
              </li>
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Integrity: Maintaining high ethical standards in all actions</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 about-animate opacity-0" style={{ animationDelay: '1s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gsai-red flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Our Achievements</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Multiple National Championship titles in various martial arts disciplines</span>
              </li>
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Recognized by the Sports Authority of India for excellence in sports training</span>
              </li>
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Over 500 students trained with 100+ medal winners at state and national levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-gsai-red mr-2">•</span>
                <span>Featured in national media for innovative training methodologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
