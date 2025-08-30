import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutFWG = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-primary to-accent blur-[200px] opacity-20 rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="block text-text-primary">About</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FWG International
            </span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Every Indian deserves to feel{" "}
            <span className="font-semibold text-primary">
              healthier, stronger & more confident
            </span>{" "}
            — no matter where in the world they live. 🌍
          </p>
        </motion.div>

        {/* Content Boxes */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "Award",
              color: "#008DD2",
              title: "16,000+ Success Stories",
              text: "After dominating the Indian fitness industry, FWG is now bringing the same world-class, science-backed transformation programs to Indians living abroad.",
            },
            {
              icon: "Globe",
              color: "#A8C944",
              title: "Indian Pricing, Global Reach",
              text: "Fitness coaching abroad can cost 3–5x more. FWG offers the same premium coaching at Indian pricing — saving you money while achieving life-changing results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 shadow-lg hover:shadow-xl transition"
            >
              <Icon name={item.icon} size={36} color={item.color} className="mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* How it Works */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
              <Icon name="PlayCircle" size={28} color="#EF7F1B" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-4">How It Works?</h3>
          <p className="text-lg text-text-secondary leading-relaxed">
            All programs are delivered{" "}
            <span className="font-semibold text-primary">online via Zoom</span>{" "}
            with 1-on-1 personalized guidance, weekly progress tracking, and
            customized diet & workout plans — designed exclusively for{" "}
            <span className="font-semibold text-accent">Indians abroad</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFWG;
