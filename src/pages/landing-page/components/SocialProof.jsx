import React from "react";
import { CheckCircle } from "lucide-react"; // or your AppIcon component

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
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Impact
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            See how our fitness coaching program has transformed lives worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 shadow-cta hover:shadow-testimonial transition-all duration-300 flex items-start space-x-4"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
