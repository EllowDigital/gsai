
import Card3D from "../ui/3d-card";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const ContactInfo = () => {
  return (
    <Card3D
      className="h-full p-6 sm:p-8 rounded-xl border border-white/10 shadow-xl backdrop-blur-sm bg-gradient-to-br from-black/80 to-gsai-gray-800/50"
      intensity={15}
      shadow
      glare
    >
      <div className="h-full flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gsai-gold to-gsai-red">
          Contact Information
        </h3>

        <div className="space-y-6 mb-8">
          {/* Email */}
          <div className="flex items-start gap-4 group">
            <div className="bg-gsai-red/10 p-3 rounded-full group-hover:bg-gsai-red/20 transition-all">
              <Mail className="w-6 h-6 text-gsai-red" />
            </div>
            <div>
              <p className="text-sm text-gsai-gold mb-1">Email</p>
              <a
                href="mailto:ghatakgsai@gmail.com"
                className="text-white hover:text-gsai-red transition-colors break-all"
              >
                ghatakgsai@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 group">
            <div className="bg-gsai-gold/10 p-3 rounded-full group-hover:bg-gsai-gold/20 transition-all">
              <Phone className="w-6 h-6 text-gsai-gold" />
            </div>
            <div>
              <p className="text-sm text-gsai-gold mb-1">Phone</p>
              <div className="flex flex-col space-y-1">
                <a href="tel:+916394135988" className="text-white hover:text-gsai-red transition-colors">
                  +91-639-413-5988
                </a>
                <a href="tel:+918355062424" className="text-white hover:text-gsai-red transition-colors">
                  +91-835-506-2424
                </a>
              </div>
            </div>
          </div>

          {/* Address 1 */}
          <div className="flex items-start gap-4 group">
            <div className="bg-gsai-red/10 p-3 rounded-full group-hover:bg-gsai-red/20 transition-all">
              <MapPin className="w-6 h-6 text-gsai-red" />
            </div>
            <div>
              <p className="text-sm text-gsai-gold mb-1">Head Branch</p>
              <p className="text-white text-sm">
                Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow,
                Uttar Pradesh - 226028
              </p>
            </div>
          </div>

          {/* Address 2 */}
          <div className="flex items-start gap-4 group">
            <div className="bg-gsai-gold/10 p-3 rounded-full group-hover:bg-gsai-gold/20 transition-all">
              <MapPin className="w-6 h-6 text-gsai-gold" />
            </div>
            <div>
              <p className="text-sm text-gsai-gold mb-1">Second Branch</p>
              <p className="text-white text-sm">
                Fitness & Fun Arena (TCC): Hardasi Kheda, Deva Road, near Baba
                Hospital Road, City Colony, Matiyari, Lucknow, Uttar Pradesh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-gsai-red" />
            <h4 className="text-lg font-semibold text-gsai-gold">
              Opening Hours
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/30 p-4 rounded-lg border border-white/5">
            <div className="flex flex-col">
              <p className="text-gsai-gold text-sm">Monday - Friday</p>
              <p className="text-white font-medium">6:00 AM - 9:00 PM</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gsai-gold text-sm">Saturday - Sunday</p>
              <p className="text-white font-medium">8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-gsai-gold mb-3">Follow Us</p>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/ghataksportacademyindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gsai-red/10 p-3 rounded-full hover:bg-gsai-red/30 transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-gsai-red" />
            </a>
            <a 
              href="https://facebook.com/ghataksportacademyindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gsai-gold/10 p-3 rounded-full hover:bg-gsai-gold/30 transition-all hover:scale-110"
            >
              <Facebook className="w-5 h-5 text-gsai-gold" />
            </a>
          </div>
        </div>
      </div>
    </Card3D>
  );
};

export default ContactInfo;
