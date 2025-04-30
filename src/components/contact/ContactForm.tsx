import { useState } from "react";
import { toast } from "react-toastify";
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
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      payload.append("_replyto", formData.email);
      payload.append("_subject", "GSAI: New submission!");
      payload.append("_template", "table");
      payload.append("_autoresponse_subject", "Thank you for your message!");
      payload.append("_cc", "sarwanyadav6174@gmail.com");
      payload.append("_bcc", "ellowdigitals@gmail.com");
      payload.append(
        "_autoresponse",
        "Thank you for reaching out! We'll get back to you soon."
      );

      const res = await fetch(
        "https://formsubmit.co/ajax/ghatakgsai@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: payload,
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success(
          `Thank you! We'll reach out soon regarding ${formData.program}.`
        );
        setFormData(initialFormData);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card3D
      className="w-full max-w-xl mx-auto p-6 sm:p-8 md:p-10"
      intensity={10}
      shadow
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white text-center sm:text-left">
          Send Us a Message
        </h3>

        {isSuccess && (
          <p className="text-green-400 font-semibold mb-4 text-center animate-fade-in">
            ✅ Your message has been successfully sent!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            {
              label: "Your Name",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
            },
            {
              label: "Email Address",
              name: "email",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              label: "Phone Number",
              name: "phone",
              type: "tel",
              placeholder: "Enter your phone number",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label htmlFor={name} className="block text-gray-300 mb-2">
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name as keyof FormData]}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-yellow-400"
                placeholder={placeholder}
                required
              />
              {errors[name as keyof typeof errors] && (
                <p className="text-red-400 text-sm mt-1">
                  {errors[name as keyof typeof errors]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label htmlFor="program" className="block text-gray-300 mb-2">
              Interested Program
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-yellow-400"
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
                  className="bg-gray-900 text-white"
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
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-yellow-400"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 rounded-md font-bold text-black bg-yellow-400 hover:bg-yellow-500 transition-opacity duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
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
