import { Check, Shield, ThumbsUp, Zap } from "lucide-react";

const features = [
  {
    icon: ThumbsUp,
    title: "Unbiased Recommendations",
    description: "We partner with all major providers to give you truly independent advice",
  },
  {
    icon: Zap,
    title: "Exclusive Offers",
    description: "Get access to special deals and discounts through our partnerships",
  },
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Benefit from our years of experience in the hosting and VPN industry",
  },
  {
    icon: Check,
    title: "Free Consultation",
    description: "Personal WhatsApp consultation at no cost to you",
  },
];

export const Features = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose BestSuggest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};