import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Zap, Users, Globe, Shield, Target, Cpu, CreditCard, MonitorSmartphone, Wifi, FileText, Download, ExternalLink } from "lucide-react";
import aboutBanner from "@/assets/about-us-banner.png";

const features = [
  { icon: Cpu, label: "Energy Analytics" },
  { icon: Wifi, label: "Power of Integration" },
  { icon: CreditCard, label: "Payment Processing" },
  { icon: Users, label: "Multi-level User Management" },
  { icon: MonitorSmartphone, label: "Control & Monitor Remotely" },
];

const values = [
  { icon: Zap, title: "Innovation", desc: "Pushing boundaries in EV charging technology to deliver smarter, faster, and more reliable solutions." },
  { icon: Users, title: "Collaboration", desc: "Working together with partners, stakeholders, and communities to build a sustainable future." },
  { icon: Globe, title: "Sustainability", desc: "Committed to reducing carbon emissions and promoting clean energy adoption worldwide." },
  { icon: Shield, title: "Reliability", desc: "Building robust infrastructure and software you can count on, 24 hours a day, 7 days a week." },
];

const AboutUs = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Title banner */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">About Us</span>
        </nav>
        <img src={aboutBanner} alt="ChargeSOL's About Us — Scripting The Next Chapter Of India's Sustainable Journey" className="w-full max-w-3xl mx-auto" style={{ filter: "none" }} />
      </div>
    </div>

    <main className="container mx-auto px-4">
      {/* About */}
      <section className="py-16 grid lg:grid-cols-[3fr_2fr] gap-12">
        <div>
          <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-destructive">Who We Are</span>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-2 mb-6 leading-snug">
            ChargeSol — Scripting The Next Chapter Of India's Sustainable Journey
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            ChargeSol is a B2B EV Charging Solution provider with an aim to contribute maximum in the adoption 
            of Electric Vehicles in India.
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Our core offerings include Charging As a Service, EPC, O&M (EV Charging Infra), 
            Charging Management Software, ensuring a seamless EV operating experience.
          </p>
        </div>
        <div className="border border-border p-6">
          <h4 className="text-sm font-body font-bold uppercase tracking-wider text-foreground mb-4">Charging Stations</h4>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-sm font-body text-foreground font-semibold">ChargeSol Charging Station</span>
              <span className="text-sm font-body text-muted-foreground">Noida</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-sm font-body text-foreground font-semibold">ChargeSol Charging Station</span>
              <span className="text-sm font-body text-muted-foreground">JK Lakshmi Cement, Udaipur</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-body text-foreground font-semibold">ChargeSol Charging Station</span>
              <span className="text-sm font-body text-muted-foreground">Amazon, Hyderabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Aim */}
      <section className="py-10 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-primary" size={28} />
              <h3 className="text-xl font-serif font-bold text-foreground">Our Aim</h3>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
              At ChargeSol we aim to make roaming and interoperability a reality in India by building the backend 
              operating system, which will also accelerate the transition to Electric vehicles across the country, 
              fulfilling a low-carbon future.
            </p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Our Big Audacious Goal (B.A.G) is to be the largest community of the EV Industry. 
              We will be the go-to-marketplace for all the key stakeholders in this system.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">Mission</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Our mission is to enable 5 million EV owners to travel hassle-free with a charging network 
              of 100,000 chargers on a single app around the country by providing a seamless charging 
              experience across the networks of multiple CPOs.
            </p>
          </div>
        </div>
      </section>

      {/* App Flow: Discover > Access > Pay */}
      <section className="py-10 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-foreground mb-2">
          How It Works
        </h2>
        <div className="w-full h-[3px] bg-destructive mb-10" />
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="border border-border p-8">
            <span className="text-4xl font-serif font-bold text-primary">1</span>
            <h4 className="text-lg font-serif font-bold text-foreground mt-3 mb-2">Discover</h4>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Find nearby charging stations on our app with real-time availability and pricing information.
            </p>
          </div>
          <div className="border border-border p-8">
            <span className="text-4xl font-serif font-bold text-primary">2</span>
            <h4 className="text-lg font-serif font-bold text-foreground mt-3 mb-2">Access</h4>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Book your slot and access the charger seamlessly through the ChargeSol app.
            </p>
          </div>
          <div className="border border-border p-8">
            <span className="text-4xl font-serif font-bold text-primary">3</span>
            <h4 className="text-lg font-serif font-bold text-foreground mt-3 mb-2">Pay</h4>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Pay securely via wallet, card, or net banking with transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-foreground mb-2">
          Platform Features
        </h2>
        <div className="w-full h-[3px] bg-destructive mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((f) => (
            <div key={f.label} className="text-center border border-border p-6">
              <f.icon className="text-primary mx-auto mb-3" size={28} />
              <p className="text-xs font-body font-bold text-foreground uppercase tracking-wider">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-10 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-foreground mb-2">Our Values</h2>
        <div className="w-full h-[3px] bg-destructive mb-10" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="border border-border p-6">
              <v.icon className="text-primary mb-3" size={28} />
              <h4 className="text-base font-serif font-bold text-foreground mb-2">{v.title}</h4>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brochure */}
      <section className="py-10 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-foreground mb-2">
          Our Brochure
        </h2>
        <div className="w-full h-[3px] bg-destructive mb-10" />
        <div className="border border-border bg-card">
          <object
            data="/brochure.pdf"
            type="application/pdf"
            className="w-full"
            style={{ height: "80vh", minHeight: "600px" }}
          >
            <div className="p-10 md:p-16 text-center">
              <FileText className="mx-auto text-primary mb-6" size={64} />
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                ChargeSol Company Brochure
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-md mx-auto mb-8">
                Your browser doesn't support inline PDF viewing. Please download or open in a new tab.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/brochure.pdf"
                  download="ChargeSol-Brochure.pdf"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity"
                >
                  <Download size={16} />
                  Download Brochure
                </a>
                <a
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground text-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:bg-foreground hover:text-background transition-colors"
                >
                  <ExternalLink size={16} />
                  Open in New Tab
                </a>
              </div>
            </div>
          </object>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-border">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Join the ChargeSol Revolution
        </h2>
        <p className="text-sm text-muted-foreground font-body max-w-lg mx-auto mb-8">
          Gain a competitive advantage by joining the world's largest eRoaming network.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity"
        >
          Get Started Today
        </Link>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default AboutUs;
