
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProgramProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  index: number;
}

const Program = ({ title, icon, description, index }: ProgramProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl",
        "border border-white/10 hover:border-gsai-red/50 program-animate opacity-0"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="p-4 bg-gradient-to-br from-gsai-red/20 to-black/50 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Programs = () => {
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

    const elements = document.querySelectorAll('.program-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const programsData = [
    {
      title: 'Karate',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905v.714L7.3 5.3a1.5 1.5 0 00-.3.7v5" />
        </svg>
      ),
      description: 'Traditional Japanese martial art focusing on striking techniques using hands, feet, and knees.'
    },
    {
      title: 'Taekwondo',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      description: 'Korean martial art characterized by its emphasis on head-height kicks and fast kicking techniques.'
    },
    {
      title: 'Boxing',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Combat sport focusing on punching techniques, footwork, and defensive movements.'
    },
    {
      title: 'Kickboxing',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Stand-up combat sport combining elements of boxing with kicking techniques from karate.'
    },
    {
      title: 'MMA',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      ),
      description: 'Full-contact combat sport incorporating techniques from various combat sports and martial arts.'
    },
    {
      title: 'Kalaripayattu',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      description: 'Ancient Indian martial art originating from Kerala, known for its strikes, kicks, grappling, and weapons training.'
    },
    {
      title: 'Self-Defense',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      description: 'Practical techniques designed for real-world situations to protect oneself from physical harm.'
    },
    {
      title: 'Fat Loss Programs',
      icon: (
        <svg className="w-10 h-10 text-gsai-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: 'Tailored fitness programs combining martial arts training with cardio workouts for effective weight loss.'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-black">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white program-animate opacity-0">Our Programs</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto program-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            Discover our comprehensive range of martial arts and fitness programs designed for all ages and skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programsData.map((program, index) => (
            <Program
              key={program.title}
              title={program.title}
              icon={program.icon}
              description={program.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="gsai-btn program-animate opacity-0" style={{ animationDelay: '0.9s' }}>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
