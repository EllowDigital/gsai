import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Card3D from "./ui/3d-card";
import { useParallax } from "@/hooks/use-parallax";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  program: "",
  message: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<typeof formData>({ ...initialFormData });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const titleRef = useParallax<HTMLHeadingElement>({ speed: 0.1 });
  const mapRef = useParallax<HTMLDivElement>({ speed: 0.05 });

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

      toast({
        title: "Success!",
        description: `Thank you! We'll reach out soon regarding ${formData.program}.`,
      });

      setFormData(initialFormData);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.style.visibility = "visible";
            entry.target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".contact-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => animatedElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gsai-gray-900"
    >
      <div className="gsai-container">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="section-title text-white contact-animate text-4xl font-extrabold opacity-0"
          >
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>

          <p
            className="text-gray-300 max-w-2xl mx-auto contact-animate opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to begin your martial arts journey? Get in touch with us
            today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="contact-animate opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <Card3D className="h-full" intensity={15} shadow glare>
              <div className="p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-gsai-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:ghatakgsai@gmail.com"
                        className="text-white hover:text-gsai-red"
                      >
                        ghatakgsai@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-gsai-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">
                        +91-639-413-5988 | +91-835-506-2424
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-gsai-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white">
                        Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar,
                        Lucknow, Uttar Pradesh - 226028 (Head Branch)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gsai-red bg-opacity-20 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-gsai-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white">
                        {" "}
                        Fitness & Fun Arena (TCC): Hardasi Kheda, Deva Road,
                        near Baba Hospital Road, City Colony, Matiyari, Lucknow,
                        Uttar Pradesh (Second Branch)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Opening Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400">Monday - Friday</p>
                      <p className="text-white">6:00 AM - 9:00 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Saturday - Sunday</p>
                      <p className="text-white">8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          <div
            className="contact-animate opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <Card3D className="w-full" intensity={10} shadow>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>

                {isSuccess && (
                  <p className="text-green-400 font-semibold mb-4 text-center animate-fade-in">
                    ✅ Your message has been successfully sent!
                  </p>
                )}

                <form
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/ellowdigitals@gmail.com"
                  method="POST"
                >
                  <div className="mb-4">
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

                  <div className="mb-4">
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
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
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
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="program"
                      className="block text-gray-300 mb-2"
                    >
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
                      <p className="text-red-400 text-sm mt-1">
                        {errors.program}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2"
                    >
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
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message}
                      </p>
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
          </div>
        </div>

        <div
          className="mt-16 text-center contact-animate opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl font-semibold text-white">Our Location</h3>
          <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7127555156358!2d81.02444217597154!3d26.912609860094033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999596def6ea9c7%3A0x23d2ceb539bff92!2sGhatak%20Sports%20Academy%20India!5e0!3m2!1sen!2sin!4v1739461937485!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover", // Ensures the map covers the container without being distorted
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
