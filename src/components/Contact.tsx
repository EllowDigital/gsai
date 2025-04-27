
import { useEffect } from "react";
import { useParallax } from "@/hooks/use-parallax";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import LocationMap from "./contact/LocationMap";

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
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".contact-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => animatedElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gsai-gray-900"
    >
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="section-title text-white contact-animate text-4xl font-extrabold opacity-0"
          >
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>

          <p
            className="text-gray-300 max-w-2xl mx-auto contact-animate opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to begin your martial arts journey? Get in touch with us today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="contact-animate opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <ContactInfo />
          </div>
          <div
            className="contact-animate opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <ContactForm />
          </div>
        </div>
        <LocationMap />
      </div>
    </section>
  );
};

export default Contact;
