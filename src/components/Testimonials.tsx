
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote, User } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  location?: string;
  image?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Shivansh",
    role: "Student",
    quote: "Joining Ghatak Sports Academy transformed my life. The trainers are exceptional, and the disciplined environment has improved not just my martial arts skills but also my focus in academics.",
    rating: 5,
    location: "Lucknow, Uttar Pradesh",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Nitesh Yadav",
    role: "Instructor",
    quote: "Being part of the GSAI teaching team has been incredibly fulfilling. The academy's commitment to excellence and holistic development of students makes it a special place to work and grow.",
    rating: 5,
    location: "Lucknow, Uttar Pradesh",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "R.K YADAV",
    role: "Alumni",
    quote: "Years after graduating from GSAI, I still carry the values and discipline I learned here. The academy doesn't just teach martial arts; it builds character and prepares you for life's challenges.",
    rating: 5,
    location: "Lucknow, Uttar Pradesh",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animationType: "fade",
    duration: 400
  });

  // Sort testimonials by rating
  const [sortedTestimonials, setSortedTestimonials] = useState(testimonialsData);

  useEffect(() => {
    const sorted = [...testimonialsData].sort((a, b) => b.rating - a.rating);
    setSortedTestimonials(sorted);
  }, []);

  // Autoplay for testimonials carousel
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => handleNext(), 8000);
    }
  }, [isAutoPlaying]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev === 0 ? sortedTestimonials.length - 1 : prev - 1));
    resetAutoPlay();
  }, [resetAutoPlay, sortedTestimonials.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev === sortedTestimonials.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  }, [resetAutoPlay, sortedTestimonials.length]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isAutoPlaying, resetAutoPlay]);

  // Toggle autoplay
  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  // Framer Motion animation variants
  const variants = {
    enter: (direction: number) => ({ 
      x: direction > 0 ? 100 : -100, 
      opacity: 0,
      scale: 0.9
    }),
    center: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({ 
      x: direction < 0 ? 100 : -100, 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  const current = sortedTestimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/gallery1.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gsai-red/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gsai-gold/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <MessageSquareQuote className="text-gsai-gold h-12 w-12 mx-auto mb-4 opacity-80" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gsai-gold to-white bg-clip-text text-transparent mb-6">
            <span className="text-gsai-gold">Student</span> <span className="text-white">Testimonials</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red mx-auto mt-3 mb-6 rounded-full"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Hear what our students have to say about their journey with Ghatak Sports Academy India
          </p>
        </div>

        <div className="relative mt-10 mb-20">
          <div className="relative overflow-hidden min-h-[400px] sm:min-h-[350px] md:min-h-[320px] lg:w-10/12 mx-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="h-full">
                  <div className="relative h-full">
                    {/* Main testimonial card */}
                    <div className="bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-800/50 h-full">
                      <Quote className="absolute top-6 left-6 text-gsai-red/20 h-24 w-24" />
                      
                      <div className="flex flex-col md:flex-row gap-8 h-full relative z-10">
                        <div className="md:w-1/3 flex justify-center items-start">
                          <div className="relative">
                            {current.image ? (
                              <img
                                src={current.image}
                                alt={current.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-gsai-gold shadow-lg"
                              />
                            ) : (
                              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-gsai-red/20 to-gsai-gold/20 border-2 border-gsai-gold/50 flex items-center justify-center">
                                <User className="h-16 w-16 text-gsai-gold/60" />
                              </div>
                            )}
                            <div className="absolute -bottom-2 -right-2 bg-gsai-gold text-black text-xs font-bold px-2 py-1 rounded-full">
                              {current.role}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex flex-wrap items-center mb-4 gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={18}
                                  className={i < current.rating ? "text-gsai-gold fill-gsai-gold" : "text-gray-600"}
                                />
                              ))}
                              {current.location && (
                                <span className="ml-3 text-sm text-gray-400 flex items-center">
                                  <span className="inline-block w-1 h-1 rounded-full bg-gray-500 mr-2"></span>
                                  {current.location}
                                </span>
                              )}
                            </div>
                            
                            <blockquote className="text-lg sm:text-xl md:text-2xl italic text-white mb-6 leading-relaxed">
                              "{current.quote}"
                            </blockquote>
                          </div>
                          
                          <div className="mt-4">
                            <p className="font-bold text-xl text-gsai-gold">{current.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="bg-gradient-to-tr from-gsai-red to-gsai-gold hover:from-gsai-gold hover:to-gsai-red text-white rounded-full p-3 transition-all hover:scale-110 transform duration-200 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Testimonial indicators */}
            <div className="flex items-center justify-center gap-3">
              {sortedTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    idx === currentIndex 
                      ? "bg-gradient-to-r from-gsai-red to-gsai-gold scale-125" 
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={idx === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="bg-gradient-to-tr from-gsai-gold to-gsai-red hover:from-gsai-red hover:to-gsai-gold text-white rounded-full p-3 transition-all hover:scale-110 transform duration-200 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Autoplay toggle */}
          <button
            onClick={toggleAutoPlay}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            {isAutoPlaying ? "Pause Autoplay" : "Resume Autoplay"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
