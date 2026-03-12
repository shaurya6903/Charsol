import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

const SolutionCPOs = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <Link to="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
          <span>&gt;</span>
          <span className="text-foreground">ChargeSol for CPOs</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">ChargeSol for CPOs</h2>
      </div>
    </div>
    <main className="container mx-auto px-4">
      <section className="py-16 max-w-3xl">
        <Building2 className="text-primary mb-4" size={40} />
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Charge Point Operator Solutions</h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          Our comprehensive Charge Point Operator platform provides real-time monitoring, billing management, 
          load balancing, and analytics. Manage your entire charging network from a single dashboard with 
          automated maintenance alerts and customer support tools.
        </p>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          ChargeSol's CPO platform enables operators to maximize uptime, optimize energy consumption, 
          and deliver superior charging experiences to EV drivers across their network.
        </p>
        <h4 className="text-lg font-serif font-bold text-foreground mt-8 mb-4">Key Benefits</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-sm text-muted-foreground font-body">Real-time station monitoring and remote diagnostics</li>
          <li className="text-sm text-muted-foreground font-body">Dynamic pricing and billing management</li>
          <li className="text-sm text-muted-foreground font-body">Energy analytics and load balancing</li>
          <li className="text-sm text-muted-foreground font-body">White-label customer app integration</li>
          <li className="text-sm text-muted-foreground font-body">OCPP compliance and interoperability</li>
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

export default SolutionCPOs;
