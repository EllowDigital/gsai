
import { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useParallax } from '@/hooks/use-parallax';
import Card3D from './ui/3d-card';
import { MessageSquare, Quote } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const titleRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

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

  const faqData: FaqItem[] = [
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
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-black via-black to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/slider.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gsai-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gsai-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="gsai-container relative z-10 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 relative">
          <MessageSquare className="text-gsai-gold h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 opacity-80" />
          
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gsai-gold to-white bg-clip-text text-transparent mb-6 faq-animate opacity-0"
          >
            Frequently Asked Questions
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red mx-auto mt-3 mb-6 rounded-full"></div>
          
          <p className="text-gray-300 max-w-2xl mx-auto faq-animate opacity-0 text-lg" style={{ animationDelay: '0.2s' }}>
            Find answers to common questions about Ghatak Sports Academy India™ programs, enrollment, and facilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card3D
            className="w-full backdrop-blur-sm"
            intensity={10}
            shadow
            border
          >
            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900/80 to-black/90 rounded-xl border border-gray-800/50">
              <Accordion 
                type="single" 
                collapsible 
                className="w-full space-y-6"
                value={activeItem}
                onValueChange={setActiveItem}
              >
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="faq-animate opacity-0 overflow-hidden border-0 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl shadow-xl"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <AccordionTrigger 
                      className={`py-5 px-6 text-left font-bold text-lg hover:no-underline group ${
                        activeItem === `item-${index}` ? 'text-gsai-gold' : 'text-white'
                      }`}
                      onClick={() => setActiveItem(activeItem === `item-${index}` ? undefined : `item-${index}`)}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${
                          activeItem === `item-${index}` 
                            ? 'from-gsai-red to-gsai-gold text-white' 
                            : 'from-gray-700 to-gray-800 text-gray-300'
                        } transition-all duration-300`}>
                          {index + 1}
                        </span>
                        <span className="group-hover:text-gsai-gold transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="py-2 px-6 pb-6 text-gray-300 text-base leading-relaxed border-t border-gray-700/30 mt-1 pt-4">
                      <div className="flex">
                        <Quote className="text-gsai-red/50 h-8 w-8 mr-3 flex-shrink-0 mt-1" />
                        <div>{faq.answer}</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card3D>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-400 mb-6 faq-animate opacity-0 text-lg" style={{ animationDelay: '0.8s' }}>
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="faq-animate opacity-0 inline-block px-8 py-3 bg-gradient-to-r from-gsai-red to-gsai-gold text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
