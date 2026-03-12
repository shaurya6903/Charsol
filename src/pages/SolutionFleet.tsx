import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Truck } from "lucide-react";

const SolutionFleet = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <Link to="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
          <span>&gt;</span>
          <span className="text-foreground">ChargeSol for Fleet Operators</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">ChargeSol for Fleet Operators</h2>
      </div>
    </div>
    <main className="container mx-auto px-4">
      <section className="py-16 max-w-3xl">
        <Truck className="text-primary mb-4" size={40} />
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Fleet Operator Solutions</h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          Optimize fleet electrification with intelligent charge scheduling, route planning, energy cost management, 
          and driver analytics. Reduce operational costs while meeting sustainability goals.
        </p>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          Whether you operate delivery vans, buses, or ride-hailing vehicles, ChargeSol's fleet platform 
          ensures maximum uptime with minimum charging costs through smart scheduling and energy optimization.
        </p>
        <h4 className="text-lg font-serif font-bold text-foreground mt-8 mb-4">Key Benefits</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-sm text-muted-foreground font-body">Intelligent charge scheduling and route planning</li>
          <li className="text-sm text-muted-foreground font-body">Fleet-wide energy cost optimization</li>
          <li className="text-sm text-muted-foreground font-body">Driver behavior analytics and reporting</li>
          <li className="text-sm text-muted-foreground font-body">Depot charging management</li>
          <li className="text-sm text-muted-foreground font-body">TCO analysis and sustainability reporting</li>
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

export default SolutionFleet;
