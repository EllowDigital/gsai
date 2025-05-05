
import { useEffect } from 'react';
import Card3D from './ui/3d-card';
import { motion } from 'framer-motion';
import { Users, Award, GraduationCap, Globe, Mail, Phone } from 'lucide-react';

interface Coach {
  id: number;
  name: string;
  title: string;
  expertise: string[];
  bio: string;
  image: string;
  certifications: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
}

const coaches: Coach[] = [
  {
    id: 1,
    name: "Master Rahul Chowdhury",
    title: "Head Coach & Technical Director",
    expertise: ["Karate", "Taekwondo", "Mixed Martial Arts"],
    bio: "7th Dan Black Belt with over 25 years of international competition experience. Former national team coach with Olympic training credentials.",
    image: "/images/founder.webp",
    certifications: ["International Coaching Federation", "Olympic Committee Certified", "Sports Medicine Specialist"],
    contact: {
      email: "headcoach@ghatakgsai.com",
      phone: "+91-639-413-5988"
    }
  },
  {
    id: 2,
    name: "Sensei Priya Verma",
    title: "Combat Training Specialist",
    expertise: ["Karate", "Krav Maga", "Self-Defense"],
    bio: "Former international competitor with multiple gold medals. Specializes in practical self-defense and women's empowerment programs.",
    image: "/placeholder.svg",
    certifications: ["International Karate Federation", "Krav Maga Instructor", "Women's Self Defense Specialist"]
  },
  {
    id: 3,
    name: "Master Ranjit Kumar",
    title: "Traditional Martial Arts Expert",
    expertise: ["Kalaripayattu", "Silambam", "Traditional Indian Martial Arts"],
    bio: "Preserving and teaching traditional Indian martial arts with international recognition. Connects ancient techniques with modern training.",
    image: "/placeholder.svg",
    certifications: ["Kerala Kalaripayattu Association", "National Heritage Arts Foundation", "Cultural Preservation Award"]
  },
  {
    id: 4,
    name: "Coach Ankit Singh",
    title: "Strength & Conditioning Specialist",
    expertise: ["Athletic Performance", "Combat Conditioning", "Injury Prevention"],
    bio: "Sports science specialist focusing on optimizing athletic performance for combat sports. Designs personalized conditioning programs for all levels.",
    image: "/placeholder.svg",
    certifications: ["Certified Strength & Conditioning Specialist", "Sports Nutrition Expert", "Functional Movement Specialist"]
  }
];

const CoachingStaff = () => {
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

    const elements = document.querySelectorAll('.coach-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="coaching-staff" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/slider.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gsai-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gsai-red/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="gsai-container relative z-10 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 relative">
          <Users className="text-gsai-gold h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 opacity-80" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gsai-gold to-white bg-clip-text text-transparent mb-6 coach-animate opacity-0">
            International Coaching Staff
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red mx-auto mt-3 mb-6 rounded-full"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto coach-animate opacity-0 text-lg" style={{ animationDelay: '0.2s' }}>
            Train with world-class coaches who bring decades of international experience and championship-level expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coaches.map((coach, index) => (
            <div 
              key={coach.id} 
              className="coach-animate opacity-0"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <Card3D className="h-full" intensity={5} shadow border>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-800/30 rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20 pointer-events-none"></div>
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
                    <p className="text-gsai-gold font-medium text-sm mb-3">{coach.title}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-white text-sm font-semibold mb-1">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-0.5 bg-gsai-red/20 text-gsai-red text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{coach.bio}</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center mb-2">
                        <Award className="h-4 w-4 text-gsai-gold mr-2" />
                        <h4 className="text-white text-sm font-semibold">Certifications:</h4>
                      </div>
                      <ul className="text-gray-300 text-xs ml-6 mb-4 list-disc">
                        {coach.certifications.map((cert) => (
                          <li key={cert} className="mb-1">{cert}</li>
                        ))}
                      </ul>
                      
                      {coach.contact && (
                        <div className="pt-3 border-t border-gray-800/50">
                          <p className="text-xs font-medium text-gray-400 mb-2">Contact Directly:</p>
                          <div className="space-y-1">
                            {coach.contact.email && (
                              <a href={`mailto:${coach.contact.email}`} className="flex items-center text-gray-300 hover:text-white text-xs">
                                <Mail className="h-3 w-3 mr-2 text-gsai-red" />
                                {coach.contact.email}
                              </a>
                            )}
                            {coach.contact.phone && (
                              <a href={`tel:${coach.contact.phone}`} className="flex items-center text-gray-300 hover:text-white text-xs">
                                <Phone className="h-3 w-3 mr-2 text-gsai-gold" />
                                {coach.contact.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      
        <div className="mt-12 text-center coach-animate opacity-0" style={{ animationDelay: '0.8s' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gsai-red to-gsai-gold text-white font-semibold rounded-lg shadow-lg">
              <GraduationCap className="mr-2 h-5 w-5" />
              Train With Our Experts
            </a>
          </motion.div>
          
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="#contact" className="flex items-center text-gray-400 hover:text-white text-sm transition-colors">
              <Globe className="h-4 w-4 mr-1" />
              International Training Options
            </a>
            <span className="text-gray-600">•</span>
            <a href="#programs" className="flex items-center text-gray-400 hover:text-white text-sm transition-colors">
              <Award className="h-4 w-4 mr-1" />
              Certification Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingStaff;
