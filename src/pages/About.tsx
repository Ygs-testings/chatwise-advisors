import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">About BestSuggest</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            BestSuggest is your trusted advisor for making informed decisions about hosting services, VPNs, and essential digital tools. We understand that choosing the right digital services can be overwhelming, which is why we're here to help.
          </p>
          <p className="text-lg mb-6">
            Our team of experts provides personalized recommendations based on your specific needs and requirements. We've partnered with leading service providers to ensure you get not just the best advice, but also exclusive deals and offers.
          </p>
          <p className="text-lg">
            What sets us apart is our commitment to providing unbiased, personalized advice through direct consultation. We're available on WhatsApp to discuss your needs and help you make the best choice for your digital journey.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;