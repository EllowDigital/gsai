
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Terms and Conditions | Ghatak Sports Academy India</title>
        <meta name="description" content="Terms and Conditions for Ghatak Sports Academy India. Please read these terms carefully before enrolling in our martial arts programs." />
      </Helmet>

      <NavBar />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h1>
          
          <div className="space-y-6 text-sm sm:text-base">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-2">By accessing or using the services provided by Ghatak Sports Academy India™ (hereinafter referred to as "GSAI"), you agree to comply with and be bound by these Terms and Conditions.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Membership and Enrollment</h2>
              <p className="text-gray-300 mb-2">2.1 Enrollment in any GSAI program is subject to availability and acceptance by GSAI management.</p>
              <p className="text-gray-300 mb-2">2.2 All memberships require the completion of registration forms and payment of applicable fees.</p>
              <p className="text-gray-300 mb-2">2.3 Membership fees are non-refundable except as specified in our Refund Policy.</p>
              <p className="text-gray-300 mb-2">2.4 GSAI reserves the right to refuse or cancel membership without stating reasons.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Rules and Regulations</h2>
              <p className="text-gray-300 mb-2">3.1 Members must adhere to all rules and regulations set forth by GSAI.</p>
              <p className="text-gray-300 mb-2">3.2 Proper attire and equipment as specified by GSAI must be worn during training.</p>
              <p className="text-gray-300 mb-2">3.3 Members are expected to maintain discipline and respect toward instructors and fellow students.</p>
              <p className="text-gray-300 mb-2">3.4 GSAI has zero tolerance for bullying, discrimination, or harassment of any kind.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Health and Safety</h2>
              <p className="text-gray-300 mb-2">4.1 Members are required to disclose any medical conditions that may affect their ability to participate in training.</p>
              <p className="text-gray-300 mb-2">4.2 GSAI reserves the right to request a medical clearance from a qualified physician.</p>
              <p className="text-gray-300 mb-2">4.3 Members participate in all activities at their own risk.</p>
              <p className="text-gray-300 mb-2">4.4 Parents/guardians are responsible for dropping off and picking up minor students on time.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Privacy Policy</h2>
              <p className="text-gray-300 mb-2">5.1 Personal information collected by GSAI is used solely for program administration and will not be shared with third parties except as required by law.</p>
              <p className="text-gray-300 mb-2">5.2 GSAI may use photographs or videos of classes and events for promotional purposes unless members opt out in writing.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Changes to Terms</h2>
              <p className="text-gray-300 mb-2">GSAI reserves the right to modify these terms and conditions at any time. Changes will be effective upon posting to our website or through direct communication with members.</p>
            </section>
            
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-gray-300 mb-2">For questions or concerns regarding these terms, please contact us at:</p>
              <address className="text-gray-300 not-italic">
                <p>Ghatak Sports Academy India™</p>
                <p>Email: ghatakgsai@gmail.com</p>
                <p>Phone: +91 6394135988</p>
              </address>
            </section>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-xs sm:text-sm">Last updated: April 15, 2025</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
