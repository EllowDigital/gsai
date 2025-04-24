
import React from 'react';
import { Award, Medal, Trophy, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const DecorativeIcons: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Reduce number of decorative elements on mobile
  const showReducedIcons = isMobile;
  
  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      <div className="decorative-icon" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>
        <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-gsai-gold" />
      </div>
      
      <div className="decorative-icon" style={{ top: '25%', right: '15%', animationDelay: '1s' }}>
        <Medal className="w-8 h-8 sm:w-10 sm:h-10 text-gsai-gold" />
      </div>
      
      <div className="decorative-icon" style={{ bottom: '30%', left: '20%', animationDelay: '1.5s' }}>
        <Award className="w-10 h-10 sm:w-12 sm:h-12 text-gsai-red" />
      </div>
      
      {!showReducedIcons && (
        <>
          <div className="decorative-icon" style={{ bottom: '20%', right: '10%', animationDelay: '0.5s' }}>
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          
          <div className="decorative-icon" style={{ top: '40%', left: '25%', animationDelay: '2s' }}>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gsai-gold" />
          </div>
          
          <div className="decorative-icon" style={{ top: '60%', right: '25%', animationDelay: '2.5s' }}>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gsai-red" />
          </div>
        </>
      )}
    </div>
  );
};

export default DecorativeIcons;
