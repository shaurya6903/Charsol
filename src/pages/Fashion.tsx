import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { articles } from "@/data/articles";

const fashionArticles = articles.filter((a) => a.category === "Fashion");
const heroArticle = fashionArticles[1] || articles[8]; // Designer Shoes
const gridArticles = [fashionArticles[0], fashionArticles[2], fashionArticles[3]].filter(Boolean);

const Fashion = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Fashion &amp; Style</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Fashion &amp; Style</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4">
      {/* ===== HERO — text left, image right ===== */}
      <section className="grid lg:grid-cols-[2fr_3fr] gap-10 py-10 items-start">
        <div className="pt-4">
          <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
            {heroArticle.date}
          </span>
          <h3 className="text-2xl font-serif font-bold text-foreground leading-snug mt-3 mb-4">
            <Link to={`/article/${heroArticle.id}`} className="hover:text-accent transition-colors">
              {heroArticle.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground font-body italic leading-relaxed mb-5">
            {heroArticle.excerpt}
          </p>
          <Link
            to={`/article/${heroArticle.id}`}
            className="text-xs uppercase tracking-[0.15em] font-body font-bold text-foreground hover:text-accent transition-colors"
          >
            Read More
          </Link>
        </div>
        <Link to={`/article/${heroArticle.id}`} className="block group">
          <img
            src={heroArticle.image}
            alt={heroArticle.title}
            className="w-full aspect-[4/3] object-cover group-hover:opacity-90 transition-opacity"
          />
        </Link>
      </section>

      <div className="border-t border-border" />

      {/* ===== 3-COLUMN ARTICLE GRID ===== */}
      <section className="grid md:grid-cols-3 gap-8 py-10">
        {gridArticles.map((article) => (
          <article key={article.id} className="group">
            <Link to={`/article/${article.id}`} className="block overflow-hidden mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </Link>
            <div className="mb-2">
              <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
                {article.date}
              </span>
              <span className="text-[10px] mx-2 text-muted-foreground">|</span>
              <span className="text-[10px] uppercase tracking-[0.12em] font-body font-bold text-accent">
                Fashion &amp; Style
              </span>
            </div>
            <h4 className="text-base font-serif font-bold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors">
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </h4>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              {article.excerpt}
            </p>
          </article>
        ))}
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default Fashion;
