
import { useEffect } from "react";
import { useParallax } from "@/hooks/use-parallax";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import LocationMap from "./contact/LocationMap";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const titleRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.style.visibility = "visible";
            entry.target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const animatedElements = document.querySelectorAll(".contact-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => animatedElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gsai-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gsai-red transform rotate-45"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-gsai-gold transform rotate-12"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-gsai-red/30 transform -rotate-12"></div>
      </div>

      <div className="gsai-container px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2
              ref={titleRef}
              className="section-title text-white contact-animate text-3xl md:text-4xl font-extrabold opacity-0 relative"
            >
              Get In Touch
              <div className="absolute h-1 w-1/2 bg-gradient-to-r from-gsai-red to-gsai-gold bottom-0 left-1/4 rounded-full"></div>
            </h2>
          </div>
          
          <p
            className="text-gray-300 max-w-2xl mx-auto mt-6 contact-animate opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to begin your martial arts journey? Contact us today to learn more about 
            our programs and schedule your first session.
          </p>
          
          {/* Quick contact options */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-8 contact-animate opacity-0" style={{ animationDelay: "0.3s" }}>
            <a href="mailto:ghatakgsai@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-gsai-gray-800/50 backdrop-blur-sm rounded-full border border-gsai-gray-700 hover:border-gsai-red transition-all hover:scale-105">
              <Mail className="text-gsai-red" size={18} />
              <span className="text-white">ghatakgsai@gmail.com</span>
            </a>
            <a href="tel:+916394135988" className="flex items-center gap-2 px-4 py-2 bg-gsai-gray-800/50 backdrop-blur-sm rounded-full border border-gsai-gray-700 hover:border-gsai-gold transition-all hover:scale-105">
              <Phone className="text-gsai-gold" size={18} />
              <span className="text-white">+91-639-413-5988</span>
            </a>
            <a href="#location" className="flex items-center gap-2 px-4 py-2 bg-gsai-gray-800/50 backdrop-blur-sm rounded-full border border-gsai-gray-700 hover:border-gsai-red transition-all hover:scale-105">
              <MapPin className="text-gsai-red" size={18} />
              <span className="text-white">Find Us</span>
            </a>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info card */}
          <div
            className="contact-animate opacity-0 order-2 lg:order-1"
            style={{ animationDelay: "0.4s" }}
          >
            <ContactInfo />
          </div>
          
          {/* Contact form */}
          <div
            className="contact-animate opacity-0 order-1 lg:order-2"
            style={{ animationDelay: "0.6s" }}
          >
            <ContactForm />
          </div>
        </div>

        {/* Location Map */}
        <div id="location" className="mt-16 contact-animate opacity-0" style={{ animationDelay: "0.8s" }}>
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
