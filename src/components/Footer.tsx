import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              PK5<span className="text-gold"> Agro</span>
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Cultivating excellence across Nigeria's agricultural landscape since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About Us", "Products", "Sustainability", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                  className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Products</h4>
            <div className="flex flex-col gap-2">
              {["Palm Kernel", "Cocoa", "plantains"].map((item) => (
                <Link
                  key={item}
                  to="/products"
                  className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">
                  Apt. B Imanium Estate, Nathaniel Akpan Street, Off Ekpri Nsukara. Uyo. Akwa Ibom State.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">
                  +2348026133205
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">
                  info@agroallied.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2025 PK5 Agro Allied. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="font-body text-xs text-primary-foreground/40">NAFDAC Certified</span>
            <span className="font-body text-xs text-primary-foreground/40">SON Approved</span>
            <span className="font-body text-xs text-primary-foreground/40">Export Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
