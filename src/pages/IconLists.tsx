import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Heart, FolderOpen, LayoutList, Globe, Printer, MessageSquare, ChevronRight, Camera, Video, Mail, User, ShoppingCart, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const mainItems: { title: string; icon: LucideIcon; text: string }[] = [
  { title: "Fully Responsive", icon: Heart, text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero." },
  { title: "Free Plugins Included", icon: FolderOpen, text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero." },
  { title: "Pixel-Perfect Design", icon: LayoutList, text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero." },
  { title: "Extensive Documentation", icon: Globe, text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero." },
];

const shapeItems: { title: string; icon: LucideIcon; text: string }[] = [
  { title: "Pixel-Perfect Design", icon: LayoutList, text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod." },
  { title: "Free Plugins Included", icon: FolderOpen, text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod." },
  { title: "Extensive Documentation", icon: Printer, text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod." },
];

const listItems = ["Photo", "Video", "Message", "User", "Basket", "Chat"];
const listIcons: LucideIcon[] = [Camera, Video, Mail, User, ShoppingCart, MessageSquare];

const IconLists = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Icon Lists</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Icon Lists</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto divide-y divide-border">

        {/* Custom color icons */}
        <section className="pb-12">
          <h3 className="text-lg font-serif text-foreground mb-10">Apply a custom color as the color of icon background, icon border or color of icon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left: filled circles */}
            {mainItems.map(({ title, icon: Icon, text }) => (
              <div key={`fill-${title}`} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-foreground mb-1">{title}</h4>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
            {/* Right: outlined circles */}
            {mainItems.map(({ title, icon: Icon, text }) => (
              <div key={`outline-${title}`} className="flex gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-foreground mb-1">{title}</h4>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Different Shapes */}
        <section className="py-12">
          <h3 className="text-lg font-serif text-foreground mb-10">Different Shapes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Row 1: plain icons */}
            {shapeItems.map(({ title, icon: Icon, text }) => (
              <div key={`plain-${title}`} className="flex gap-3">
                <Icon size={18} className="text-muted-foreground flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="text-sm font-serif font-bold text-foreground mb-1">{title}</h4>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
            {/* Row 2: square outlined icons */}
            {shapeItems.map(({ title, icon: Icon, text }) => (
              <div key={`sq-${title}`} className="flex gap-3">
                <div className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={14} className="text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-foreground mb-1">{title}</h4>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Simple Icon Lists */}
        <section className="pt-12">
          <h3 className="text-lg font-serif text-foreground mb-8">Simple Icon Lists</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chevron list */}
            <ul className="space-y-2.5">
              {listItems.map((item) => (
                <li key={`chev-${item}`} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-accent" />
                  <span className="text-sm font-body text-accent">{item}</span>
                </li>
              ))}
            </ul>
            {/* Icon list */}
            <ul className="space-y-2.5">
              {listItems.map((item, i) => {
                const Icon = listIcons[i];
                return (
                  <li key={`icon-${item}`} className="flex items-center gap-2">
                    <Icon size={14} className="text-accent" />
                    <span className="text-sm font-body text-accent">{item}</span>
                  </li>
                );
              })}
            </ul>
            {/* Check list */}
            <ul className="space-y-2.5">
              {listItems.map((item) => (
                <li key={`check-${item}`} className="flex items-center gap-2">
                  <Check size={14} className="text-foreground" />
                  <span className="text-sm font-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default IconLists;
