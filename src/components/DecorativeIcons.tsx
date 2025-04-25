import React from 'react';
import { Award, Medal, Trophy, Star } from 'lucide-react';

const DecorativeIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      <div className="decorative-icon" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>
        <Trophy className="w-8 h-8 text-gsai-gold md:w-10 md:h-10 lg:w-12 lg:h-12" />
      </div>

      <div className="decorative-icon" style={{ top: '25%', right: '15%', animationDelay: '1s' }}>
        <Medal className="w-10 h-10 text-gsai-gold md:w-12 md:h-12 lg:w-14 lg:h-14" />
      </div>

      <div className="decorative-icon" style={{ bottom: '30%', left: '20%', animationDelay: '1.5s' }}>
        <Award className="w-12 h-12 text-gsai-red md:w-14 md:h-14 lg:w-16 lg:h-16" />
      </div>

      <div className="decorative-icon" style={{ bottom: '20%', right: '10%', animationDelay: '0.5s' }}>
        <Star className="w-6 h-6 text-white md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </div>

      <div className="decorative-icon" style={{ top: '40%', left: '25%', animationDelay: '2s' }}>
        <Star className="w-4 h-4 text-gsai-gold md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </div>

      <div className="decorative-icon" style={{ top: '60%', right: '25%', animationDelay: '2.5s' }}>
        <Star className="w-5 h-5 text-gsai-red md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </div>
    </div>
  );
};

export default DecorativeIcons;
