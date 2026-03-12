import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">Contact</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Contact Us</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-16 grid lg:grid-cols-[2fr_1fr] gap-16">
        <div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required className="px-4 py-3 text-sm font-body bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              <input type="email" placeholder="Your Email" required className="px-4 py-3 text-sm font-body bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 text-sm font-body bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
            <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 text-sm font-body bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none" />
            <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>

        <aside className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-primary" size={20} />
              <h4 className="text-sm font-body font-bold uppercase tracking-wider text-foreground">Email</h4>
            </div>
            <a href="mailto:team@chargesol.in" className="text-sm font-body text-accent hover:text-primary transition-colors">
              team@chargesol.in
            </a>
            <br />
            <a href="mailto:founders@chargesol.in" className="text-sm font-body text-accent hover:text-primary transition-colors">
              founders@chargesol.in
            </a>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-primary" size={20} />
              <h4 className="text-sm font-body font-bold uppercase tracking-wider text-foreground">Address</h4>
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Chargesol Technology Private Limited<br />India
            </p>
          </div>
        </aside>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Contact;
