import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { articles } from "@/data/articles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const foodArticles = articles.filter((a) => a.category === "Food");
const heroArticle = foodArticles[0]; // Chicken & Waffles
const leftArticles = foodArticles.slice(1, 3); // Vegetables, Creamed Corn
const dailyFeed = foodArticles.slice(3, 7);
const categories = ["Breakfast", "Dinner", "Snacks", "Desserts", "Baking", "City Kitchen"];

const Food = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page title bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <h2 className="text-3xl font-serif italic text-foreground">Food</h2>
          <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>›</span>
            <span className="text-foreground font-semibold">Food</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4">
        {/* ===== 2-COLUMN LAYOUT ===== */}
        <section className="grid lg:grid-cols-2 gap-10 py-10">
          {/* Left — hero + stacked articles */}
          <div>
            {/* Hero article with image */}
            <Link to={`/article/${heroArticle.id}`} className="block group mb-4">
              <img
                src={heroArticle.image}
                alt={heroArticle.title}
                className="w-full aspect-[4/3] object-cover group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <div className="mb-2">
              <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
                {heroArticle.date}
              </span>
              <span className="text-[10px] mx-2 text-muted-foreground">|</span>
              <Link to="#" className="text-[10px] uppercase tracking-[0.12em] font-body font-bold text-accent hover:text-foreground transition-colors">
                Food
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

            {/* Stacked articles below */}
            {leftArticles.map((article) => (
              <div key={article.id} className="mt-8 pt-8 border-t border-border">
                <div className="mb-2">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
                    {article.date}
                  </span>
                  <span className="text-[10px] mx-2 text-muted-foreground">|</span>
                  <Link to="#" className="text-[10px] uppercase tracking-[0.12em] font-body font-bold text-accent hover:text-foreground transition-colors">
                    Food
                  </Link>
                  <span className="text-[10px] mx-2 text-muted-foreground">|</span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
                    By {article.author}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground leading-snug mb-3">
                  <Link to={`/article/${article.id}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-xs uppercase tracking-[0.15em] font-body font-bold text-foreground hover:text-accent transition-colors"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Right — Newsletter + Categories + Daily Feed */}
          <div>
            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">
                Sign up for The Daily Chronicle Newsletter:
              </h3>
              <form
                className="flex gap-0 mb-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address *"
                  className="flex-1 px-4 py-2.5 border border-border bg-background text-sm font-body focus:outline-none focus:ring-1 focus:ring-ring"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider font-body hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </button>
              </form>

              {/* Category filter buttons */}
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-body font-semibold border border-border text-foreground hover:border-foreground transition-colors bg-background"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Feed */}
            <div>
              <h3 className="text-2xl font-serif italic text-foreground mb-5">
                Daily Feed
              </h3>
              <div className="space-y-5">
                {dailyFeed.map((article, i) => (
                  <div key={article.id} className={i > 0 ? "pt-5 border-t border-border" : ""}>
                    <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-accent">
                      IN A GOOD APPETITE
                      {article.subcategory ? `, ${article.subcategory.toUpperCase()}` : ""}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-foreground leading-snug mt-1 mb-1.5">
                      <Link to={`/article/${article.id}`} className="hover:text-accent transition-colors">
                        {article.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-end gap-1 pt-4 border-t border-border">
                  <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
                    <ChevronLeft size={14} />
                  </button>
                  <button className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
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
};

export default Food;
