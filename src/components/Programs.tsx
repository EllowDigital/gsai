import React, { useEffect } from 'react';
import Card3D from './ui/3d-card';
import {
  GiBoxingGlove,
  GiHighKick,
  GiMuscleUp,
  GiPunchBlast,
  GiSelfLove,
  GiHealthPotion,
  GiSwordSpin,
} from 'react-icons/gi';
import { MdSportsMartialArts } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

interface ProgramCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  index: number;
}

const ProgramCard = ({ title, icon, description, index }: ProgramCardProps) => {
  const cardAnimationDelay = `${0.1 * index}s`;

  return (
    <Card3D
      className="glass-card program-animate opacity-0 group bg-black/20 h-full"
      style={{ animationDelay: cardAnimationDelay }}
      innerClassName="p-6 rounded-2xl flex flex-col h-full transition-all duration-500"
    >
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-gsai-red/30 to-black/40 rounded-xl group-hover:scale-105 transform-gpu transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 text-center relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red transition-all duration-500"></span>
      </h3>
      <p className="text-gray-300 text-sm flex-grow text-center">{description}</p>

      <div className="mt-6 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center">
        <span className="text-sm text-gsai-gold inline-flex items-center justify-center">
          Learn More
          <FaArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Card3D>
  );
};

const Programs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            if (entry.target instanceof HTMLElement) {
              entry.target.style.visibility = 'visible';
              entry.target.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
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
      icon: <GiPunchBlast className="w-10 h-10 text-gsai-red" />,
      description: 'Traditional Japanese martial art focusing on striking techniques using hands, feet, and knees.',
    },
    {
      title: 'Taekwondo',
      icon: <GiHighKick className="w-10 h-10 text-gsai-red" />,
      description: 'Korean martial art known for its head-height kicks and dynamic movements.',
    },
    {
      title: 'Boxing',
      icon: <GiBoxingGlove className="w-10 h-10 text-gsai-red" />,
      description: 'Combat sport emphasizing powerful punches, footwork, and defensive strategies.',
    },
    {
      title: 'Kickboxing',
      icon: <GiMuscleUp className="w-10 h-10 text-gsai-red" />,
      description: 'Full-body sport blending boxing with powerful kicking techniques.',
    },
    {
      title: 'MMA',
      icon: <MdSportsMartialArts className="w-10 h-10 text-gsai-red" />,
      description: 'Hybrid combat sport combining striking, grappling, and submission techniques.',
    },
    {
      title: 'Kalaripayattu',
      icon: <GiSwordSpin className="w-10 h-10 text-gsai-red" />,
      description: 'Ancient martial art from India involving strikes, kicks, weaponry, and yoga.',
    },
    {
      title: 'Self-Defense',
      icon: <GiSelfLove className="w-10 h-10 text-gsai-red" />,
      description: 'Real-life defense strategies to keep yourself and others safe.',
    },
    {
      title: 'Fat Loss Programs',
      icon: <GiHealthPotion className="w-10 h-10 text-gsai-red" />,
      description: 'Fitness plans tailored to reduce body fat and improve health.',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold program-animate opacity-0">Our Programs</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-6"></div>
          <p
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto program-animate opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Discover a wide range of martial arts and fitness programs suited for all ages and skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {programsData.map((program, index) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              icon={program.icon}
              description={program.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://forms.gle/LTYn59kPWkQgC3VR7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white border border-gsai-red rounded-full hover:bg-gsai-red transition-all duration-300 program-animate opacity-0"
            style={{ animationDelay: '0.9s' }}
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
