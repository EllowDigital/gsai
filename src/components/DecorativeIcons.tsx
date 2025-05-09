
import React from 'react';
import { Award, Medal, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const DecorativeIcons: React.FC = () => {
  const iconData = [
    { 
      component: <Trophy className="w-8 h-8 text-gsai-gold md:w-10 md:h-10 lg:w-12 lg:h-12" />, 
      position: { top: '15%', left: '10%' },
      animationDelay: 0,
      scale: 1
    },
    { 
      component: <Medal className="w-10 h-10 text-gsai-gold md:w-12 md:h-12 lg:w-14 lg:h-14" />, 
      position: { top: '25%', right: '15%' },
      animationDelay: 1,
      scale: 1.2
    },
    { 
      component: <Award className="w-12 h-12 text-gsai-red md:w-14 md:h-14 lg:w-16 lg:h-16" />, 
      position: { bottom: '30%', left: '20%' },
      animationDelay: 1.5,
      scale: 1.3
    },
    { 
      component: <Star className="w-6 h-6 text-white md:w-8 md:h-8 lg:w-10 lg:h-10" />, 
      position: { bottom: '20%', right: '10%' },
      animationDelay: 0.5,
      scale: 0.9
    },
    { 
      component: <Star className="w-4 h-4 text-gsai-gold md:w-5 md:h-5 lg:w-6 lg:h-6" />, 
      position: { top: '40%', left: '25%' },
      animationDelay: 2,
      scale: 0.8
    },
    { 
      component: <Star className="w-5 h-5 text-gsai-red md:w-6 md:h-6 lg:w-8 lg:h-8" />, 
      position: { top: '60%', right: '25%' },
      animationDelay: 2.5,
      scale: 0.9
    },
  ];

  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      {iconData.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={icon.position}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: icon.scale, 
            opacity: 0.8,
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
          }}
          transition={{ 
            delay: icon.animationDelay, 
            duration: 0.8, 
            ease: "easeOut" 
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: icon.animationDelay * 0.5
            }}
          >
            {icon.component}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default DecorativeIcons;
