import React from "react";
import { Helmet } from 'react-helmet-async';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PrivacyPolicy = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animationType: "fade",
  });

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ghatak Sports Academy India™</title>
        <meta
          name="description"
          content="Privacy policy for Ghatak Sports Academy India™. Learn how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href="https://ghatakgsai.netlify.app/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <NavBar />

        <main className="gsai-container py-16">
          <div ref={sectionRef} className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">
              Privacy Policy
            </h1>

            <ScrollArea className="h-[70vh] rounded-md border p-6 bg-black/30">
              <div className="space-y-8 text-left">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Introduction</h2>
                  <p className="mb-4">
                    At Ghatak Sports Academy India™ (GSAI), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                  </p>
                  <p>
                    This policy applies to information we collect through our website, in email, text, and other electronic communications sent through or in connection with our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Information We Collect</h2>
                  <p className="mb-4">We collect several types of information from and about users of our website, including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Personal information, such as name, postal address, email address, telephone number, and any other identifier by which you may be contacted online or offline</li>
                    <li>Information about your internet connection, the equipment you use to access our website, and usage details</li>
                    <li>Records and copies of your correspondence with us</li>
                    <li>Details of transactions you carry out through our website and of the fulfillment of your orders</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">How We Use Your Information</h2>
                  <p className="mb-4">We use the information that we collect about you or that you provide to us:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To present our website and its contents to you</li>
                    <li>To provide you with information, products, or services that you request from us</li>
                    <li>To fulfill any other purpose for which you provide it</li>
                    <li>To provide you with notices about your account or subscription</li>
                    <li>To carry out our obligations and enforce our rights</li>
                    <li>To notify you about changes to our website or any products or services we offer</li>
                    <li>To improve our website and customer service</li>
                    <li>In any other way we may describe when you provide the information</li>
                    <li>For any other purpose with your consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Data Security</h2>
                  <p className="mb-4">
                    We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Cookies</h2>
                  <p className="mb-4">
                    Our website uses cookies to enhance your experience when visiting our website. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enables the site or service provider's systems to recognize your browser and capture and remember certain information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Your Rights</h2>
                  <p className="mb-4">
                    You have the right to access, correct, delete, or restrict the processing of your personal data. You also have the right to receive your personal data in a structured, commonly used format, and to transmit that data to another controller.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Changes to Our Privacy Policy</h2>
                  <p className="mb-4">
                    It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website.
                  </p>
                  <p>
                    The date the privacy policy was last revised is identified at the bottom of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our website and this privacy policy to check for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Contact Information</h2>
                  <p className="mb-4">
                    To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                  </p>
                  <p><strong>Email:</strong> ghatakgsai@gmail.com</p>
                  <p><strong>Phone:</strong> +91-639-413-5988</p>
                  <p>
                    <strong>Address:</strong> Naubasta Pulia, Takrohi Road, Amrai Gaon, Indira Nagar, Lucknow, U.P. - 226028
                  </p>
                </section>

                <p className="text-sm text-gray-400 pt-4 border-t border-gray-800">
                  Last Updated: April 25, 2025
                </p>
              </div>
            </ScrollArea>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
