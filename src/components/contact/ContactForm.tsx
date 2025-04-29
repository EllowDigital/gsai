import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Card3D from "../ui/3d-card";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  program: "",
  message: "",
};

export type FormData = typeof initialFormData;

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<typeof formData>({ ...initialFormData });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: typeof errors = { ...initialFormData };

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
      toast({
        title: "Form Submission Failed",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        payload.append(key, value)
      );

      // Add form submission configuration
      payload.append("_replyto", formData.email);
      payload.append("_next", "https://ghatakgsai.netlify.app/");
      payload.append("_subject", "GSAI: New submission!");
      payload.append("_cc", "sarwanyadav6174@email.com");
      payload.append("_bcc", "ghatakgsai@email.com");
      payload.append("_honeypot", "name");
      payload.append("_honeypot", "message");
      payload.append("_template", "table");
      payload.append(
        "_autoresponse",
        "Thank you for reaching out! We'll get back to you soon."
      );
      payload.append("_blacklist", "spammy term, banned term");
      payload.append("_captcha", "false");

      const res = await fetch("https://formsubmit.co/ellowdigitals@gmail.com", {
        method: "POST",
        body: payload,
        redirect: "manual",
      });

      console.log("FormSubmit response:", res);

      if (res.status === 200 || res.status === 302) {
        toast({
          title: "Success!",
          description: `Thank you! We'll reach out soon regarding ${formData.program}.`,
        });

        setFormData(initialFormData);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        throw new Error(`Submission failed: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card3D className="w-full max-w-xl mx-auto p-6 sm:p-8 md:p-10" intensity={10} shadow>
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white text-center sm:text-left">Send Us a Message</h3>

        {isSuccess && (
          <p className="text-green-400 font-semibold mb-4 text-center animate-fade-in">
            ✅ Your message has been successfully sent!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-gsai-red"
              placeholder="Enter your name"
              required
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-gsai-red"
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-gsai-red"
              placeholder="Enter your phone number"
              required
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="program" className="block text-gray-300 mb-2">
              Interested Program
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-gsai-red"
              required
            >
              {[
                "Select a program",
                "Karate",
                "Taekwondo",
                "Boxing",
                "Kickboxing",
                "MMA",
                "Kalaripayattu",
                "Self-Defense",
                "Fat Loss Program",
              ].map((program, index) => (
                <option
                  key={index}
                  value={program === "Select a program" ? "" : program}
                  disabled={program === "Select a program"}
                  style={{ color: "#8B0000" }}
                >
                  {program}
                </option>
              ))}
            </select>
            {errors.program && (
              <p className="text-red-400 text-sm mt-1">{errors.program}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-gsai-red"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`gsai-btn w-full transition-opacity duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Card3D>
  );
};

export default ContactForm;
