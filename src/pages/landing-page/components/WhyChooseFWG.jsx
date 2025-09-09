import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
    {
        id: 1,
        text: "16,000+ Proven Transformations - Trusted across India, now serving Indians worldwide.",
    },
    {
        id: 2,
        text: "Global Accessibility - Programs designed to fit your time zone & lifestyle abroad.",
    },
    {
        id: 3,
        text: "Pay in your currency - Save up to 70% compared to foreign coaching fees while getting the same world-class service.",
    },
    {
        id: 4,
        text: "1-on-1 Zoom Coaching - Personal guidance, not generic PDFs or app templates.",
    },
    {
        id: 5,
        text: "Specialized for Indians Abroad - Diet & workout plans customized for Indian food options available in your country.",
    },
    {
        id: 6,
        text: "Expert Clinical Nutrition & Fitness Coaches - Backed by science, experience, and results.",
    },
    {
        id: 7,
        text: "Result-Oriented & Affordable - High international quality, but at low Indian prices.",
    },
];

const WhyChooseFWG = () => {
    return (
        <section
            className="py-20 bg-gradient-to-br from-gray-50 to-white"
            id="why-fwg"
        >
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                        Why{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Choose Us FWG?
                        </span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        FAQs about our international fitness coaching program
                    </p>
                </motion.div>

                {/* Numbered List */}
                <div className="max-w-5xl mx-auto grid gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.id}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-all"
                        >
                            {/* Number */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center font-bold">
                                {reason.id}
                            </div>
                            {/* Text */}
                            <div className="flex-1 text-left">
                                <p className="text-base md:text-lg text-text-secondary font-medium leading-relaxed">
                                    {reason.text}
                                </p>
                            </div>
                            {/* Check Icon */}
                            <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFWG;
