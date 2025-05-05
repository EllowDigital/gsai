
import { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // This would be replaced with actual API call in production
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success message
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-6 text-gradient-gold">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-300 text-sm font-medium">
              Name <span className="text-gsai-red">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium">
              Email <span className="text-gsai-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="your-email@example.com"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-gray-300 text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-gray-300 text-sm font-medium">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select a subject</option>
              <option value="admission">Admission Inquiry</option>
              <option value="program">Program Information</option>
              <option value="coaching">Coaching Opportunities</option>
              <option value="events">Events & Competitions</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-gray-300 text-sm font-medium">
            Message <span className="text-gsai-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="form-input resize-none"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full py-3 relative overflow-hidden ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              <>
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 animate-pulse-glow opacity-0 hover:opacity-100 transition-opacity bg-gsai-red-dark rounded-md"></span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
