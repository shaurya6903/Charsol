import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Zap, Battery, Plug, Building2, Truck, Factory } from "lucide-react";

const solutions = [
  { icon: Building2, title: "ChargeSol for CPOs", desc: "Comprehensive charge point management software for operators running public and commercial charging networks." },
  { icon: Factory, title: "ChargeSol for OEMs", desc: "White-label EV charging solutions integrated seamlessly into your vehicle ecosystem and brand experience." },
  { icon: Truck, title: "ChargeSol for Fleet Operators", desc: "Optimize fleet electrification with intelligent scheduling, monitoring and cost management tools." },
  { icon: Plug, title: "Other Businesses", desc: "Custom EV charging solutions for real estate, hospitality, retail and other industries embracing sustainable mobility." },
];

const stats = [
  { value: "1.18M+", label: "EV Sales in India" },
  { value: "148%", label: "Year-on-Year Growth" },
  { value: "5%", label: "Market Share" },
  { value: "24/7", label: "Support Available" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4">
        {/* ===== HERO ===== */}
        <section className="py-16 md:py-24 text-center border-b border-border">
          <span className="text-[10px] uppercase tracking-[0.2em] font-body font-bold text-destructive animate-fade-in">
            Empowering Sustainable Mobility
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-4 mb-6 leading-tight animate-slide-up">
            Powering the Future<br />of Electric Mobility
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:200ms] opacity-0">
            Gain a competitive advantage by joining the world's largest eRoaming network. 
            ChargeSol provides end-to-end EV charging solutions for businesses of every scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms] opacity-0">
            <Link
              to="/about"
              className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity hover:scale-105 transform duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-3 border-2 border-foreground text-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:bg-foreground hover:text-background transition-colors hover:scale-105 transform duration-200"
            >
              Our Solutions
            </Link>
          </div>
        </section>

        {/* ===== STATS TICKER ===== */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-b border-border">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center animate-scale-in opacity-0" style={{ animationDelay: `${i * 150}ms` }}>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.15em] font-body font-semibold text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ===== SOLUTIONS ===== */}
        <section className="py-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-foreground mb-2 animate-fade-in">
            Our Solutions
          </h2>
          <div className="w-full h-[3px] bg-destructive mb-10 animate-scale-in" />
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <article key={sol.title} className="group border border-border p-8 hover:border-primary transition-colors hover:scale-[1.02] transform duration-200 animate-slide-up opacity-0" style={{ animationDelay: `${i * 100}ms` }}>
                <sol.icon className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {sol.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== NEWS HIGHLIGHT ===== */}
        <section className="py-10 border-t border-border">
          <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-foreground mb-2 animate-fade-in">
            Latest News
          </h2>
          <div className="w-full h-[3px] bg-destructive mb-10 animate-scale-in" />
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-destructive">
                Industry News
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground leading-snug mt-2 mb-3">
                Electric Vehicle Sales Rise 148% to Race Past 1.18 Million
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                Electric vehicles made up 5% of total automobiles sales in the country in the year ended March 31 
                when EV sales crossed 1.18 million, surging 148% on year, powered by two- and three-wheelers.
              </p>
              <Link to="/news" className="text-xs uppercase tracking-[0.15em] font-body font-bold text-primary hover:text-accent transition-colors">
                Read More →
              </Link>
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-destructive">
                  In Energy
                </span>
                <h4 className="text-base font-serif font-bold text-foreground leading-snug mt-1">
                  Rising Price of LPG Accelerates EV Adoption
                </h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed mt-1 line-clamp-2">
                  As LPG prices continue to climb, more consumers and fleet operators are turning to electric alternatives for cost savings.
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-destructive">
                  In Infrastructure
                </span>
                <h4 className="text-base font-serif font-bold text-foreground leading-snug mt-1">
                  India's EV Charging Infrastructure Expands Rapidly
                </h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed mt-1 line-clamp-2">
                  Government initiatives and private investment drive the expansion of EV charging networks across major cities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-16 text-center border-t border-border">
          <Zap className="text-primary mx-auto mb-4 animate-scale-in" size={48} />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 animate-slide-up">
            Join the ChargeSol Revolution
          </h2>
          <p className="text-sm text-muted-foreground font-body max-w-lg mx-auto mb-8 animate-fade-in [animation-delay:200ms] opacity-0">
            Whether you're a CPO, OEM, fleet operator, or business owner — we have the right EV charging solution for you.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity hover:scale-105 transform duration-200 animate-fade-in [animation-delay:400ms] opacity-0 inline-block"
          >
            Get in Touch
          </Link>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
