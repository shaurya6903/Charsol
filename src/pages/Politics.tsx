import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { articles } from "@/data/articles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const politicsArticles = articles.filter(
  (a) => a.category === "Politics" || a.subcategory === "Politics"
);

const heroArticle = politicsArticles[0] || articles[11];
const sideArticles = politicsArticles.slice(1, 3);
const featuredFeed = [articles[7], articles[14], articles[34], articles[28]];

const Politics = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Politics</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Politics</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4">
      {/* ===== 3-COLUMN HERO ===== */}
      <section className="grid lg:grid-cols-[2fr_1.5fr_1.2fr] gap-8 py-10">
        {/* Left — hero article with tall image */}
        <div>
          <Link to={`/article/${heroArticle.id}`} className="block group mb-4">
            <img
              src={heroArticle.image}
              alt={heroArticle.title}
              className="w-full aspect-[3/4] object-cover group-hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="mb-2">
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
              {heroArticle.date}
            </span>
            <span className="text-[10px] mx-2 text-muted-foreground">|</span>
            <Link to="#" className="text-[10px] uppercase tracking-[0.12em] font-body font-bold text-accent hover:text-foreground transition-colors">
              {heroArticle.category}
              {heroArticle.subcategory ? `, ${heroArticle.subcategory}` : ""}
            </Link>
            <span className="text-[10px] mx-2 text-muted-foreground">|</span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
              By {heroArticle.author}
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold text-foreground leading-snug mb-3">
            <Link to={`/article/${heroArticle.id}`} className="hover:text-accent transition-colors">
              {heroArticle.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            {heroArticle.excerpt}
          </p>
          <Link
            to={`/article/${heroArticle.id}`}
            className="text-xs uppercase tracking-[0.15em] font-body font-bold text-foreground hover:text-accent transition-colors"
          >
            Read More
          </Link>
        </div>

        {/* Center — 2 stacked text articles */}
        <div className="space-y-6">
          {sideArticles.map((article, i) => (
            <div key={article.id} className={i > 0 ? "pt-6 border-t border-border" : ""}>
              <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-accent">
                IN {article.category.toUpperCase()}
                {article.subcategory ? `, ${article.subcategory.toUpperCase()}` : ""}
              </span>
              <h4 className="text-base font-serif font-bold text-foreground leading-snug mt-1 mb-2">
                <Link to={`/article/${article.id}`} className="hover:text-accent transition-colors">
                  {article.title}
                </Link>
              </h4>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>

        {/* Right — Reputation widget */}
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.15em] font-body font-bold text-foreground mb-4">
            Reputation
          </h4>
          {[
            { name: "Thomas Williams", pct: 83 },
            { name: "Alice Bohn", pct: 66 },
          ].map((c) => (
            <div key={c.name} className="mb-5">
              <div className="flex justify-between text-sm font-body mb-2">
                <span className="text-foreground font-semibold uppercase tracking-wide text-[11px]">{c.name}</span>
                <span className="text-muted-foreground text-[11px]">{c.pct}%</span>
              </div>
              <div className="h-1.5 bg-muted overflow-hidden">
                <div className="h-full bg-accent" style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED NEWS ===== */}
      <section className="py-10 border-t border-border">
        <h3 className="text-3xl font-serif italic text-foreground mb-2">
          Featured News
        </h3>
        <div className="border-b border-border mb-8" />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
          {/* Left — empty/spacious area */}
          <div className="hidden lg:block" />

          {/* Right — stacked article feed */}
          <div className="space-y-6">
            {featuredFeed.map((article, i) => (
              <div key={article.id} className={i > 0 ? "pt-6 border-t border-border" : ""}>
                <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-accent">
                  IN {article.category.toUpperCase()}
                  {article.subcategory ? `, ${article.subcategory.toUpperCase()}` : ""}
                </span>
                <h4 className="text-base font-serif font-bold text-foreground leading-snug mt-1 mb-2">
                  <Link to={`/article/${article.id}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-end gap-1 pt-4 border-t border-border">
              <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
                <ChevronLeft size={16} />
              </button>
              <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Politics;
