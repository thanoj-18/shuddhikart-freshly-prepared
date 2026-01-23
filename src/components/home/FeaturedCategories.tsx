import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import categorySweets from "@/assets/category-sweets.jpg";
import categorySnacks from "@/assets/category-snacks.jpg";
import categoryOils from "@/assets/category-oils.jpg";
import categoryGhee from "@/assets/category-ghee.jpg";

const categories = [
  {
    name: "ShuddhiKart Sweets",
    description: "Traditional recipes, festival-ready, prepared fresh",
    image: categorySweets,
  },
  {
    name: "ShuddhiKart Dry Snacks",
    description: "Everyday snacks with mindful preparation",
    image: categorySnacks,
  },
  {
    name: "ShuddhiKart Pure Oils",
    description: "Home-made oils crafted in small batches",
    image: categoryOils,
  },
  {
    name: "ShuddhiKart Desi Ghee",
    description: "Slow-prepared, limited availability",
    image: categoryGhee,
  },
];

export function FeaturedCategories() {
  return (
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
            Our Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every product is prepared in small batches using traditional methods
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/shop"
                className="group block bg-card rounded-xl overflow-hidden shadow-md card-hover border border-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    View Products
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
