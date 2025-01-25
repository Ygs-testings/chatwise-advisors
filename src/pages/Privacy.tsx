import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us when you use our consultation services, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Contact information (name, email, phone number)</li>
            <li>Business requirements and preferences</li>
            <li>Communication history</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide personalized recommendations</li>
            <li>Communicate with you about services</li>
            <li>Improve our services</li>
            <li>Send you relevant offers and updates</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at{" "}
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

export default Privacy;