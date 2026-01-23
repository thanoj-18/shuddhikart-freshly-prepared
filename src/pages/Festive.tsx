import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Gift, Building2, Package, MessageCircle, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import festiveBanner from "@/assets/festive-banner.jpg";

const offerings = [
  {
    icon: Gift,
    title: "Festival Gift Boxes",
    description: "Curated combinations of sweets, snacks, ghee, and essentials — ideal for family gifting. Each box is thoughtfully assembled with traditional recipes and premium ingredients.",
  },
  {
    icon: Building2,
    title: "Corporate & Bulk Gifting",
    description: "Thoughtful gifting solutions for teams, clients, and communities. We work with you to create custom assortments that reflect your brand values and appreciation.",
  },
  {
    icon: Package,
    title: "Custom Quantities",
    description: "Flexible packing based on your requirements. Whether you need 10 boxes or 100, we prepare each order with the same care and attention to quality.",
  },
];

const Festive = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={festiveBanner}
            alt="Festive gift boxes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
        </div>

        <div className="relative container-narrow mx-auto px-4 md:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6">
              <Gift className="h-4 w-4" />
              <span className="text-sm font-medium">Festive Season</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Festive Orders & <span className="text-gold">Gift Boxes</span>
            </h1>

            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Celebrate festivals with thoughtfully curated gift boxes made using 
              traditional recipes and clean ingredients. Perfect for family, friends, 
              and corporate gifting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Urgency Notice */}
      <section className="bg-festive border-y border-border">
        <div className="container-narrow mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-5 w-5 text-accent" />
            <p className="text-sm text-foreground font-medium">
              Festive batches are limited and prepared only during specific windows. 
              Pre-booking recommended.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intimate family gatherings to large corporate events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 card-hover"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <offering.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Order?
            </h2>
            <p className="text-muted-foreground mb-8">
              Share your requirements with us and we'll create a custom quote based on 
              your needs. Early orders are recommended for festive seasons.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I'm%20interested%20in%20festive%20gift%20boxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enquire on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20Please%20share%20the%20festive%20catalogue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Request Festival Catalogue
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Festive;
