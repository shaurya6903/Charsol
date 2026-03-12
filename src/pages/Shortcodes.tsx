import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import {
  ThumbsUp, User, MessageSquare, Globe, Scissors,
  Accessibility, MapPin, Settings, Camera, Gift,
  Anchor, Compass, Mail, Key, Send,
  Layers, Download, Pencil, Calendar, Plane,
} from "lucide-react";

const buttonRows = [
  // Row 1: basic variants
  [
    { filled: true, icon: false, rounded: false },
    { filled: false, icon: false, rounded: false },
    { filled: false, icon: false, rounded: false, light: true },
    { filled: false, icon: false, rounded: false, lightest: true },
  ],
  // Row 2: smaller
  [
    { filled: true, icon: false, rounded: false, small: true },
    { filled: false, icon: false, rounded: false, small: true },
    { filled: false, icon: true, rounded: false, small: true },
    { filled: false, icon: true, rounded: false, small: true, light: true },
  ],
  // Row 3: with icon
  [
    { filled: true, icon: true, rounded: false },
    { filled: false, icon: true, rounded: false },
    { filled: false, icon: false, rounded: false, light: true },
    { filled: false, icon: false, rounded: false, lightest: true },
  ],
  // Row 4: rounded
  [
    { filled: true, icon: false, rounded: true },
    { filled: false, icon: false, rounded: true },
    { filled: false, icon: false, rounded: true, light: true },
    { filled: false, icon: false, rounded: true, lightest: true },
  ],
  // Row 5: rounded with icon
  [
    { filled: false, icon: true, rounded: true },
    { filled: false, icon: true, rounded: true },
    { filled: false, icon: true, rounded: true, light: true },
    { filled: false, icon: true, rounded: true, lightest: true },
  ],
];

const lineIcons = [ThumbsUp, User, MessageSquare, Globe, Scissors];
const filledIcons1 = [Accessibility, MapPin, Settings, Camera, Gift];
const filledIcons2 = [Anchor, Compass, Mail, Key, Send];
const filledIcons3 = [Download, Pencil, Layers, Calendar, Plane];

const Shortcodes = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Buttons &amp; Icons</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Buttons &amp; Icons</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4">
      {/* ===== BUTTONS SECTION ===== */}
      <section className="py-10 border-b border-border">
        <h3 className="text-2xl font-serif text-foreground mb-10">
          Unlimited Button Styles. Any Size, Color, Font, Width, Height and Icons. Well Animated.
        </h3>

        <div className="space-y-6">
          {buttonRows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {row.map((btn, bi) => {
                const base = "inline-flex items-center justify-center gap-2 font-body text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-200 hover:opacity-80";
                const size = btn.small ? "px-4 py-2" : "px-5 py-2.5";
                const radius = btn.rounded ? "rounded-full" : "";
                let color: string;
                if (btn.filled) {
                  color = "bg-foreground text-background border border-foreground";
                } else if (btn.lightest) {
                  color = "bg-transparent text-muted-foreground border border-border";
                } else if (btn.light) {
                  color = "bg-transparent text-muted-foreground border border-muted-foreground";
                } else {
                  color = "bg-transparent text-foreground border border-foreground";
                }

                return (
                  <div key={bi} className="flex justify-center">
                    <button className={`${base} ${size} ${radius} ${color}`}>
                      {btn.icon && <Globe size={14} />}
                      Button
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* ===== ICONS SECTION ===== */}
      <section className="py-10">
        <h3 className="text-2xl font-serif text-foreground mb-10">
          2000 + Icons with flexible settings
        </h3>

        <div className="grid grid-cols-4 gap-y-8 gap-x-6 max-w-2xl">
          {[0, 1, 2, 3, 4].map((row) => {
            const LineIcon = lineIcons[row];
            const Fill1 = filledIcons1[row];
            const Fill2 = filledIcons2[row];
            const Fill3 = filledIcons3[row];

            return [
              <div key={`line-${row}`} className="flex justify-center">
                <LineIcon size={28} className="text-foreground" />
              </div>,
              <div key={`f1-${row}`} className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <Fill1 size={20} className="text-background" />
                </div>
              </div>,
              <div key={`f2-${row}`} className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <Fill2 size={20} className="text-background" />
                </div>
              </div>,
              <div key={`f3-${row}`} className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <Fill3 size={20} className="text-background" />
                </div>
              </div>,
            ];
          })}
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Shortcodes;
