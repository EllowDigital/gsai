
import Card3D from "../ui/3d-card";
import { MapPin } from "lucide-react";

const LocationMap = () => {
  return (
    <div className="px-4 text-center contact-animate opacity-0">
      <div className="flex items-center justify-center gap-3 mb-6">
        <MapPin className="text-gsai-red" size={24} />
        <h3 className="text-2xl font-semibold text-white">Our Location</h3>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-gsai-red to-gsai-gold mx-auto mb-8 rounded-full"></div>
      
      <Card3D 
        className="w-full overflow-hidden rounded-xl border border-white/10"
        intensity={5}
      >
        <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7127555156358!2d81.02444217597154!3d26.912609860094033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999596def6ea9c7%3A0x23d2ceb539bff92!2sGhatak%20Sports%20Academy%20India!5e0!3m2!1sen!2sin!4v1739461937485!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
            allowFullScreen
            loading="lazy"
            title="GSAI Location Map"
          ></iframe>
          
          {/* Gradient overlay at the top of the map */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
          
          {/* Map pin markers */}
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-lg">
            <div className="flex items-center gap-2">
              <MapPin className="text-gsai-red flex-shrink-0" size={16} />
              <span className="text-white text-sm whitespace-nowrap">Ghatak Sports Academy</span>
            </div>
          </div>
        </div>
      </Card3D>
      
      <div className="mt-6 max-w-2xl mx-auto text-left bg-gsai-gray-900/50 border border-white/5 rounded-lg p-4">
        <p className="text-white/80 text-sm">
          <strong className="text-gsai-gold">Getting Here:</strong> Located in 
          Indira Nagar, our academy is easily accessible via public transportation 
          and has ample parking space. If you need specific directions, please feel free 
          to contact us at <a href="tel:+916394135988" className="text-gsai-red hover:underline">+91-639-413-5988</a>.
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
