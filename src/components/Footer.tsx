import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useDeviceType } from '@/hooks/use-device-type';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const footerRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animationType: 'fade',
  });

  const deviceType = useDeviceType();
  const { colors } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef} 
      className="bg-black text-white py-8 md:py-12 lg:py-16 border-t border-gray-800 relative"
    >
      {/* Background gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/images/texture.png')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-4" style={{ color: colors.gold.DEFAULT }}>About GSAI</h3>
            <p className="text-gray-300 text-sm">
              Government-recognized and ISO 9001:2015 certified martial arts academy empowering individuals through world-class training.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              {['facebook', 'instagram', 'youtube', 'whatsapp'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`}
                  aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  style={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    padding: '8px',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={deviceType === "mobile" ? "20" : "22"}
                    height={deviceType === "mobile" ? "20" : "22"}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`feather feather-${platform}`}
                  >
                    {/* SVG paths for different icons */}
                    {platform === 'facebook' && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    )}
                    {platform === 'instagram' && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </>
                    )}
                    {platform === 'youtube' && (
                      <>
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </>
                    )}
                    {platform === 'whatsapp' && (
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-4" style={{ color: colors.gold.DEFAULT }}>Quick Links</h3>
            <ul className="grid grid-cols-1 gap-2">
              {['About', 'Programs', 'Gallery', 'FAQ', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-2 rounded-full mr-0 group-hover:mr-2 transition-all duration-300" style={{ background: colors.red.DEFAULT }}></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-4" style={{ color: colors.gold.DEFAULT }}>Contact</h3>
            <ul className="grid grid-cols-1 gap-3">
              <li className="flex items-start gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mt-0.5 flex-shrink-0" 
                  style={{ color: colors.red.DEFAULT }}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow, U.P. - 226028</span>
              </li>
              <li className="flex items-start gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mt-0.5 flex-shrink-0" 
                  style={{ color: colors.red.DEFAULT }}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300 text-sm">+91-639-413-5988<br />+91-835-506-2424</span>
              </li>
              <li className="flex items-start gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mt-0.5 flex-shrink-0" 
                  style={{ color: colors.red.DEFAULT }}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:ghatakgsai@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">ghatakgsai@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 md:mb-4" style={{ color: colors.gold.DEFAULT }}>Legal</h3>
            <ul className="grid grid-cols-1 gap-2">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms and Conditions', path: '/terms' },
                { name: 'Refund Policy', path: '/refund-policy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <span className="inline-block w-0 group-hover:w-2 h-2 rounded-full mr-0 group-hover:mr-2 transition-all duration-300" style={{ background: colors.red.DEFAULT }}></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Ghatak Sports Academy India™. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <span>Proudly designed & maintained by </span>
            <a 
              href="https://www.ellowdigitals.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline transition-colors duration-300"
              style={{ color: colors.red.DEFAULT }}
            >
              EllowDigital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
