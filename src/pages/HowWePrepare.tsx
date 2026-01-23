import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Beaker, Clock, ShoppingBag, Ban, CheckCircle } from "lucide-react";
import categoryOils from "@/assets/category-oils.jpg";

const sections = [
  {
    icon: Beaker,
    title: "Small-Batch Philosophy",
    content: "We prepare limited quantities to maintain quality, freshness, and control over ingredients. Each batch is carefully monitored from start to finish, ensuring consistency in taste and purity.",
  },
  {
    icon: Clock,
    title: "Fresh Preparation Cycle",
    content: "Products are made after orders are placed, not stored for long periods. This approach eliminates the need for preservatives and ensures you receive food at its freshest state.",
  },
  {
    icon: ShoppingBag,
    title: "Why Pre-Order",
    content: "Pre-ordering allows us to avoid preservatives, reduce waste, and focus on freshness. It also helps us plan our preparation schedule efficiently and maintain the highest quality standards.",
  },
  {
    icon: Ban,
    title: "Why We Avoid Mass Production",
    content: "Large-scale production often compromises taste, freshness, and transparency — values we refuse to dilute. We believe that true quality comes from attention to detail, not volume.",
  },
];

const commitments = [
  "Traditional recipes passed down through generations",
  "Hand-selected ingredients from trusted sources",
  "No artificial colors, flavors, or preservatives",
  "Small-batch preparation for quality control",
  "Transparent communication about preparation timelines",
  "Honest labeling with complete ingredient lists",
];

const HowWePrepare = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How We Prepare
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparency is at the heart of everything we do. Here's exactly how we 
              bring pure, honest food from our kitchen to your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Sections */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Image & Commitments */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-xl mb-10"
              >
                <img
                  src={categoryOils}
                  alt="Traditional oil preparation"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h4 className="font-heading font-semibold text-foreground mb-4">
                  Our Commitments
                </h4>
                <ul className="space-y-3">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {commitment}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-accent/5 py-12">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-xl md:text-2xl text-foreground italic"
          >
            "No exaggerated claims. No shortcuts. Just honest preparation."
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default HowWePrepare;
