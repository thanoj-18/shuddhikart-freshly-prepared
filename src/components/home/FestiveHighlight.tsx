import { motion } from "framer-motion";
import { Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import festiveBanner from "@/assets/festive-banner.jpg";

export function FestiveHighlight() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={festiveBanner}
          alt="Festive gift box"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative container-narrow mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6">
            <Gift className="h-4 w-4" />
            <span className="text-sm font-medium">Limited Edition</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Festive Gift Boxes — <br />
            <span className="text-gold">Thoughtfully Curated</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-xl">
            Celebrate festivals with thoughtfully curated gift boxes made using 
            traditional recipes and clean ingredients. Each box is prepared in 
            limited quantities and available only during festive batches.
          </p>

          <div className="flex items-center gap-2 text-gold mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              Festival batches are prepared in limited numbers. Pre-booking recommended.
            </span>
          </div>

          <Button variant="gold" size="lg" asChild>
            <Link to="/festive">Explore Festive Boxes</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
