
import { useState } from "react";
import { toast } from "react-toastify";
import Card3D from "../ui/3d-card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Send } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  program: "",
  message: "",
};

export type FormData = typeof initialFormData;

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<typeof initialFormData>({ ...initialFormData });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...initialFormData };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    }

    if (!formData.program.trim()) {
      newErrors.program = "Select a program.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      payload.append("_replyto", formData.email);
      payload.append("_subject", "GSAI: New submission!");
      payload.append("_template", "table");
      payload.append("_autoresponse_subject", "Thank you for your message!");
      payload.append("_cc", "sarwanyadav6174@gmail.com");
      payload.append("_bcc", "ellowdigitals@gmail.com");
      payload.append("_autoresponse", "Thank you for reaching out! We'll get back to you soon.");

      const res = await fetch("https://formsubmit.co/ajax/ghatakgsai@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      const result = await res.json();
      if (res.ok) {
        toast.success(`Thank you! We'll reach out soon regarding ${formData.program}.`);
        setFormData(initialFormData);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
      } else throw new Error(result.message || "Submission failed.");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card3D
      className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-black/80 to-gsai-gray-800/50"
      intensity={10}
      shadow
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gsai-gold to-gsai-red">
          Send Us a Message
          <div className="absolute h-1 w-1/2 bg-gradient-to-r from-gsai-gold to-gsai-red bottom-0 left-0 rounded-full"></div>
        </h3>

        {isSuccess && (
          <div className="bg-gsai-red/10 border border-gsai-red/20 text-white p-4 rounded-lg animate-fade-in">
            <p className="text-center font-medium flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gsai-gold" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Your message has been successfully sent!
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name, Email, Phone Inputs */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gsai-gold mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-gsai-gray-900/50 border-white/10 text-white focus:border-gsai-gold/50 focus:ring-gsai-gold/20"
              />
              {errors.name && (
                <p className="text-gsai-red text-xs mt-1">{errors.name}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm text-gsai-gold mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-gsai-gray-900/50 border-white/10 text-white focus:border-gsai-gold/50 focus:ring-gsai-gold/20"
                />
                {errors.email && (
                  <p className="text-gsai-red text-xs mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm text-gsai-gold mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="bg-gsai-gray-900/50 border-white/10 text-white focus:border-gsai-gold/50 focus:ring-gsai-gold/20"
                />
                {errors.phone && (
                  <p className="text-gsai-red text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Program Dropdown */}
          <div>
            <label htmlFor="program" className="block text-sm text-gsai-gold mb-1">
              Interested Program
            </label>
            <div className="relative">
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-white/10 bg-gsai-gray-900/50 text-white rounded-md focus:outline-none focus:border-gsai-gold/50 focus:ring-2 focus:ring-gsai-gold/20 appearance-none"
              >
                <option value="" disabled hidden>
                  Select a program
                </option>
                <option value="Karate">Karate</option>
                <option value="Taekwondo">Taekwondo</option>
                <option value="Boxing">Boxing</option>
                <option value="Kickboxing">Kickboxing</option>
                <option value="MMA">MMA</option>
                <option value="Kalaripayattu">Kalaripayattu</option>
                <option value="Self-Defense">Self-Defense</option>
                <option value="Fat Loss Program">Fat Loss Program</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-5 w-5 text-gsai-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {errors.program && (
              <p className="text-gsai-red text-xs mt-1">{errors.program}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm text-gsai-gold mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Enter your message"
              className="w-full px-4 py-2 bg-gsai-gray-900/50 border border-white/10 text-white rounded-md focus:outline-none focus:border-gsai-gold/50 focus:ring-2 focus:ring-gsai-gold/20 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="gsai" 
            className="w-full py-2 rounded-md text-white font-bold transition-all hover:scale-[1.01]"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Send size={16} />
                <span>Send Message</span>
              </div>
            )}
          </Button>
        </form>
      </div>
    </Card3D>
  );
};

export default ContactForm;
