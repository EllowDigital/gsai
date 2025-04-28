import React from "react";
import { Helmet } from 'react-helmet-async';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Terms = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animationType: "fade",
  });

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Ghatak Sports Academy India™</title>
        <meta
          name="description"
          content="Terms and conditions for Ghatak Sports Academy India™. Learn about our policies, rules, and guidelines for using our services."
        />
        <link rel="canonical" href="https://ghatakgsai.netlify.app/terms" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <NavBar />

        <main className="gsai-container py-16">
          <div ref={sectionRef} className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">Terms and Conditions</h1>

            <ScrollArea className="h-[70vh] rounded-md border p-6 bg-black/30">
              <div className="space-y-8 text-left">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Agreement to Terms</h2>
                  <p className="mb-4">
                    These Terms and Conditions constitute a legally binding agreement made between you, the user of our website and services, and Ghatak Sports Academy India™ (GSAI). By accessing our website and/or using our services, you agree to be bound by these Terms and Conditions.
                  </p>
                  <p>If you disagree with any part of these terms, you may not access the website or use our services.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Enrollment and Membership</h2>
                  <p className="mb-4">By enrolling in GSAI, you agree to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Follow all academy rules, regulations, and safety protocols</li>
                    <li>Understand that martial arts training involves physical contact and inherent risks</li>
                    <li>Pay the agreed fees according to the selected payment schedule</li>
                    <li>Acknowledge that membership is non-transferable without prior written approval</li>
                    <li>Provide accurate medical information and acknowledge fitness for training</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Intellectual Property Rights</h2>
                  <p className="mb-4">
                    The GSAI website and all its content, features, and functionality (including text, graphics, videos, and logos) are owned by Ghatak Sports Academy India™ and are protected by Indian and international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Payment Terms</h2>
                  <p className="mb-4">
                    Fees are due according to the agreed payment schedule. We accept various payment methods as outlined during enrollment. Late payments may incur additional charges. Price changes will be communicated with at least 30 days' notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Cancellation and Refunds</h2>
                  <p className="mb-4">
                    Membership cancellation requires 30 days' written notice. Refunds are subject to our refund policy, which varies by program and circumstance. No refunds are provided for missed classes, though make-up options may be available at our discretion.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Conduct and Discipline</h2>
                  <p className="mb-4">
                    Members must conduct themselves with respect and courtesy. GSAI reserves the right to terminate membership without refund for misconduct, including but not limited to: harassment, bullying, discriminatory behavior, unsafe practices, damage to property, or use of martial arts techniques outside the academy for non-defensive purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Limitation of Liability</h2>
                  <p className="mb-4">
                    By participating in martial arts training at GSAI, you acknowledge the inherent risks involved. While we take all reasonable precautions, GSAI, its instructors, and staff shall not be held liable for any injuries sustained during training or while using our facilities, except in cases of gross negligence or willful misconduct.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Photography and Media</h2>
                  <p className="mb-4">
                    GSAI reserves the right to use photographs and videos taken during classes, events, or tournaments for promotional purposes. If you wish to opt out, please submit a written request to our administration office.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Amendments to Terms</h2>
                  <p className="mb-4">
                    GSAI reserves the right to modify these terms at any time. Updated terms will be posted on our website and within our facilities. Continued use of our services after such changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Governing Law</h2>
                  <p className="mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Lucknow, Uttar Pradesh.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms and Conditions, please contact us at:
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

export default Terms;
