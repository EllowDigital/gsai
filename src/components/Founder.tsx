import { useEffect } from 'react';
import Card3D from './ui/3d-card';

const Founder = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.visibility = 'visible';
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.founder-animate');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="founder" className="bg-gsai-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 founder-animate opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold">Founder's Message</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4" />
        </div>

        {/* Founder Info */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Card */}
          <div className="w-full md:w-1/2 founder-animate opacity-0">
            <Card3D
              className="w-full max-w-xs sm:max-w-sm mx-auto group"
              shadow
              glare
              intensity={20}
            >
              <div className="relative flex flex-col min-h-[460px] sm:min-h-[500px]">
                {/* Front Side */}
                <div className="p-6 flex flex-col items-center justify-center flex-grow">
                  <div className="w-full h-full mb-6 overflow-hidden rounded-lg">
                    <img
                      src="/images/founder.webp"
                      alt="Founder - Nitesh Yadav"
                      className="w-full h-full object-cover object-center border-2 border-gsai-gold shadow-lg shadow-gsai-red/20 rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mr. Nitesh Yadav</h3>
                  <p className="text-gsai-gold">Founder & Chief Instructor</p>
                  <p className="text-white/70 mt-4 text-sm italic">Hover to reveal message</p>
                </div>

                {/* Back Side / Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gsai-gray-900 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center w-full p-4">
                    <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
                    <p className="text-white/90 italic">
                      "The true essence of martial arts lies not in defeating others, but in conquering oneself.
                      At GSAI, we transform individuals by building their character alongside their physical abilities."
                    </p>
                    <p className="text-gsai-gold mt-6 font-bold">- Nitesh Yadav</p>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Biography */}
          <div className="w-full md:w-1/2 founder-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">A Legacy of Excellence</h3>
            <p className="text-gray-300 mb-6">
              With over 8 years of martial arts experience, Mr. Nitesh Yadav founded Ghatak Sports Academy India™ to raise a generation of strong, disciplined, and confident individuals.
            </p>
            <p className="text-gray-300 mb-6">
              Trained across multiple disciplines including Karate, Taekwondo, and MMA, he has earned national and international acclaim, mentoring numerous athletes to championship levels.
            </p>
            <p className="text-gray-300 mb-6">
              His leadership fosters a unique blend of physical training and personal growth, making GSAI a premier destination for martial arts in India.
            </p>
            <a
              href="#programs"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-gsai-gold text-black font-semibold hover:bg-white transition-all"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
