import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Building2, Factory, Truck, Plug } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "ChargeSol for CPOs",
    desc: "Our comprehensive Charge Point Operator platform provides real-time monitoring, billing management, load balancing, and analytics. Manage your entire charging network from a single dashboard with automated maintenance alerts and customer support tools.",
  },
  {
    icon: Factory,
    title: "ChargeSol for OEMs",
    desc: "White-label EV charging solutions seamlessly integrated into your vehicle ecosystem. Offer branded charging experiences, in-vehicle navigation to stations, and connected services that enhance your customers' ownership experience.",
  },
  {
    icon: Truck,
    title: "ChargeSol for Fleet Operators",
    desc: "Optimize fleet electrification with intelligent charge scheduling, route planning, energy cost management, and driver analytics. Reduce operational costs while meeting sustainability goals with our fleet-specific tools.",
  },
  {
    icon: Plug,
    title: "Other Businesses",
    desc: "Custom EV charging solutions tailored for real estate developers, hospitality chains, shopping centers, and corporate campuses. Attract eco-conscious customers and tenants while generating additional revenue streams.",
  },
];

const SolutionsPage = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">Solutions</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Our Solutions</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-10">
        <div className="space-y-0">
          {solutions.map((sol, i) => (
            <article key={i} className={`py-10 ${i > 0 ? "border-t border-border" : ""}`}>
              <div className="grid lg:grid-cols-[auto_1fr] gap-8 max-w-3xl">
                <sol.icon className="text-primary shrink-0" size={40} />
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-border">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-sm text-muted-foreground font-body max-w-lg mx-auto mb-8">
          Contact us to discuss which solution best fits your business needs.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default SolutionsPage;
