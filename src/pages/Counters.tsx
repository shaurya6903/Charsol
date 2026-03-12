import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Waves, MessageCircle, User, Trophy, Mic } from "lucide-react";

const horizontalBars = [
  { label: "Blogs", pct: 75 },
  { label: "Lifehack", pct: 80 },
  { label: "Lifestyle", pct: 95 },
];

const roundSkills = [
  { label: "Fashion", pct: 85 },
  { label: "Health & Beauty", pct: 70 },
  { label: "Music & Art", pct: 90 },
  { label: "Lifehack", pct: 65 },
];

const verticalSkills = [
  { label: "Music & Art", pct: 88 },
  { label: "Lifehack", pct: 68 },
  { label: "Fashion", pct: 84 },
  { label: "Lifestyle", pct: 75 },
  { label: "Innovation", pct: 77 },
];

const topIcons = [
  { Icon: Waves, label: "Music & Art" },
  { Icon: MessageCircle, label: "Lifehack" },
  { Icon: User, label: "Fashion" },
  { Icon: Trophy, label: "Lifestyle" },
];

const sideIcons = [
  { Icon: Waves, label: "Lifestyle" },
  { Icon: Trophy, label: "Fashion" },
  { Icon: MessageCircle, label: "Lifehack" },
  { Icon: Mic, label: "Music & Art" },
];

const SemiCircle = ({ pct }: { pct: number }) => {
  const radius = 70;
  const circumference = Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <svg width="160" height="90" viewBox="0 0 160 90" className="mx-auto">
      <path
        d="M 10 85 A 70 70 0 0 1 150 85"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="6"
      />
      <path
        d="M 10 85 A 70 70 0 0 1 150 85"
        fill="none"
        stroke="hsl(var(--foreground))"
        strokeWidth="6"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="80"
        y="75"
        textAnchor="middle"
        className="text-lg font-serif font-bold"
        fill="hsl(var(--foreground))"
      >
        {pct}%
      </text>
    </svg>
  );
};

const Counters = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Counters &amp; Progress Bars</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Counters &amp; Progress Bars</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4">
      {/* ===== HORIZONTAL PROGRESS BARS ===== */}
      <section className="py-10 border-b border-border">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Horizontal Progress Bar</h3>
        <div className="space-y-5 max-w-3xl">
          {horizontalBars.map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between mb-1.5">
                <span className="text-[11px] uppercase tracking-[0.15em] font-body font-bold text-foreground">
                  {bar.label}
                </span>
                <span className="text-[11px] font-body text-muted-foreground">{bar.pct}%</span>
              </div>
              <div className="h-1.5 bg-muted overflow-hidden">
                <div className="h-full bg-foreground" style={{ width: `${bar.pct}%` }} />
              </div>
            </div>
          ))}
          <p className="text-sm text-muted-foreground font-body leading-relaxed py-2">
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </p>
          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-[11px] uppercase tracking-[0.15em] font-body font-bold text-foreground">
                Health &amp; Beauty
              </span>
              <span className="text-[11px] font-body text-muted-foreground">70%</span>
            </div>
            <div className="h-1.5 bg-muted overflow-hidden">
              <div className="h-full bg-foreground" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROUND SKILLS ===== */}
      <section className="py-10 border-b border-border">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Round Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {roundSkills.map((skill) => (
            <div key={skill.label} className="text-center">
              <SemiCircle pct={skill.pct} />
              <h4 className="text-[11px] uppercase tracking-[0.15em] font-body font-bold text-foreground mt-4 mb-2">
                {skill.label}
              </h4>
              <p className="text-xs text-muted-foreground font-body">
                Lorem ipsum amet, consectetur adipiscing phasellus.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== VERTICAL SKILLS ===== */}
      <section className="py-10 border-b border-border">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Vertical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {verticalSkills.map((skill) => (
            <div key={skill.label}>
              <div className="relative h-40 bg-muted mb-3">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-foreground"
                  style={{ height: `${skill.pct}%` }}
                />
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.12em] font-body font-bold text-foreground">
                  {skill.label}
                </span>
                <span className="text-[10px] font-body text-muted-foreground">{skill.pct}%</span>
              </div>
              <p className="text-xs text-muted-foreground font-body">
                Lorem ipsum amet, consectetur adipiscing phasellus.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TOP ICONS ===== */}
      <section className="py-10 border-b border-border">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Top Icons</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {topIcons.map(({ Icon, label }) => (
            <div key={label} className="text-center">
              <Icon size={28} className="mx-auto text-foreground mb-3" />
              <div className="text-3xl font-serif font-bold text-foreground mb-1">0</div>
              <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SIDE ICONS ===== */}
      <section className="py-10">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Side Icons</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sideIcons.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon size={24} className="text-foreground flex-shrink-0" />
              <div>
                <div className="text-2xl font-serif font-bold text-foreground">0</div>
                <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-foreground">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Counters;
