import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BestSuggest</h3>
            <p className="text-gray-600">
              Your trusted advisor for hosting, VPN, and tools recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/hostinger-review"
                  className="text-gray-600 hover:text-primary"
                >
                  Hostinger Review
                </Link>
              </li>
              <li>
                <Link to="/gifts" className="text-gray-600 hover:text-primary">
                  Our Gifts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Tools Selection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=919253029002&text=Hello+I+Saw+bestsuggest"
                  className="text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +91 9253029002
                </a>
              </li>
              <li>
                <a
                  href="mailto:talk@bestsuggest.in"
                  className="text-gray-600 hover:text-primary"
                >
                  Email: talk@bestsuggest.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} BestSuggest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
