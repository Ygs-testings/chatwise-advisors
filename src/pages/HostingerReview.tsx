import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Star, ShoppingCart } from "lucide-react";

const HostingerReview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
              <Star className="text-yellow-400" fill="currentColor" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Hostinger Hosting Review</h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                After thorough testing and analysis, we highly recommend Hostinger for its exceptional performance, reliability, and value for money. Here's why:
              </p>
              <ul className="space-y-4 mb-8">
                <li>Lightning-fast loading speeds with LiteSpeed servers</li>
                <li>99.9% uptime guarantee</li>
                <li>User-friendly control panel</li>
                <li>24/7 customer support</li>
                <li>Affordable pricing plans</li>
              </ul>
              <Button 
                onClick={() => window.open("https://hostinger.in/", "_blank")}
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 text-lg px-8 py-6"
              >
                <ShoppingCart size={24} />
                Get Best Deal Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HostingerReview;