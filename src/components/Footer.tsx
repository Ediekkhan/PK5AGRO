import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/pk5-agro-allied", color: "hover:text-[#0A66C2]" },
    { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/#", color: "hover:text-[#1877F2]" },
    { icon: Twitter, label: "X (Twitter)", url: "https://twitter.com/#", color: "hover:text-[#000000]" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/#", color: "hover:text-[#E4405F]" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              PK5<span className="text-gold"> Agro-Allied</span>
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Cultivating excellence across the agricultural landscape since 2021.
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
              {["Palm Kernel", "Cocoa", "Plantain"].map((item) => (
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
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">
              Contact Us
            </h4>

            <div className="flex flex-col gap-3">

              {/* Address → Google Maps */}
              <a
                href="https://www.google.com/maps?q=5901%20Peachtree%20Dunwoody%20Road,%20Suite%20A310,%20Atlanta,%20GA%2030328,%20USA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground">
                  Head Office: 5901 Peachtree Dunwoody Road, Suite A310, Atlanta, GA 30328, USA
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=2%2F5%2C+Nza+Street%2C+Independence+Layout+Enugu%2C+Enugu+State%2C+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground">
                  2/5, Nza Street, Independence Layout Enugu, Enugu State, Nigeria
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+14044365533"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground">
                  +1 (404) 436-5533
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:Info@pk5agroallied.com"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground">
                  Info@pk5agroallied.com
                </span>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* <div className="flex gap-6">
            <span className="font-body text-xs text-primary-foreground/40">NAFDAC Certified</span>
            <span className="font-body text-xs text-primary-foreground/40">SON Approved</span>
            <span className="font-body text-xs text-primary-foreground/40">Export Licensed</span>
          </div> */}

          {/* Social Media Links */}
          <div className=" border-primary-foreground/10">
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, url, color }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition-colors ${color}`}
                  title={label}
                >
                  <Icon className="w-5 h-5 text-primary-foreground/60 hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          <p className="font-body text-xs text-primary-foreground/40">
            ©{new Date().getFullYear()} PK5 Agro-Allied. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;