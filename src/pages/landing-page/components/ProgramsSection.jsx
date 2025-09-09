import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const services = [
    {
        id: "weight-loss",
        title: "Weight Loss Programs",
        description: "Sustainable fat-loss with diet & lifestyle adjustments.",
        icon: "TrendingDown",
        color: "from-primary to-accent",
    },
    {
        id: "weight-gain",
        title: "Weight Gain Programs",
        description: "Build healthy muscle & confidence.",
        icon: "TrendingUp",
        color: "from-warning to-primary",
    },
    {
        id: "prep-coaching",
        title: "Prep Coaching",
        description: "Competition & athlete transformation programs.",
        icon: "Award",
        color: "from-primary to-accent",
    },
    {
        id: "clinical",
        title: "Clinical Illness Coaching",
        description: "Tailored plans for Diabetes, PCOD, Thyroid & more.",
        icon: "Heart",
        color: "from-warning to-primary",
    },
    {
        id: "corporate",
        title: "Corporate Wellness Programs",
        description:
            "Virtual fitness & nutrition workshops for companies worldwide.",
        icon: "Briefcase",
        color: "from-primary to-accent",
    },
];

const GlobalServices = () => {
    return (
        <section
            id="programs"
            className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="container mx-auto px-6 text-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Our{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Global Services
                        </span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        We specialize in tailored fitness & nutrition solutions
                        designed for individuals and organizations across the
                        globe.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-cta border border-border hover:shadow-lg transition-all duration-300 p-6 text-left w-full sm:w-[45%] lg:w-[30%]"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-r ${service.color}`}
                            >
                                <Icon
                                    name={service.icon}
                                    size={28}
                                    color="white"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalServices;
