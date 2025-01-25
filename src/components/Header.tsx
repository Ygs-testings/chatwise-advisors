import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          BestSuggest
        </Link>
        <Button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=919253029002&text=Hello+I+Saw+bestsuggest",
              "_blank"
            )
          }
          className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">Chat with Us</span>
        </Button>
      </div>
    </header>
  );
};
