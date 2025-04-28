
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Refund Policy | Ghatak Sports Academy India</title>
        <meta name="description" content="Refund Policy for Ghatak Sports Academy India. Learn about our refund terms, cancellations, and payment policies." />
      </Helmet>

      <NavBar />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Refund Policy</h1>
          
          <div className="space-y-6 text-sm sm:text-base">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Registration and Enrollment Fees</h2>
              <p className="text-gray-300 mb-2">1.1 Registration fees are non-refundable under any circumstances.</p>
              <p className="text-gray-300 mb-2">1.2 Enrollment fees may be refunded as per the terms outlined below.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
              <p className="text-gray-300 mb-2">2.1 Full refunds (excluding registration fees) will be issued if requested within 7 days of enrollment, provided no more than two classes have been attended.</p>
              <p className="text-gray-300 mb-2">2.2 Partial refunds of 50% may be issued if requested within 14 days of enrollment, provided no more than four classes have been attended.</p>
              <p className="text-gray-300 mb-2">2.3 No refunds will be issued after 14 days of enrollment or after attending more than four classes.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Special Circumstances</h2>
              <p className="text-gray-300 mb-2">3.1 Medical Condition: If a student cannot continue training due to a medical condition (verified by a physician's note), a prorated refund may be issued based on the remaining unutilized period.</p>
              <p className="text-gray-300 mb-2">3.2 Relocation: If a student relocates more than 50 kilometers from the academy location, a prorated refund may be considered with proper documentation.</p>
              <p className="text-gray-300 mb-2">3.3 GSAI reserves the right to assess each special circumstance on a case-by-case basis.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Program Cancellation by GSAI</h2>
              <p className="text-gray-300 mb-2">4.1 If GSAI cancels a program before it begins, a full refund will be issued.</p>
              <p className="text-gray-300 mb-2">4.2 If GSAI cancels a program after it has begun, a prorated refund will be issued based on the remaining classes.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Payment Plans</h2>
              <p className="text-gray-300 mb-2">5.1 For students on payment plans, cancellation of enrollment will not absolve the responsibility to complete all payments unless otherwise specified in writing.</p>
              <p className="text-gray-300 mb-2">5.2 Early termination fees may apply as outlined in the payment plan agreement.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Refund Process</h2>
              <p className="text-gray-300 mb-2">6.1 All refund requests must be submitted in writing to ghatakgsai@gmail.com.</p>
              <p className="text-gray-300 mb-2">6.2 Refunds will be processed within 14 business days using the original payment method.</p>
              <p className="text-gray-300 mb-2">6.3 Processing fees charged by payment gateways will not be refunded.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-gray-300 mb-2">For questions or concerns regarding refunds, please contact:</p>
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

export default RefundPolicy;
