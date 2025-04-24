
import React, { useEffect } from 'react';

const Founder = () => {
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

    const elements = document.querySelectorAll('.founder-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="founder" className="py-20 bg-gsai-gray-900">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white founder-animate opacity-0">Founder's Message</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flip-card founder-animate opacity-0">
            <div className="flip-card-inner">
              <div className="flip-card-front flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-24 h-24 mx-auto text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-2">Mr. Nitesh Yadav</h3>
                  <p className="text-gsai-gold">Founder & Chief Instructor</p>
                  <p className="text-white/70 mt-4">Hover to reveal message</p>
                </div>
              </div>
              <div className="flip-card-back flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy</h3>
                  <p className="text-white/90 italic">
                    "The true essence of martial arts lies not in defeating others, but in conquering oneself. At GSAI, we transform individuals by building their character alongside their physical abilities."
                  </p>
                  <p className="text-gsai-gold mt-6 font-bold">- Nitesh Yadav</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl founder-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">A Legacy of Excellence</h3>
            <p className="text-gray-300 mb-6">
              With over 15 years of experience in martial arts, Mr. Nitesh Yadav established Ghatak Sports Academy India™ with a vision to create a center of excellence for martial arts training in India.
            </p>
            <p className="text-gray-300 mb-6">
              His expertise spans multiple disciplines including Karate, Taekwondo, and MMA, earning him national and international recognition.
            </p>
            <p className="text-gray-300">
              Under his guidance, GSAI has produced numerous champions while maintaining its core philosophy of character development alongside physical training.
            </p>
            <div className="mt-8">
              <a href="#programs" className="gsai-btn-gold">
                Explore Our Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
