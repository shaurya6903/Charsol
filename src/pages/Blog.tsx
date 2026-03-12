import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { articles } from "@/data/articles";
import { Heart } from "lucide-react";

const POSTS_PER_PAGE = 6;
const heroArticle = articles[1]; // Tech Productivity
const latestArticles = [articles[0], articles[2], articles[4], articles[6], articles[8], articles[10], articles[14], articles[17], articles[22], articles[28], articles[31], articles[34]];
const feedArticles = articles.slice(2, 20);
const sidebarArticle = articles[34]; // Rare Books

const topSearches = [
  { label: "Art & Design", size: "text-sm" },
  { label: "Blog", size: "text-lg font-bold" },
  { label: "Business", size: "text-sm" },
  { label: "Culture", size: "text-sm" },
  { label: "Economy", size: "text-base font-semibold" },
  { label: "Health", size: "text-base font-semibold" },
  { label: "Lifestyle", size: "text-lg font-bold" },
  { label: "Movies", size: "text-sm" },
  { label: "N.Y.", size: "text-sm" },
  { label: "Chronicle", size: "text-base" },
  { label: "Photos", size: "text-sm font-semibold" },
  { label: "Politics", size: "text-sm font-semibold" },
  { label: "Post", size: "text-sm" },
  { label: "Science", size: "text-sm" },
  { label: "Sports", size: "text-base font-bold" },
  { label: "Tech", size: "text-sm" },
  { label: "Today's Arts", size: "text-sm" },
  { label: "Travel", size: "text-sm" },
  { label: "U.S.", size: "text-sm" },
  { label: "Videos", size: "text-base font-semibold" },
  { label: "World", size: "text-sm" },
];

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const visiblePosts = feedArticles.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page title bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <h2 className="text-3xl font-serif italic text-foreground">Blog Shortcode</h2>
          <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>›</span>
            <span className="text-foreground font-semibold">Blog Shortcode</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4">
        {/* ===== HERO — image left, latest articles right ===== */}
        <section className="grid lg:grid-cols-[3fr_2fr] gap-8 py-10">
          <Link to={`/article/${heroArticle.id}`} className="block group">
            <img
              src={heroArticle.image}
              alt={heroArticle.title}
              className="w-full aspect-[4/3] object-cover group-hover:opacity-90 transition-opacity"
            />
          </Link>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-body font-bold text-foreground mb-4">
              Latest Articles
            </h4>
            <ul className="space-y-2.5">
              {latestArticles.map((a) => (
                <li key={a.id} className="text-sm font-body text-foreground leading-snug">
                  <Link to={`/article/${a.id}`} className="hover:text-accent transition-colors">
                    • {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== ARTICLE FEED + SIDEBAR ===== */}
        <section className="grid lg:grid-cols-[2fr_1fr] gap-10 pb-10">
          {/* Main feed */}
          <div>
            {visiblePosts.map((article) => (
              <article key={article.id} className="mb-10">
                <Link to={`/article/${article.id}`} className="block group mb-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-[16/9] object-cover group-hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                </Link>
                <div className="mb-2 flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
                    {article.date}
                  </span>
                  <span className="text-[10px] text-muted-foreground">|</span>
                  <Link to="#" className="text-[10px] uppercase tracking-[0.12em] font-body font-bold text-accent hover:text-foreground transition-colors">
                    {article.category}
                    {article.subcategory ? `, ${article.subcategory}` : ""}
                  </Link>
                  <span className="text-[10px] text-muted-foreground">|</span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
                    By {article.author}
                  </span>
                  {article.likes && (
                    <>
                      <span className="text-[10px] text-muted-foreground">|</span>
                      <span className="flex items-center gap-1 text-[10px] text-destructive font-body">
                        <Heart size={10} fill="currentColor" /> {article.likes}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground leading-snug mb-2">
                  <Link to={`/article/${article.id}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}

            {visibleCount < feedArticles.length && (
              <div className="text-center pt-6 border-t border-border">
                <button
                  onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                  className="text-xs uppercase tracking-[0.15em] font-body font-bold text-foreground hover:text-accent transition-colors"
                >
                  Load More Posts
                </button>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <aside className="hidden lg:block">
            {/* Small article card */}
            <Link to={`/article/${sidebarArticle.id}`} className="block group mb-2">
              <img
                src={sidebarArticle.image}
                alt={sidebarArticle.title}
                className="w-32 aspect-square object-cover group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <h4 className="text-sm font-serif font-bold text-foreground leading-snug mb-8">
              <Link to={`/article/${sidebarArticle.id}`} className="hover:text-accent transition-colors">
                {sidebarArticle.title}
              </Link>
            </h4>

            {/* Top Searches */}
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-body font-bold text-foreground mb-4">
              Top Searches
            </h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {topSearches.map((tag) => (
                <Link
                  key={tag.label}
                  to="#"
                  className={`${tag.size} font-body text-muted-foreground hover:text-foreground transition-colors`}
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </aside>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Blog;
