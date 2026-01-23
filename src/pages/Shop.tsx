import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import categorySweets from "@/assets/category-sweets.jpg";
import categorySnacks from "@/assets/category-snacks.jpg";
import categoryOils from "@/assets/category-oils.jpg";
import categoryGhee from "@/assets/category-ghee.jpg";
import heroImage from "@/assets/hero-lifestyle.jpg";

const categories = [
  {
    name: "ShuddhiKart Sweets",
    description: "Traditional festive and everyday sweets prepared fresh in small quantities.",
    image: categorySweets,
    products: [
      { name: "Besan Laddu", benefit: "Pure ghee, traditional recipe", badge: "Limited Batch" },
      { name: "Kaju Katli", benefit: "Premium cashews, handcrafted", badge: "Freshly Prepared" },
      { name: "Mysore Pak", benefit: "Authentic Karnataka style", badge: "Limited Batch" },
      { name: "Coconut Barfi", benefit: "Fresh coconut, no preservatives", badge: "Freshly Prepared" },
    ],
  },
  {
    name: "ShuddhiKart Dry Snacks",
    description: "Simple, honest snacks for daily consumption — not factory-fried.",
    image: categorySnacks,
    products: [
      { name: "Ribbon Pakoda", benefit: "Rice flour, hand-pressed", badge: "Limited Batch" },
      { name: "Murukku", benefit: "Traditional spiral crunch", badge: "Freshly Prepared" },
      { name: "Chivda Mix", benefit: "Light, flavorful blend", badge: "Limited Batch" },
      { name: "Masala Peanuts", benefit: "Spiced to perfection", badge: "Freshly Prepared" },
    ],
  },
  {
    name: "ShuddhiKart Pure Oils",
    description: "Home-made hair and wellness oils prepared using traditional techniques.",
    image: categoryOils,
    products: [
      { name: "Cold-Pressed Coconut Oil", benefit: "Pure extraction, no heat", badge: "Small Batch" },
      { name: "Sesame Oil", benefit: "Traditional wood-pressed", badge: "Limited Availability" },
      { name: "Groundnut Oil", benefit: "Pure and unrefined", badge: "Small Batch" },
    ],
  },
  {
    name: "ShuddhiKart Desi Ghee",
    description: "Slow-prepared ghee, available only during select batches.",
    image: categoryGhee,
    products: [
      { name: "Pure Cow Ghee", benefit: "Bilona method, A2 milk", badge: "Premium" },
      { name: "Buffalo Ghee", benefit: "Rich aroma, traditional prep", badge: "Limited Batch" },
    ],
  },
  {
    name: "ShuddhiKart Home Meals",
    description: "Rice and curries prepared on specific days, available via advance booking.",
    image: heroImage,
    products: [
      { name: "Hyderabadi Biryani", benefit: "Dum-cooked, authentic spices", badge: "Pre-Order Only" },
      { name: "Dal Tadka + Rice", benefit: "Comfort food, home-style", badge: "Weekend Special" },
    ],
  },
];

const Shop = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-narrow mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Shop All Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All products at ShuddhiKart are available on a pre-order basis and prepared 
              in limited batches. Availability depends on the current batch window.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pre-Order Note */}
      <section className="bg-festive border-y border-border">
        <div className="container-narrow mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent flex-shrink-0" />
            <p className="text-sm text-foreground">
              <strong>Pre-Order Note:</strong> Orders are accepted only during open batch windows. 
              Preparation and delivery timelines are clearly shared before confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8">
                  <div className="w-full md:w-48 h-48 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Leaf className="h-4 w-4" />
                      <span>No artificial preservatives</span>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: productIndex * 0.05 }}
                      className="bg-card border border-border rounded-xl p-5 card-hover"
                    >
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {product.badge}
                      </Badge>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.benefit}
                      </p>
                      <Button size="sm" className="w-full">
                        Pre-Order Now
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary py-12">
        <div className="container-narrow mx-auto px-4 md:px-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-muted-foreground mb-6">
            We accept custom orders for special occasions and bulk requirements.
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
