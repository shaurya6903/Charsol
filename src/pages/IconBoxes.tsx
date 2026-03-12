import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Printer, FolderOpen, LayoutList } from "lucide-react";

const items = [
  { title: "Fully Responsive", icon: Printer, text: "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sagittis semper tortor. Nam porta leo ut suscipit. Nam porta leo ut suscipit." },
  { title: "Free Plugins Included", icon: FolderOpen, text: "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sagittis semper tortor. Nam porta leo ut suscipit. Nam porta leo ut suscipit." },
  { title: "Pixel-Perfect Design", icon: LayoutList, text: "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sagittis semper tortor. Nam porta leo ut suscipit. Nam porta leo ut suscipit." },
];

const IconBoxes = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Icon Boxes</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Icon Boxes</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-0 divide-y divide-border">

        {/* Centred box with icon above the title */}
        <section className="pb-12">
          <h3 className="text-xl font-serif text-foreground mb-10">Centred box with icon above the title</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map(({ title, icon: Icon, text }) => (
              <div key={title} className="text-center">
                <Icon size={28} className="mx-auto mb-3 text-foreground" strokeWidth={1.5} />
                <h4 className="text-sm font-serif font-bold text-foreground mb-2">{title}</h4>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Box with icon at the left of */}
        <section className="py-12">
          <h3 className="text-xl font-serif text-foreground mb-10">Box with icon at the left of</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map(({ title, icon: Icon, text }) => (
              <div key={title} className="flex gap-3">
                <Icon size={22} className="text-foreground flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm font-serif font-bold text-foreground mb-2">{title}</h4>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Box with icon before title */}
        <section className="py-12">
          <h3 className="text-xl font-serif text-foreground mb-10">Box with icon before title</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map(({ title, text }, i) => (
              <div key={title} className={`p-6 ${i === 1 ? "bg-secondary" : ""}`}>
                <h4 className="text-sm font-serif font-bold text-foreground mb-2">{title}</h4>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Box with icon at the left top of */}
        <section className="pt-12">
          <h3 className="text-xl font-serif text-foreground mb-10">Box with icon at the left top of</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map(({ title, icon: Icon, text }) => (
              <div key={title}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} className="text-foreground" strokeWidth={1.5} />
                  <h4 className="text-sm font-serif font-bold text-foreground">{title}</h4>
                </div>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default IconBoxes;
