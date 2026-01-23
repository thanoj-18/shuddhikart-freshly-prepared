import { motion } from "framer-motion";

const trustSignals = [
  {
    icon: "🫙",
    title: "Small-Batch Preparation",
    description: "Prepared in limited quantities, not mass produced",
  },
  {
    icon: "🌿",
    title: "No Artificial Preservatives",
    description: "Honest ingredients, traditional methods",
  },
  {
    icon: "🕒",
    title: "Pre-Order Freshness",
    description: "Made after you order, not stored for months",
  },
  {
    icon: "📍",
    title: "Hyderabad-Only Delivery",
    description: "Local preparation, local trust",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-card border-y border-border">
      <div className="container-narrow mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="text-4xl md:text-5xl block mb-3">{signal.icon}</span>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm md:text-base">
                {signal.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
