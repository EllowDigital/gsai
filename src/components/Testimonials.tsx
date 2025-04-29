import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  location?: string;
  image?: string;
}

// Sample testimonials data (make sure to replace with your actual data)
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Student",
    quote: "This is an amazing martial arts school!",
    rating: 5,
    location: "New York, NY",
    image: ""
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Instructor",
    quote: "Incredible training experience!",
    rating: 4,
    location: "Los Angeles, CA",
    image: ""
  },
  {
    id: 3,
    name: "Mary Johnson",
    role: "Alumni",
    quote: "The best martial arts experience I've ever had.",
    rating: 5,
    location: "Chicago, IL",
    image: ""
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
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

  useEffect(() => {
    autoPlayRef.current = setInterval(() => handleNext(), 8000);
    return () => clearInterval(autoPlayRef.current!);
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev === 0 ? sortedTestimonials.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev === sortedTestimonials.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(handleNext, 8000);
  };

  // Framer Motion animation variants
  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 50 : -50, opacity: 0 })
  };

  const current = sortedTestimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="text-gsai-gold">Student</span> <span className="text-white">Testimonials</span>
        </h2>

        <div className="relative">
          {/* Quote icon background */}
          <div className="absolute top-0 left-0 opacity-10 text-gsai-red -translate-y-2">
            <Quote size={80} strokeWidth={1} />
          </div>

          <div className="relative min-h-[420px] sm:min-h-[360px] md:min-h-[320px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <div className="bg-gray-900/70 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-lg border border-gray-800 h-full flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row gap-6 h-full">
                    {current.image && (
                      <div className="flex justify-center sm:w-1/3 md:w-1/4">
                        <img
                          src={current.image}
                          alt={current.name}
                          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-gsai-gold"
                        />
                      </div>
                    )}
                    <div className={current.image ? "sm:w-2/3 md:w-3/4" : "w-full"}>
                      <div className="flex flex-wrap items-center mb-4 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < current.rating ? "text-gsai-gold fill-gsai-gold" : "text-gray-400"}
                          />
                        ))}
                        {current.location && (
                          <span className="ml-2 text-sm text-gray-400">{current.location}</span>
                        )}
                      </div>
                      <blockquote className="text-base sm:text-lg md:text-xl italic text-gray-200 mb-6 leading-relaxed">
                        "{current.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-white">{current.name}</p>
                        <p className="text-gsai-red text-sm">{current.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Modern Navigation buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between px-4 sm:px-8 w-full">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="bg-gradient-to-r from-gsai-red to-gsai-gold text-white rounded-full p-3 transition-all hover:scale-110 transform duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="bg-gradient-to-l from-gsai-red to-gsai-gold text-white rounded-full p-3 transition-all hover:scale-110 transform duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
            {sortedTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-gsai-gold scale-125" : "bg-gray-600"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
