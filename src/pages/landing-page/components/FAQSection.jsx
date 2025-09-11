import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I attend sessions from abroad?",
      answer:
        "All sessions are conducted live on Zoom - join from any country.",
    },
    {
      question: "Can you plan meals according to my country's food options?",
      answer:
        "Yes! We customize meal plans based on your local availability.",
    },
    {
      question: "What if I have a medical condition?",
      answer:
        "We specialize in clinical illness programs - safe, doctor-aligned, and proven.",
    },
    {
      question: "Do you support different time zones?",
      answer:
        "Absolutely. We adjust session timings according to your time zone.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Plans start at around $25/month. Book your free consultation to get a personalized quote.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            FAQs about our international fitness coaching program
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-border shadow-cta hover:shadow-testimonial transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <Icon
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    color="#4A5568"
                    className="transition-transform duration-200"
                  />
                </button>

                {/* Smooth Expand */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-12">
                    <div className="border-t border-border pt-4">
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
