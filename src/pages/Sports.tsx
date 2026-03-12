import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { articles } from "@/data/articles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sportsArticles = articles.filter((a) => a.category === "Sports");
const heroArticle = sportsArticles[1] || sportsArticles[0]; // Championship
const leftFeed = [sportsArticles[2] || articles[12], sportsArticles[4] || articles[25]];
const rightFeed = [articles[14], articles[6], articles[33], articles[23]];
const secondRow = [sportsArticles[0] || articles[0], sportsArticles[3] || articles[15]];

const Sports = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Sports</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Sports</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4">
      {/* ===== 3-COLUMN HERO ===== */}
      <section className="grid lg:grid-cols-[1fr_2fr_1.3fr] gap-8 py-10">
        {/* Left — 2 stacked text articles */}
        <div className="hidden lg:block space-y-6">
          {leftFeed.map((article, i) => (
            <div key={article.id} className={i > 0 ? "pt-6 border-t border-border" : ""}>
              <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-accent">
                IN {article.category.toUpperCase()}
              </span>
              <h4 className="text-sm font-serif font-bold text-foreground leading-snug mt-1 mb-2">
                <Link to={`/article/${article.id}`} className="hover:text-accent transition-colors">
                  {article.title}
                </Link>
              </h4>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          ))}
          <div className="flex items-center gap-1 pt-4 border-t border-border">
            <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
              <ChevronLeft size={14} />
            </button>
            <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Center — hero article */}
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
            </Link>
            <span className="text-[10px] mx-2 text-muted-foreground">|</span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
              By {heroArticle.author}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground leading-snug mb-3">
            <Link to={`/article/${heroArticle.id}`} className="hover:text-accent transition-colors">
              {heroArticle.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {heroArticle.excerpt}
          </p>
        </div>

        {/* Right — 4 stacked feed items */}
        <div className="space-y-5">
          {rightFeed.map((article, i) => (
            <div key={article.id} className={i > 0 ? "pt-5 border-t border-border" : ""}>
              <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-accent">
                IN {article.category.toUpperCase()}
                {article.subcategory ? `, ${article.subcategory.toUpperCase()}` : ""}
              </span>
              <h4 className="text-sm font-serif font-bold text-foreground leading-snug mt-1 mb-1.5">
                <Link to={`/article/${article.id}`} className="hover:text-accent transition-colors">
                  {article.title}
                </Link>
              </h4>
              <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECOND ROW ===== */}
      <section className="grid lg:grid-cols-[2fr_1.3fr] gap-8 py-8 border-t border-border">
        <div>
          <div className="mb-2">
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
              {secondRow[0].date}
            </span>
            <span className="text-[10px] mx-2 text-muted-foreground">|</span>
            <Link to="#" className="text-[10px] uppercase tracking-[0.12em] font-body font-bold text-accent hover:text-foreground transition-colors">
              {secondRow[0].category}
            </Link>
            <span className="text-[10px] mx-2 text-muted-foreground">|</span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
              By {secondRow[0].author}
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold text-foreground leading-snug mb-3">
            <Link to={`/article/${secondRow[0].id}`} className="hover:text-accent transition-colors">
              {secondRow[0].title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            {secondRow[0].excerpt}
          </p>
          <Link
            to={`/article/${secondRow[0].id}`}
            className="text-xs uppercase tracking-[0.15em] font-body font-bold text-foreground hover:text-accent transition-colors"
          >
            Read More
          </Link>
        </div>

        <div>
          <h4 className="text-base font-serif font-bold text-foreground leading-snug mb-2">
            <Link to={`/article/${secondRow[1].id}`} className="hover:text-accent transition-colors">
              {secondRow[1].title}
            </Link>
          </h4>
          <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">
            {secondRow[1].excerpt}
          </p>
          <div className="flex items-center justify-end gap-1 pt-4 border-t border-border">
            <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
              <ChevronLeft size={14} />
            </button>
            <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== FEATURED NEWS ===== */}
      <section className="py-10 border-t border-border">
        <h3 className="text-3xl font-serif italic text-foreground mb-2">
          Featured News
        </h3>
        <div className="border-b border-border mb-8" />
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Sports;
