import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import chargesolLogo from "@/assets/chargesol-logo.png";

const solutionLinks = [
  { label: "ChargeSol for CPOs", path: "/solutions/cpos" },
  { label: "ChargeSol for OEMs", path: "/solutions/oems" },
  { label: "ChargeSol for Fleet Operators", path: "/solutions/fleet" },
  { label: "Other Businesses", path: "/solutions/other" },
];
const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Career", path: "/career" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Refund Policy", path: "/refund-policy" },
];
const otherLinks = [
  { label: "News & Articles", path: "/news" },
  { label: "Subscribe", path: "/subscribe" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & tagline */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <img src={chargesolLogo} alt="ChargeSol" className="h-12 w-auto" style={{ filter: "none" }} />
          </Link>
          <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
            Empowering sustainable mobility through innovative EV charging solutions.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-sm font-body font-bold uppercase tracking-wider text-foreground mb-4">Solutions</h4>
          <ul className="space-y-1.5">
            {solutionLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm font-body italic text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-body font-bold uppercase tracking-wider text-foreground mb-4">Company</h4>
          <ul className="space-y-1.5">
            {companyLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm font-body italic text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Other */}
        <div>
          <h4 className="text-sm font-body font-bold uppercase tracking-wider text-foreground mb-4">Other</h4>
          <ul className="space-y-1.5">
            {otherLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm font-body italic text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Newsletter bar */}
    <div className="border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-body font-bold text-foreground">Subscribe To The Newsletter</h4>
            <p className="text-xs text-muted-foreground font-body">Stay up to date with the latest ChargeSol news</p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required className="px-4 py-2 text-sm font-body bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring w-60" />
            <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-wider font-body font-bold hover:opacity-90 transition-opacity">Subscribe</button>
          </form>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-body">
          © 2023. All Rights Reserved Chargesol Technology Private Limited
        </p>
        <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground font-body transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
