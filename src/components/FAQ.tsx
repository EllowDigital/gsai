
import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useParallax } from '@/hooks/use-parallax';
import Card3D from './ui/3d-card';

const FAQ = () => {
  const titleRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });

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
          <h2 
            ref={titleRef}
            className="section-title text-white faq-animate opacity-0"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto faq-animate opacity-0" style={{ animationDelay: '0.2s' }}>
            Find answers to common questions about Ghatak Sports Academy India™ programs, enrollment, and facilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card3D
            className="w-full"
            intensity={5}
            shadow
            border
          >
            <div className="p-1">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="faq-animate opacity-0 mb-4 overflow-hidden border-b border-white/10"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <AccordionTrigger className="py-4 px-6 text-left font-semibold text-white text-lg hover:text-gsai-red transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="py-2 px-6 text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card3D>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4 faq-animate opacity-0" style={{ animationDelay: '0.8s' }}>
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="gsai-btn faq-animate opacity-0" 
            style={{ animationDelay: '0.9s' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
