import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-narrow mx-auto px-4 md:px-8 py-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl mb-4">
            Have questions or special requests?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            We prefer real conversations. Every order is confirmed personally — no automated processing.
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-narrow mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h4 className="font-heading text-xl font-bold mb-4">ShuddhiKart</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Pure, home-made essentials prepared the way families trust. Small batches, honest ingredients, traditional methods.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              <span>Serving Hyderabad Only</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 text-primary-foreground/90">Quick Links</h5>
            <ul className="space-y-2">
              {[
                { name: "Shop All", path: "/shop" },
                { name: "About Us", path: "/about" },
                { name: "How We Prepare", path: "/how-we-prepare" },
                { name: "Festive Orders", path: "/festive" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-semibold mb-4 text-primary-foreground/90">Categories</h5>
            <ul className="space-y-2">
              {[
                "Sweets",
                "Dry Snacks",
                "Pure Oils",
                "Desi Ghee",
                "Home Meals",
              ].map((category) => (
                <li key={category}>
                  <Link
                    to="/shop"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4 text-primary-foreground/90">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                <a href="tel:+919999999999" className="hover:text-primary-foreground">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@shuddhikart.com" className="hover:text-primary-foreground">
                  hello@shuddhikart.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 ShuddhiKart. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Payments Supported: UPI • Cards • Net Banking • COD (Select Orders)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
