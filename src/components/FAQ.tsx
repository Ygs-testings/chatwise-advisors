import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does your service work?",
    answer: "We provide personalized recommendations through WhatsApp chat. Simply reach out to us with your requirements, and our experts will analyze your needs to suggest the best hosting, VPN, or tools along with exclusive offers.",
  },
  {
    question: "Is your advice really free?",
    answer: "Yes, our consultation service is completely free! We earn through commissions from our partners when you make a purchase through our recommendations, but this doesn't affect our advice or the price you pay.",
  },
  {
    question: "How do you ensure unbiased recommendations?",
    answer: "We partner with almost all major providers in the industry, which allows us to recommend truly the best solution for your needs rather than being limited to specific vendors.",
  },
  {
    question: "What kind of exclusive offers do you provide?",
    answer: "Through our partnerships, we can offer special discounts, extended trial periods, and additional features that aren't available through direct purchases.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};