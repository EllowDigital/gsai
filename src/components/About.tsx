import { useEffect } from 'react';
import { useParallax } from '@/hooks/use-parallax';

const About = () => {
  const headingRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });
  const paragraphRef = useParallax<HTMLParagraphElement>({ speed: 0.05 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.classList.add('reveal-slide-up');
          entry.target.style.opacity = '1';
          entry.target.style.visibility = 'visible';

          // Unobserve after animation for better performance
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const sections = [
    {
      title: 'Our Mission',
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      content: 'To foster physical excellence, mental discipline, and character development through professional martial arts training. We strive to create champions in the ring and leaders in society by instilling values of respect, perseverance, and self-discipline.',
    },
    {
      title: 'Our Vision',
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      content: 'To become the leading martial arts academy in India, recognized internationally for producing elite athletes and transforming lives through our unique training methodology. We aim to expand our reach across India, making quality martial arts training accessible to all.',
    },
    {
      title: 'Our Values',
      iconPath: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
      list: [
        'Discipline: The foundation of martial arts and personal growth',
        'Respect: For self, instructors, fellow students, and opponents',
        'Perseverance: Pushing beyond limits to achieve excellence',
        'Integrity: Maintaining high ethical standards in all actions'
      ],
    },
    // {
    //   title: 'Our Achievements',
    //   iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    //   list: [
    //     'Multiple National Championship titles in various martial arts disciplines',
    //     'Recognized by the Sports Authority of India for excellence in sports training',
    //     'Over 500 students trained with 100+ medal winners at state and national levels',
    //     'Featured in national media for innovative training methodologies'
    //   ],
    // },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl font-bold text-white about-animate opacity-0" data-delay="0s">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8" />
          <p ref={paragraphRef} className="text-gray-300 max-w-2xl mx-auto about-animate opacity-0" data-delay="0.1s">
            Established in 2025, Ghatak Sports Academy India™ is a premier martial arts academy dedicated to excellence in combat sports training and character development.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-stretch">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="glass-card p-8 about-animate opacity-0 flex flex-col h-full 
              backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl 
              transition-all transform hover:scale-105 hover:shadow-2xl 
              hover:backdrop-blur-2xl hover:bg-white/10 hover:animate-pulse-glow"
              style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gsai-red flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d={section.iconPath} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              </div>

              {section.content && (
                <p className="text-gray-300">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="text-gray-300 space-y-2">
                  {section.list.map((item, listIdx) => (
                    <li key={listIdx} className="flex items-start">
                      <span className="text-gsai-red mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
