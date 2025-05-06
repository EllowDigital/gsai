
import { motion } from 'framer-motion';
import { Globe, Clock, MapPin, Bus } from 'lucide-react';

const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden border border-white/10 shadow-xl transform-gpu"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-md p-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-gsai-gold to-amber-400 bg-clip-text text-transparent">Our Location</h3>
        <p className="text-gray-300 mb-4 text-base sm:text-lg">
          Located in the heart of Lucknow, Ghatak Sports Academy India is easily accessible from all parts of the city.
        </p>
      </div>
      
      <div className="h-[350px] sm:h-[450px] w-full relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 flex items-center justify-center z-10"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <motion.div 
            className="bg-black/60 rounded-lg p-8 backdrop-blur-md text-center max-w-md border border-white/10"
            initial={{ scale: 0.9, opacity: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            <h4 className="text-white text-xl font-semibold mb-4">Interactive Map</h4>
            <p className="text-gray-200 mb-6">Our Google Maps integration provides directions and detailed location information.</p>
            <motion.a 
              href="https://maps.google.com/?q=Ghatak+Sports+Academy+India" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-gsai-red to-gsai-red-dark text-white font-medium rounded-lg transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe className="inline-block mr-2 h-5 w-5" />
              Open in Google Maps
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* A placeholder map image with blur-up loading */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gray-900 animate-pulse"></div>
          <img 
            src="/images/map.png" 
            alt="Map of Ghatak Sports Academy Location" 
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
            onError={(e) => {
              // If image fails to load, show a fallback
              const target = e.target as HTMLImageElement;
              target.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7129062858908!2d81.02444217543946!3d26.912605076647186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999596def6ea9c7%3A0x23d2ceb539bff92!2sGhatak%20Sports%20Academy%20India!5e0!3m2!1sen!2sin!4v1746478930599!5m2!1sen!2sin";
            }}
          />
        </div>
      </div>
      
      <div className="bg-gradient-to-tr from-black/80 to-gray-900/80 backdrop-blur-md p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div 
            className="bg-black/50 p-5 rounded-xl border border-white/10"
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
          >
            <div className="flex items-start">
              <MapPin className="text-gsai-red h-6 w-6 mt-1 mr-3" />
              <div>
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-gray-300 text-sm">Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow, U.P. - 226028</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/50 p-5 rounded-xl border border-white/10"
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
          >
            <div className="flex items-start">
              <Clock className="text-gsai-gold h-6 w-6 mt-1 mr-3" />
              <div>
                <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
                <p className="text-gray-300 text-sm">Monday - Saturday: 2:00 PM - 7:00 PM<br />Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/50 p-5 rounded-xl border border-white/10"
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
          >
            <div className="flex items-start">
              <Bus className="text-gsai-red h-6 w-6 mt-1 mr-3" />
              <div>
                <h4 className="text-white font-semibold mb-2">Public Transport</h4>
                <p className="text-gray-300 text-sm">E-Rickshaw<br />Nearby Metro: Indira Nagar (2km)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationMap;
