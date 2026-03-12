import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Factory } from "lucide-react";

const SolutionOEMs = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <Link to="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
          <span>&gt;</span>
          <span className="text-foreground">ChargeSol for OEMs</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">ChargeSol for OEMs</h2>
      </div>
    </div>
    <main className="container mx-auto px-4">
      <section className="py-16 max-w-3xl">
        <Factory className="text-primary mb-4" size={40} />
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6">OEM Charging Solutions</h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          White-label EV charging solutions seamlessly integrated into your vehicle ecosystem. Offer branded 
          charging experiences, in-vehicle navigation to stations, and connected services that enhance your 
          customers' ownership experience.
        </p>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
          Partner with ChargeSol to provide your EV buyers with a premium, hassle-free charging experience 
          that strengthens brand loyalty and differentiates your vehicles in the market.
        </p>
        <h4 className="text-lg font-serif font-bold text-foreground mt-8 mb-4">Key Benefits</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-sm text-muted-foreground font-body">White-label branded charging app</li>
          <li className="text-sm text-muted-foreground font-body">In-vehicle navigation to charging stations</li>
          <li className="text-sm text-muted-foreground font-body">Connected vehicle charging analytics</li>
          <li className="text-sm text-muted-foreground font-body">Seamless payment integration</li>
          <li className="text-sm text-muted-foreground font-body">Access to India's largest eRoaming network</li>
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

export default SolutionOEMs;
