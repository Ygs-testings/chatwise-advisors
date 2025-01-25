import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Make the Right Choice?
        </h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          Get personalized recommendations and exclusive offers today. Our
          experts are ready to help you make the best decision.
        </p>
        <Button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=919253029002&text=Hello+I+Saw+bestsuggest",
              "_blank"
            )
          }
          className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg flex items-center gap-2 mx-auto"
        >
          <MessageCircle size={24} />
          Start Free Consultation
        </Button>
      </div>
    </section>
  );
};
