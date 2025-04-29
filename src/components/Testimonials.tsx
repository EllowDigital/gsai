
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  location?: string;
  image?: string;
}

// Testimonial data
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Student, 2 years",
    quote: "GSAI has transformed my life! Not only have I learned self-defense, but I've also gained confidence in all areas of my life. The instructors are world-class and truly care about each student's progress.",
    rating: 5,
    location: "Lucknow",
    image: "/images/gallery1.png",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Parent of Junior Student",
    quote: "My 8-year-old son has been attending classes for a year, and the improvement in his discipline, focus, and physical fitness is remarkable. The academy provides a supportive and safe environment for children to flourish.",
    rating: 5,
    location: "Kanpur",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Professional Athlete",
    quote: "As a professional athlete, I've trained at many facilities, but GSAI stands out for its technical excellence and personalized coaching. The mix of traditional wisdom and modern training methods is perfect.",
    rating: 5,
    location: "Delhi",
    image: "/images/gallery2.png",
  },
  {
    id: 4,
    name: "Sunita Yadav",
    role: "Self-defense Student",
    quote: "After joining GSAI's women's self-defense program, I feel empowered and secure. The practical techniques and supportive community have given me skills I hope to never use, but am grateful to possess.",
    rating: 5,
    location: "Lucknow",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    role: "Corporate Client",
    quote: "We hired GSAI for corporate wellness sessions, and the response from our employees has been overwhelmingly positive. The team-building aspects and stress-relief techniques have improved workplace morale.",
    rating: 4,
    location: "Noida",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animationType: 'fade',
    duration: 400
  });

  const [sortedTestimonials, setSortedTestimonials] = useState(testimonialsData);

  // Sort testimonials based on rating (high to low)
  useEffect(() => {
    const sorted = [...testimonialsData].sort((a, b) => b.rating - a.rating);
    setSortedTestimonials(sorted);
  }, []);

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Auto-advance testimonials
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sortedTestimonials.length - 1 : prevIndex - 1
    );

    // Reset autoplay timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(handleNext, 8000);
    }
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === sortedTestimonials.length - 1 ? 0 : prevIndex + 1
    );

    // Reset autoplay timer
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(handleNext, 8000);
    }
  };

  const currentTestimonial = sortedTestimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="gsai-container" ref={containerRef}>
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gsai-gold">Student</span>{" "}
          <span className="text-white">Testimonials</span>
        </h2>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Large quote icon */}
          <div className="absolute top-0 left-0 text-gsai-red opacity-20 transform -translate-x-2 -translate-y-1/2">
            <Quote size={80} strokeWidth={1} />
          </div>

          {/* Testimonial cards */}
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute inset-0"
              >
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800 h-full">
                  <div className="flex flex-col md:flex-row gap-6 h-full">
                    {currentTestimonial.image && (
                      <div className="md:w-1/3 flex-shrink-0 flex justify-center">
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gsai-gold"
                        />
                      </div>
                    )}

                    <div className={currentTestimonial.image ? "md:w-2/3" : "w-full"}>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${i < currentTestimonial.rating
                              ? "text-gsai-gold fill-gsai-gold"
                              : "text-gray-400"
                              }`}
                          />
                        ))}
                        {currentTestimonial.location && (
                          <span className="ml-2 text-sm text-gray-400">
                            {currentTestimonial.location}
                          </span>
                        )}
                      </div>

                      <blockquote className="text-lg md:text-xl italic text-gray-200 mb-6">
                        "{currentTestimonial.quote}"
                      </blockquote>

                      <div className="mt-auto">
                        <p className="font-semibold text-white">{currentTestimonial.name}</p>
                        <p className="text-gsai-red">{currentTestimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <button
              onClick={handlePrevious}
              className="bg-gray-800/50 hover:bg-gsai-red/80 rounded-full p-2 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-2">
              {sortedTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-gsai-red" : "bg-gray-500"
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={idx === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-gray-800/50 hover:bg-gsai-red/80 rounded-full p-2 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
