
import React, { useState, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, index, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className="glass-card mb-4 overflow-hidden faq-animate opacity-0"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <button
        className="w-full py-4 px-6 text-left flex justify-between items-center"
        onClick={onClick}
      >
        <span className="font-semibold text-white text-lg">{question}</span>
        <svg
          className={`w-5 h-5 text-gsai-red transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-2 px-6 border-t border-white/10 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            // Ensure visibility
            if (entry.target instanceof HTMLElement) {
              entry.target.style.visibility = 'visible';
              entry.target.style.opacity = '1';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.faq-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqData = [
    {
      question: 'What are the enrollment fees?',
      answer: 'Our enrollment fees vary based on the program you choose. Basic programs start from ₹3,500 per month, while advanced programs range from ₹5,000 to ₹8,000 per month. We also offer quarterly and annual packages with discounted rates. Please contact us for the most current pricing information.'
    },
    {
      question: 'Do you offer trial classes?',
      answer: 'Yes, we offer one complimentary trial class for new students to experience our training environment and methodology. This allows you to make an informed decision before committing to enrollment. To schedule a trial class, please contact our admissions office.'
    },
    {
      question: 'Is hostel accommodation provided?',
      answer: 'Yes, we provide hostel accommodation for students enrolled in our full-time programs. Our facilities include separate dormitories for male and female students, dining areas, study rooms, and recreational spaces. Accommodation fees are separate from program fees.'
    },
    {
      question: 'What age groups do you accept?',
      answer: 'We welcome students of all ages. Our programs are divided into age-appropriate categories: Little Champions (5-7 years), Junior Cadets (8-12 years), Teen Warriors (13-17 years), and Adults (18+). Each program is specifically designed to address the developmental needs of these age groups.'
    },
    {
      question: 'What certifications do students receive?',
      answer: 'Students receive official GSAI certifications for completed courses and belt promotions. Our certifications are recognized nationally and carry weight in martial arts competitions and instructor qualifications. Advanced students also have the opportunity to pursue international certifications through our partner organizations.'
    },
    {
      question: 'Do you offer transportation services?',
      answer: 'Yes, we provide transportation services within designated areas of the city. Our academy buses run on fixed schedules to pick up and drop off students. Transportation fees are calculated based on the distance from the academy.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white faq-animate opacity-0">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto faq-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            Find answers to common questions about Ghatak Sports Academy India™ programs, enrollment, and facilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4 faq-animate opacity-0" style={{ animationDelay: '0.8s' }}>
            Still have questions?
          </p>
          <a href="#contact" className="gsai-btn faq-animate opacity-0" style={{ animationDelay: '0.9s' }}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
