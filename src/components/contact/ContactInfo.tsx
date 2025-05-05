
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <MapPin className="text-gsai-red w-8 h-8" />,
      title: "Our Location",
      content: "Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow, U.P. - 226028",
      link: "https://maps.google.com/?q=Ghatak+Sports+Academy+India",
      linkText: "View on Map"
    },
    {
      icon: <Phone className="text-gsai-red w-8 h-8" />,
      title: "Call Us",
      content: "+91-639-413-5988\n+91-835-506-2424",
      link: "tel:+916394135988",
      linkText: "Call Now"
    },
    {
      icon: <Mail className="text-gsai-red w-8 h-8" />,
      title: "Email Us",
      content: "ghatakgsai@gmail.com\ninfo@ghataksportsacademy.com",
      link: "mailto:ghatakgsai@gmail.com",
      linkText: "Send Email"
    },
    {
      icon: <Clock className="text-gsai-red w-8 h-8" />,
      title: "Working Hours",
      content: "Monday - Saturday: 6:00 AM - 8:00 PM\nSunday: 8:00 AM - 12:00 PM",
      link: null,
      linkText: null
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl h-full"
    >
      <h3 className="text-2xl font-bold mb-6 text-gradient-gold">Contact Information</h3>
      
      <div className="space-y-8">
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="bg-black/30 p-2 rounded-xl border border-white/10 shadow-inner flex-shrink-0">
              {item.icon}
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
              
              {item.link && (
                <a 
                  href={item.link} 
                  className="inline-flex items-center mt-2 text-gsai-gold hover:text-gsai-gold-light transition-colors"
                  target={item.link.startsWith('http') ? "_blank" : undefined}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  <span>{item.linkText}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Social Media Links */}
      <div className="mt-10">
        <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          {['facebook', 'instagram', 'youtube', 'twitter'].map((platform) => (
            <a
              key={platform}
              href={`https://${platform}.com`}
              aria-label={platform}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                {platform === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>}
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
                {platform === 'twitter' && (
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                )}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
