import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Plug } from "lucide-react";

const SolutionOther = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <Link to="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
          <span>&gt;</span>
          <span className="text-foreground">Other Businesses</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Other Businesses</h2>
      </div>
    </div>
    <main className="container mx-auto px-4">
      <section className="py-16 max-w-3xl">
        <Plug className="text-primary mb-4" size={40} />
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Custom EV Charging Solutions</h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          Custom EV charging solutions tailored for real estate developers, hospitality chains, shopping centers, 
          and corporate campuses. Attract eco-conscious customers and tenants while generating additional revenue streams.
        </p>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          Whether you're a hotel looking to offer charging amenities, a mall wanting to attract EV drivers, 
          or a corporate campus going green — ChargeSol designs and deploys the right solution for your business.
        </p>
        <h4 className="text-lg font-serif font-bold text-foreground mt-8 mb-4">Industries We Serve</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-sm text-muted-foreground font-body">Real Estate & Property Management</li>
          <li className="text-sm text-muted-foreground font-body">Hospitality & Hotels</li>
          <li className="text-sm text-muted-foreground font-body">Retail & Shopping Centers</li>
          <li className="text-sm text-muted-foreground font-body">Corporate Campuses</li>
          <li className="text-sm text-muted-foreground font-body">Parking Operators</li>
        </ul>
        <div className="mt-10">
          <Link to="/contact" className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity">
            Get Started
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <CookieBanner />
  </div>
);

export default SolutionOther;
