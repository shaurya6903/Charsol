import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Code, Plus } from "lucide-react";

const codeBlocks = [
  { icon: "</>", label: "Custom HTML" },
  { icon: "CSS", label: "Custom CSS" },
  { icon: "JS", label: "Custom JS" },
];

const CustomCode = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Custom HTML, CSS, JS</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Custom HTML, CSS, JS</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4 py-10">
      {/* Description */}
      <p className="text-center text-sm font-body text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
        Custom HTML, CSS and JS are powerful instruments for experienced developers, who'd like to add their own code, styles or scripts directly to the certain page.
      </p>

      {/* Code blocks */}
      <div className="max-w-xl mx-auto space-y-6">
        {codeBlocks.map((block) => (
          <div key={block.label} className="border border-border overflow-hidden">
            {/* Section header */}
            <div className="bg-muted-foreground/60 text-background text-xs font-body px-3 py-1.5">
              Section
            </div>
            {/* 1/1 sub-bar */}
            <div className="bg-muted-foreground/20 text-foreground/60 text-[10px] font-body px-3 py-1">
              1/1
            </div>
            {/* Content area */}
            <div className="p-8 flex items-center justify-center border-2 border-dashed border-border m-2">
              <span className="text-sm text-muted-foreground font-body flex items-center gap-2">
                <span className="font-mono text-muted-foreground/70">{block.icon}</span>
                {block.label}
              </span>
            </div>
            {/* Plus button */}
            <div className="flex justify-center py-2 border-t border-border">
              <Plus size={16} className="text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default CustomCode;
