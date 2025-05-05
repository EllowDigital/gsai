
import { useEffect } from 'react';
import Card3D from './ui/3d-card';
import { Trophy, Calendar, MapPin, Users, Medal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Competition {
  id: number;
  title: string;
  date: string;
  location: string;
  categories: string[];
  registrationOpen: boolean;
  featured: boolean;
  image: string;
}

const competitions: Competition[] = [
  {
    id: 1,
    title: "Asian Martial Arts Championship",
    date: "August 15-20, 2025",
    location: "New Delhi, India",
    categories: ["Junior", "Senior", "Masters"],
    registrationOpen: true,
    featured: true,
    image: "/images/slider2.png"
  },
  {
    id: 2,
    title: "International Karate Tournament",
    date: "October 5-8, 2025",
    location: "Mumbai, India",
    categories: ["All Categories", "Team Events"],
    registrationOpen: true,
    featured: false,
    image: "/images/slider3.png"
  },
  {
    id: 3,
    title: "World Taekwondo Qualifiers",
    date: "December 12-18, 2025",
    location: "Lucknow, India",
    categories: ["Olympic Weight Categories"],
    registrationOpen: false,
    featured: true,
    image: "/images/slider4.png"
  },
  {
    id: 4,
    title: "National MMA Championship",
    date: "September 3-6, 2025",
    location: "Bengaluru, India",
    categories: ["Weight Classes", "Open Division"],
    registrationOpen: true,
    featured: false,
    image: "/images/slider5.png"
  }
];

const CompetitionCard = ({ competition }: { competition: Competition }) => {
  return (
    <div className="competition-card-animate opacity-0">
      <Card3D 
        className="h-full" 
        intensity={10}
        shadow
        border
      >
        <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-black/90 to-gray-900/90 border border-gray-800/50">
          <div className="h-40 relative overflow-hidden">
            <img 
              src={competition.image} 
              alt={competition.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            {competition.featured && (
              <div className="absolute top-3 right-3 bg-gsai-gold/90 text-black text-xs font-bold px-2 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>
          
          <div className="p-5">
            <h3 className="text-xl font-bold text-white mb-3">{competition.title}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-300">
                <Calendar className="h-4 w-4 mr-2 text-gsai-gold" />
                <span className="text-sm">{competition.date}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-gsai-red" />
                <span className="text-sm">{competition.location}</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Users className="h-4 w-4 mr-2 text-gsai-gold" />
                <span className="text-sm">{competition.categories.join(", ")}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
              <span className={`text-sm font-medium ${competition.registrationOpen ? 'text-green-500' : 'text-red-500'}`}>
                {competition.registrationOpen ? 'Registration Open' : 'Registration Closed'}
              </span>
              
              <a 
                href="#contact" 
                className="text-gsai-gold hover:text-white flex items-center text-sm font-medium transition-colors"
              >
                Details <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </Card3D>
    </div>
  );
};

const InternationalCompetitions = () => {
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

    const elements = document.querySelectorAll('.competition-card-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="competitions" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/slider.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gsai-red/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gsai-gold/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="gsai-container relative z-10 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 relative">
          <Trophy className="text-gsai-gold h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 opacity-80" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gsai-gold to-white bg-clip-text text-transparent mb-6 competition-card-animate opacity-0">
            International Competitions
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red mx-auto mt-3 mb-6 rounded-full"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto competition-card-animate opacity-0 text-lg" style={{ animationDelay: '0.2s' }}>
            Participate in prestigious tournaments and championships around the world with Ghatak Sports Academy's elite training and preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {competitions.map((competition) => (
            <CompetitionCard 
              key={competition.id} 
              competition={competition} 
            />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <motion.div 
            className="competition-card-animate opacity-0"
            style={{ animationDelay: '0.8s' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gsai-red to-gsai-gold text-white font-bold rounded-lg shadow-lg">
              <Medal className="mr-2 h-5 w-5" />
              Register for Competitions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCompetitions;
