import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const embeds = [
  { label: "Youtube", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { label: "Vimeo", src: "https://player.vimeo.com/video/76979871" },
  { label: "Soundcloud", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/153891564&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true" },
];

const Embedded = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Embedded</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Embedded</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto divide-y divide-border">
        {embeds.map(({ label, src }) => (
          <section key={label} className="py-10 first:pt-0 last:pb-0">
            <h3 className="text-lg font-serif text-foreground text-center mb-6">{label}</h3>
            <div className="relative w-full" style={{ paddingBottom: label === "Soundcloud" ? "40%" : "56.25%" }}>
              <iframe
                src={src}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={label}
              />
            </div>
          </section>
        ))}
      </div>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Embedded;
