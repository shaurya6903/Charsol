import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const SubscribePage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4">
        <section className="py-24 text-center max-w-xl mx-auto">
          <Zap className="text-primary mx-auto mb-6" size={48} />
          <span className="text-[10px] uppercase tracking-[0.2em] font-body font-bold text-destructive">
            Empowering Sustainable Mobility
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Charge<span className="text-primary">Sol</span>
          </h2>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-10">
            Subscribe to our newsletter and stay up to date with the latest ChargeSol news, 
            industry insights, and product updates.
          </p>

          {submitted ? (
            <div className="border border-border p-8">
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-sm text-muted-foreground font-body">You've been subscribed to the ChargeSol newsletter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 text-sm font-body bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          )}
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default SubscribePage;
