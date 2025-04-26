import { useEffect } from 'react';
import Card3D from './ui/3d-card';

const Founder = () => {
  useEffect(() => {
    const observer = createIntersectionObserver();

    const elements = document.querySelectorAll('.founder-animate');
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="founder" className="py-20 bg-gsai-gray-900">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white founder-animate opacity-0">Founder's Message</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="founder-animate opacity-0">
            <Card3D
              className="w-[300px] h-[400px] group"
              shadow
              glare
              intensity={20}
            >
              <div className="flex flex-col h-full relative">
                <div className="front-card p-6 flex flex-col items-center justify-center h-full relative">
                  <div className="mb-6 relative w-full h-full overflow-hidden rounded-lg">
                    <img
                      src="/images/founder.webp"
                      alt="Founder - Nitesh Yadav"
                      className="w-[90%] h-[90%] object-cover object-center border-2 border-gsai-gold shadow-lg shadow-gsai-red/20"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mr. Nitesh Yadav</h3>
                  <p className="text-gsai-gold">Founder & Chief Instructor</p>
                  <p className="text-white/70 mt-4 text-sm italic">Hover to reveal message</p>
                </div>

                {/* Philosophy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gsai-gray-900 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <div className="text-center w-full h-full overflow-hidden p-4">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy</h3>
                    <p className="text-white/90 italic overflow-hidden text-ellipsis">
                      "The true essence of martial arts lies not in defeating others, but in conquering oneself.
                      At GSAI, we transform individuals by building their character alongside their physical abilities."
                    </p>
                    <p className="text-gsai-gold mt-6 font-bold">- Nitesh Yadav</p>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          <div className="max-w-xl founder-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">A Legacy of Excellence</h3>
            <p className="text-gray-300 mb-6">
              With over 8 years of experience in martial arts, Mr. Nitesh Yadav established Ghatak Sports Academy India™ with a vision to create a center of excellence for martial arts training in India.
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

// Helper to create the IntersectionObserver
const createIntersectionObserver = () => {
  return new IntersectionObserver((entries) => {
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
  }, { threshold: 0.1 });
};

export default Founder;
