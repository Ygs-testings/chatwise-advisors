import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 animate-fade-down">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1.5 mb-6">
          <span className="text-primary text-sm font-medium">
            Free Expert Advice
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
          Get Personalized Recommendations for Hosting, VPN & Tools
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We help you make the right choice with unbiased advice and exclusive
          offers, customized to your needs.
        </p>
        <Button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=919253029002&text=Hello+I+Saw+bestsuggest",
              "_blank"
            )
          }
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg flex items-center gap-2 mx-auto"
        >
          <MessageCircle size={24} />
          Start Free Consultation
        </Button>
      </div>
    </section>
  );
};
