import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gift, Award } from "lucide-react";

const Gifts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Gift className="text-primary" size={32} />
              <h1 className="text-4xl font-bold">Exclusive Benefits</h1>
            </div>
            <div className="grid gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="text-primary" />
                  Unbeatable Savings
                </h2>
                <p className="text-gray-600">You will pay the least amount possible for your hosting needs.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Additional Free Domain</h2>
                <p className="text-gray-600">Get an extra free domain name with your purchase.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Premium WordPress Theme/Plugins</h2>
                <p className="text-gray-600">Access to premium WordPress themes and plugins.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Access on Demand</h2>
                <p className="text-gray-600">Get instant access to all your resources when you need them.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Additional Benefits</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Premium Tools (Private)</li>
                  <li>Exclusive Courses (Private)</li>
                  <li>CashBacks (Selected Hostings)</li>
                  <li>Gift Cards (Selected Hostings)</li>
                  <li>OTT Benefits (Private)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gifts;