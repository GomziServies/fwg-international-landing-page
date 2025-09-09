import React from "react";
import { CheckCircle } from "lucide-react"; 
import { motion } from "framer-motion";

const stats = [
  { label: "Transformations Completed", value: "16,000+" },
  { label: "Weight Loss Journeys", value: "8,000+" },
  { label: "Clinical Illness Programs", value: "4,000+" },
  { label: "Prep Coaching Programs", value: "2,000+" },
  { label: "Weight Gain Transformations", value: "2,000+" },
  { label: "Corporate Events Conducted", value: "50+" },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Impact
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See how our fitness coaching program has transformed lives worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 shadow-cta flex items-start space-x-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white flex-shrink-0">
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">
                  {stat.value}
                </h3>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
