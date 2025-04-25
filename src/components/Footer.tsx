<<<<<<< HEAD

import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
=======
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
>>>>>>> parent of 3785fdc (Refactor: Optimize website for SEO, performance, and accessibility)

const Footer = () => {
  const footerRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animationType: 'fade',
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="gsai-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gsai-gold">About GSAI</h3>
            <p className="text-gray-300 mb-4">
              Government-recognized and ISO 9001:2015 certified martial arts academy empowering individuals through world-class training.
            </p>
<<<<<<< HEAD
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://whatsapp.com" aria-label="WhatsApp" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
=======
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/share/18w1TRaYAr/?mibextid=wwXIfr" className="text-white hover:text-gsai-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/ghatakgsai/" className="text-white hover:text-gsai-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
              {/* WhatsApp Business */}
              <a href="https://wa.me/+916394135988" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 1.82.5 3.53 1.36 5.02L2.49 20.69c-.06.35.11.71.44.83.31.11.66.05.92-.16l3.16-3.16c.8.17 1.64.28 2.51.28 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.52c-1.28 0-2.52-.35-3.59-.96l-2.91 2.91-1.43-4.08c-.19-.55-.07-1.16.3-1.58l.02-.02c.35-.35.77-.55 1.23-.55.09 0 .18.01.27.02.41-.44.87-.86 1.37-1.3 1.09-.91 2.26-1.67 3.45-2.35l.06-.03c.4-.3.83-.57 1.27-.82.55-.3.89-.82.99-1.43.09-.49-.04-.99-.38-1.4-.4-.52-.88-.99-1.38-1.42-.49-.42-1.02-.75-1.57-1.04-1.05-.46-2.15-.9-3.26-1.35-1.09-.44-2.07-.9-2.94-1.41-1.07-.59-2.02-1.2-2.83-1.83-1.12-1.08-2.03-2.24-2.56-3.51-.54-1.26-.82-2.61-.82-3.97s.28-2.71.82-3.97c.53-1.27 1.44-2.43 2.56-3.51.81-.63 1.76-1.24 2.83-1.83 1.08-.51 1.86-.96 2.94-1.41 1.1-.45 2.21-.89 3.26-1.35.55-.29 1.08-.63 1.57-1.04.5-.43.98-.9 1.38-1.42.34-.41.47-.91.38-1.4-.1-.61-.44-1.13-.99-1.43-.44-.25-.87-.52-1.27-.82-.44-.27-.87-.54-1.3-.82-1.19-.68-2.37-1.44-3.45-2.35-.51-.43-.96-.85-1.37-1.3-.09-.01-.18-.02-.27-.02-.46 0-.88.2-1.23.55-.37.42-.48.93-.3 1.58l1.43 4.08 2.91-2.91c1.08-.61 2.31-.96 3.59-.96 2.72 0 5.19.89 7.16 2.39 1.89 1.42 3.42 3.34 4.22 5.68.79 2.34.98 4.76.53 7.08-.44 2.32-1.66 4.44-3.29 6.07-1.64 1.63-3.72 2.83-6.03 3.28-2.32.45-4.74.26-7.08-.53-2.34-1.41-4.26-3.34-5.68-4.22-.77-.61-1.54-1.19-2.39-1.73z"></path>
>>>>>>> parent of 3785fdc (Refactor: Optimize website for SEO, performance, and accessibility)
                </svg>
              </a>

            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gsai-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gsai-gold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gsai-red mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow, U.P. - 226028</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gsai-red mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">+91-639-413-5988<br />+91-835-506-2424</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gsai-red mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:ghatakgsai@gmail.com" className="text-gray-300 hover:text-white transition-colors">ghatakgsai@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gsai-gold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms and Conditions</Link>
              </li>
              <li>
<<<<<<< HEAD
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a>
=======
                <a href="#programs" className="text-gray-300 hover:text-gsai-red transition-colors">Boxing</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-gsai-red transition-colors">Kickboxing</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-gsai-red transition-colors">MMA</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-gsai-red transition-colors">Self-Defense</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gsai-red mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Head Office:
                  Naubasta Pulia, Takrohi Road, Amrai Gaon
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gsai-red mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">
                  +91-639-413-5988<br />+91-835-506-2424
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gsai-red mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">
                  ghatakgsai@gmail.com
                </span>
>>>>>>> parent of 3785fdc (Refactor: Optimize website for SEO, performance, and accessibility)
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ghatak Sports Academy India™. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <span>Proudly designed & maintained by </span>
            <a href="https://www.ellowdigitals.me" target="_blank" rel="noopener noreferrer" className="text-gsai-red hover:underline">EllowDigitals</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
