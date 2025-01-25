import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Services</h2>
          <p className="mb-6">
            BestSuggest provides consultation services for hosting, VPN, and digital tools selection. Our recommendations are based on our professional experience and partnerships with service providers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Affiliate Relationships</h2>
          <p className="mb-6">
            We may earn commissions through affiliate partnerships when you purchase services through our recommendations. This does not affect the cost to you or influence our recommendations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Gift Program</h2>
          <p className="mb-6">
            Our gift program is subject to availability and may vary based on the services purchased. Specific terms apply to each offer and will be communicated during consultation.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
          <p>
            For any questions about these terms, please contact us at{" "}
            <a href="mailto:talk@bestsuggest.in" className="text-primary hover:underline">
              talk@bestsuggest.in
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;