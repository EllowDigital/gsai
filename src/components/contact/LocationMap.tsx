
import { motion } from 'framer-motion';

const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
    >
      <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md p-4 sm:p-6">
        <h3 className="text-2xl font-bold mb-4 text-gradient-gold">Our Location</h3>
        <p className="text-gray-300 mb-4">
          Located in the heart of Lucknow, Ghatak Sports Academy India is easily accessible from all parts of the city.
        </p>
      </div>
      
      <div className="h-[350px] sm:h-[450px] w-full bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center z-10">
          <div className="animate-pulse bg-white/10 rounded-lg p-8 backdrop-blur-sm text-center max-w-md">
            <h4 className="text-white text-xl font-semibold mb-4">Interactive Map Loading</h4>
            <p className="text-gray-200 mb-6">Our Google Maps integration appears here in the live website. Providing directions and location details.</p>
            <a 
              href="https://maps.google.com/?q=Ghatak+Sports+Academy+India" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        
        {/* A placeholder map image */}
        <img 
          src="/images/map.png" 
          alt="Map of Ghatak Sports Academy Location" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // If image fails to load, show a fallback
            const target = e.target as HTMLImageElement;
            target.src = "https://maps.googleapis.com/maps/api/staticmap?center=26.880892,80.968186&zoom=15&size=1200x600&markers=color:red%7C26.880892,80.968186&key=YOUR_API_KEY";
          }}
        />
      </div>
      
      <div className="bg-gradient-to-tr from-black/60 to-gray-900/60 backdrop-blur-md p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-black/30 p-4 rounded-lg border border-white/10">
            <h4 className="text-white font-semibold mb-2">Address</h4>
            <p className="text-gray-300 text-sm">Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow, U.P. - 226028</p>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/10">
            <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
            <p className="text-gray-300 text-sm">Monday - Saturday: 6:00 AM - 8:00 PM<br />Sunday: 8:00 AM - 12:00 PM</p>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-white/10">
            <h4 className="text-white font-semibold mb-2">Public Transport</h4>
            <p className="text-gray-300 text-sm">Bus Routes: 23, 45, 56<br />Nearby Metro: Indira Nagar (2km)</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationMap;
