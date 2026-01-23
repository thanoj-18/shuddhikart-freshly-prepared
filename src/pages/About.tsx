import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Shield, Leaf, Users } from "lucide-react";
import categoryGhee from "@/assets/category-ghee.jpg";

const values = [
  {
    icon: Heart,
    title: "Made with Care",
    description: "Every product is prepared with the same love and attention we give to food in our own homes.",
  },
  {
    icon: Shield,
    title: "Trust Over Scale",
    description: "We choose to remain small so we can maintain the quality and authenticity our customers deserve.",
  },
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "No artificial preservatives, no shortcuts — just honest, traditional preparation methods.",
  },
  {
    icon: Users,
    title: "Family Values",
    description: "What we offer is what we would confidently serve in our own homes to our own families.",
  },
];

const About = () => {
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
              Our Commitment Is Simple:{" "}
              <span className="text-accent">Purity Over Scale</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  ShuddhiKart exists because truly pure, home-made food has become 
                  difficult to find.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In today's world of mass production and shortcuts, we chose a slower, 
                  more honest path. At ShuddhiKart, we prepare food and home essentials 
                  the way families traditionally have — in small batches, with care, 
                  and without rushing scale.
                </p>

                <p className="text-foreground font-semibold mb-6">
                  We do not aim to become a factory.<br />
                  We aim to remain trustworthy.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every product is prepared only when there is demand, using methods 
                  that respect tradition, freshness, and integrity. What we offer is 
                  what we would confidently serve in our own homes.
                </p>

                <p className="text-xl text-accent font-heading italic">
                  ShuddhiKart is not about trends.<br />
                  It is about trust that lasts.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={categoryGhee}
                  alt="Traditional ghee preparation"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
