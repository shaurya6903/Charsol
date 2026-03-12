import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const clients = ["Adobe", "Envato", "jQuery", "WordPress", "GitHub"];

const ClientLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center py-8">
    <span className="text-2xl font-serif font-bold text-muted-foreground/40 tracking-wide select-none">
      {name}
    </span>
  </div>
);

const Clients = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Clients</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Clients</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4">
      {/* Logo Row 1 */}
      <section className="border-b border-border py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clients.map((name) => (
            <ClientLogo key={name} name={name} />
          ))}
        </div>
      </section>

      {/* Carousel dots */}
      <div className="flex items-center justify-center gap-2 py-8">
        <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
        <div className="w-2.5 h-2.5 rounded-full bg-border" />
      </div>

      {/* Logo Row 2 */}
      <section className="border-t border-border py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clients.map((name) => (
            <ClientLogo key={`${name}-2`} name={name} />
          ))}
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Clients;
