import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const RefundPolicy = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animationType: "fade",
  });

  return (
    <>
      <Helmet>
        <title>Refund Policy | Ghatak Sports Academy India™</title>
        <meta
          name="description"
          content="Refund policy for Ghatak Sports Academy India™. Learn about our terms and conditions for refunds."
        />
        <link rel="canonical" href="https://ghatakgsai.netlify.app/refund-policy" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <NavBar />

        <main className="gsai-container py-16">
          <div ref={sectionRef} className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">Refund Policy</h1>

            <ScrollArea className="h-[70vh] rounded-md border p-6 bg-black/30">
              <div className="space-y-8 text-left">
                {/* Introduction Section */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Introduction</h2>
                  <p className="mb-4">
                    At Ghatak Sports Academy India™ (GSAI), we are committed to providing high-quality services and products. If you are not completely satisfied with your purchase, this refund policy outlines the process for requesting a refund or exchange.
                  </p>
                </section>

                {/* Eligibility for Refund */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Eligibility for Refund</h2>
                  <p className="mb-4">
                    You may be eligible for a refund under the following circumstances:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>If you cancel your registration or membership within 7 days of the purchase date.</li>
                    <li>If you purchased a product that is defective or damaged.</li>
                    <li>If the service or program was not delivered as described.</li>
                  </ul>
                </section>

                {/* Refund Process */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Refund Process</h2>
                  <p className="mb-4">
                    To request a refund, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Contact our customer support team via email or phone within 7 days of your purchase.</li>
                    <li>Provide purchase details including your order number, product/service purchased, and the reason for your refund request.</li>
                    <li>Our team will review your request and issue the refund if it meets our refund criteria.</li>
                    <li>Refunds will be processed to the original payment method, and it may take up to 10 business days for the refund to reflect in your account.</li>
                  </ol>
                </section>

                {/* Non-Refundable Items */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Non-Refundable Items</h2>
                  <p className="mb-4">
                    The following items are not eligible for a refund:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Courses, memberships, or services that have already been used or completed.</li>
                    <li>Products or services that are explicitly marked as non-refundable at the time of purchase.</li>
                  </ul>
                </section>

                {/* Exchanges */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Exchanges</h2>
                  <p className="mb-4">
                    In certain cases, rather than issuing a refund, we may offer an exchange or store credit for a future purchase. This typically applies to defective products or services that fall under an exchange program.
                  </p>
                </section>

                {/* Changes to Refund Policy */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Changes to Our Refund Policy</h2>
                  <p className="mb-4">
                    We may update this refund policy from time to time. Any changes will be posted on this page, and the date of the last revision will be updated accordingly.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gsai-gold">Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions or concerns regarding our refund policy, please reach out to us:
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

export default RefundPolicy;
