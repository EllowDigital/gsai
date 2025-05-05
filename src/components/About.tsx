
import { useEffect, useRef } from 'react';
import { useParallax } from '@/hooks/use-parallax';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const headingRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });
  const paragraphRef = useParallax<HTMLParagraphElement>({ speed: 0.05 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Animation variants for the mission cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.classList.add('reveal-slide-up');
          entry.target.style.opacity = '1';
          entry.target.style.visibility = 'visible';
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
      bgColor: 'from-red-600/20 to-red-900/30',
      iconColor: '#ea384c',
    },
    {
      title: 'Our Vision',
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      content: 'To become the leading martial arts academy in India, recognized internationally for producing elite athletes and transforming lives through our unique training methodology. We aim to expand our reach across India, making quality martial arts training accessible to all.',
      bgColor: 'from-amber-600/20 to-amber-900/30',
      iconColor: '#DAA520',
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
      bgColor: 'from-blue-600/20 to-blue-900/30',
      iconColor: '#4A90E2',
    },
    {
      title: 'Our Achievements',
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      list: [
        'Multiple National Championship titles in various martial arts disciplines',
        'Recognized by the Sports Authority of India for excellence in sports training',
        'Over 500 students trained with 100+ medal winners at state and national levels',
        'Featured in national media for innovative training methodologies'
      ],
      bgColor: 'from-purple-600/20 to-purple-900/30',
      iconColor: '#8A4FFF',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 z-0"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/texture.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-16 right-10 w-40 h-40 rounded-full bg-gsai-red/10 blur-3xl"></div>
      <div className="absolute bottom-16 left-10 w-40 h-40 rounded-full bg-gsai-gold/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            ref={headingRef}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            About Us
          </motion.h2>
          
          <div className="flex justify-center items-center my-6">
            <div className="w-16 h-1 bg-gsai-red"></div>
            <div className="w-3 h-3 mx-2 rounded-full bg-gsai-gold"></div>
            <div className="w-16 h-1 bg-gsai-red"></div>
          </div>
          
          <motion.p 
            ref={paragraphRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Established in 2025, Ghatak Sports Academy India™ is a premier martial arts academy dedicated to excellence in combat sports training and character development.
          </motion.p>
        </div>

        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid gap-6 md:gap-8 ${
            sections.length === 3 
              ? "grid-cols-1 md:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`rounded-2xl p-6 sm:p-8 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${section.bgColor} backdrop-blur-lg border border-white/5`}
              style={{ 
                minHeight: isMobile ? 'auto' : '380px',
                perspective: '1000px',
              }}
            >
              {/* Background decoration */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/5 blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-black/30 border border-white/10 shadow-inner"
                    style={{ boxShadow: `0 0 15px rgba(255,255,255,0.1)` }}
                  >
                    <svg 
                      className="w-7 h-7" 
                      fill="none" 
                      stroke={section.iconColor} 
                      viewBox="0 0 24 24"
                    >
                      <path d={section.iconPath} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h3>
                </div>

                {section.content && (
                  <p className="text-gray-300 text-md md:text-lg leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="text-gray-300 space-y-3">
                    {section.list.map((item, listIdx) => (
                      <li key={listIdx} className="flex items-start">
                        <span 
                          className="text-xl mr-2 mt-0.5" 
                          style={{ color: section.iconColor }}
                        >
                          •
                        </span>
                        <span className="text-md md:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative elements at the bottom */}
        <div className="mt-20 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gsai-red to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
