
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Card3D from './ui/3d-card';
import { Award, Star, Shield, Trophy, Medal, User } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

interface StudentRanking {
  id: number;
  name: string;
  rank: string;
  category: string;
  achievements: string;
  image?: string;
}

const Achievements = () => {
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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.achievement-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "National Recognition Award",
      year: "2024",
      description: "Awarded by the Ministry of Youth Affairs and Sports for excellence in martial arts training and athlete development",
      icon: <Award className="h-10 w-10 text-gsai-gold" />
    },
    {
      id: 2,
      title: "Best Martial Arts Academy",
      year: "2023",
      description: "Recognized as the best martial arts training facility in Northern India by the Sports Authority of India",
      icon: <Star className="h-10 w-10 text-gsai-gold" />
    },
    {
      id: 3,
      title: "Excellence in Coaching",
      year: "2023",
      description: "Our head coach recognized for exceptional training methods and athlete achievements in international competitions",
      icon: <Shield className="h-10 w-10 text-gsai-gold" />
    },
    {
      id: 4,
      title: "Olympic Training Center",
      year: "2022",
      description: "Selected as an official training center for Olympic hopefuls in combat sports disciplines",
      icon: <Trophy className="h-10 w-10 text-gsai-gold" />
    }
  ];

  const topStudents: StudentRanking[] = [
    {
      id: 1,
      name: "Rajiv Singh",
      rank: "International Gold Medalist",
      category: "Senior Karate",
      achievements: "2x Asian Championship Gold, World Championship Bronze",
      image: "/images/student.webp"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rank: "National Champion",
      category: "Junior Taekwondo",
      achievements: "3x National Gold, South Asian Games Silver",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Arjun Kapoor",
      rank: "International Silver Medalist",
      category: "MMA Welterweight",
      achievements: "Professional MMA Record: 12-2, Asian Championship Silver",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/slider.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gsai-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gsai-red/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="gsai-container relative z-10 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 relative">
          <Medal className="text-gsai-gold h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 opacity-80" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gsai-gold to-white bg-clip-text text-transparent mb-6 achievement-animate opacity-0">
            Achievements & Rankings
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red mx-auto mt-3 mb-6 rounded-full"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto achievement-animate opacity-0 text-lg" style={{ animationDelay: '0.2s' }}>
            Recognizing excellence and celebrating our international success stories in martial arts and combat sports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 achievement-animate opacity-0">
              Academy Recognitions
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id}
                  className="achievement-animate opacity-0 flex gap-4 p-4 bg-gradient-to-br from-gray-900/70 to-black/70 rounded-lg border border-gray-800/50"
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-gsai-red/20 to-black rounded-lg">
                    {achievement.icon}
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                      <span className="px-2 py-0.5 bg-gsai-gold/20 text-gsai-gold text-xs rounded-full">{achievement.year}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 achievement-animate opacity-0">
              Top Students & Athletes
            </h3>
            
            <div className="space-y-6">
              {topStudents.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  viewport={{ once: true }}
                  className="achievement-animate opacity-0"
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <Card3D 
                    className="h-full" 
                    intensity={5}
                    shadow
                    border
                  >
                    <div className="p-4 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-gray-800/30">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden bg-gradient-to-br from-gsai-red/20 to-black/20 flex items-center justify-center">
                          {student.image ? (
                            <img src={student.image} alt={student.name} className="h-full w-full object-cover" />
                          ) : (
                            <User className="h-8 w-8 text-gsai-gold/70" />
                          )}
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-white">{student.name}</h4>
                          <div className="flex items-center">
                            <span className="text-gsai-gold font-medium text-sm mr-2">{student.rank}</span>
                            <span className="text-gray-400 text-xs">• {student.category}</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">{student.achievements}</p>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
              
              <div className="achievement-animate opacity-0" style={{ animationDelay: '0.8s' }}>
                <a href="#programs" className="block text-center py-3 px-4 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gsai-gold transition-colors duration-300">
                  View All Top Athletes →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="achievement-animate opacity-0" style={{ animationDelay: '1s' }}>
            <a 
              href="#programs"
              className="inline-block px-8 py-3 bg-gradient-to-r from-gsai-red to-gsai-gold text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Join Our Elite Training Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
