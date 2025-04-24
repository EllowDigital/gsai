
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            // Ensure visibility
            if (entry.target instanceof HTMLElement) {
              entry.target.style.visibility = 'visible';
              entry.target.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));

    // Explicitly ensure the section is visible
    if (sectionRef.current) {
      sectionRef.current.style.visibility = 'visible';
      sectionRef.current.style.display = 'block';
      sectionRef.current.style.position = 'relative';
      sectionRef.current.style.zIndex = '1';
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const values = [
    {
      icon: (
        <svg className="w-12 h-12 text-gsai-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: 'Respect',
      description: 'We foster mutual respect among all members of our community.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gsai-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Confidence',
      description: 'Building self-confidence through disciplined training and achievement.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gsai-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Striving for excellence in all aspects of martial arts and personal growth.'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-black to-gsai-gray-900"
      style={{ position: 'relative', zIndex: 1, visibility: 'visible' }}
    >
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white about-animate opacity-0">About Us</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          
          <div className="max-w-3xl mx-auto about-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-300 text-lg mb-6">
              Ghatak Sports Academy India™ (GSAI) is a premier martial arts institution dedicated to transforming lives through disciplined training and personal development.
            </p>
            <p className="text-gray-300 text-lg">
              As a <span className="text-gsai-gold font-semibold">Government recognized</span> and <span className="text-gsai-gold font-semibold">ISO 9001:2015 certified</span> institution, we maintain the highest standards of training and professional excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl text-center about-animate opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-gsai-gold text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center about-animate opacity-0" style={{ animationDelay: '0.9s' }}>
          <h3 className="text-2xl text-white mb-6">Our Mission</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            To provide world-class martial arts training that not only enhances physical abilities but also instills mental discipline, emotional balance, and spiritual growth in our students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
