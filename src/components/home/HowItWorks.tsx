import { motion } from "framer-motion";
import { ClipboardList, ChefHat, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "You Pre-Order",
    description: "Choose products or gift boxes during the open batch window.",
  },
  {
    icon: ChefHat,
    step: "2",
    title: "We Prepare in Small Batches",
    description: "Products are freshly prepared using traditional methods.",
  },
  {
    icon: Truck,
    step: "3",
    title: "Fresh Delivery to Your Home",
    description: "Delivered carefully within Hyderabad.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple, honest, and fresh — the ShuddhiKart way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              {/* Step Circle */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-background rounded-full border-2 border-accent shadow-lg mb-6">
                <item.icon className="h-10 w-10 text-accent" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </span>
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
