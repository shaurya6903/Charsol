import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const sections = [
  { label: "Solid", style: "solid" },
  { label: "Dotted", style: "dotted" },
  { label: "Dashed", style: "dashed" },
  { label: "Double", style: "double" },
  { label: "Groove", style: "groove" },
  { label: "Ridge", style: "ridge" },
] as const;

const widths = ["w-1/3", "w-1/2", "w-4/5"];

const Dividers = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Dividers</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Dividers</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-14">
        {sections.map(({ label, style }) => (
          <section key={label}>
            <h3 className="text-xl font-serif text-foreground mb-6">{label}</h3>
            <div className="space-y-5">
              {widths.map((w) => (
                <hr
                  key={w}
                  className={`${w} border-0`}
                  style={{
                    borderTopStyle: style,
                    borderTopWidth: style === "double" ? "4px" : "2px",
                    borderTopColor: "hsl(var(--border))",
                  }}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Dividers;
