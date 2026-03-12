import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const newsItems = [
  {
    title: "Electric Vehicle Sales Rise 148% to Race Past 1.18 Million",
    excerpt: "Electric vehicles made up 5% of total automobiles sales in the country in the year ended March 31 when EV sales crossed 1.18 million, surging 148% on year, powered by two- and three-wheelers.",
    category: "Industry",
    date: "March 2024",
  },
  {
    title: "Rising Price of LPG Accelerates EV Adoption Across India",
    excerpt: "As LPG prices continue to climb, more consumers and fleet operators are turning to electric alternatives, driving unprecedented growth in the EV charging sector.",
    category: "Energy",
    date: "February 2024",
  },
  {
    title: "Government Announces New EV Charging Infrastructure Policy",
    excerpt: "The Indian government has unveiled comprehensive policy measures to accelerate the deployment of EV charging stations across highways and urban centers.",
    category: "Policy",
    date: "January 2024",
  },
  {
    title: "ChargeSol Expands Network to 50+ Cities",
    excerpt: "ChargeSol's eRoaming network now covers over 50 cities, providing seamless charging access to EV drivers across the country.",
    category: "Company",
    date: "December 2023",
  },
];

const NewsArticles = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">News & Articles</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">News & Articles</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-10">
        <div className="space-y-0">
          {newsItems.map((item, i) => (
            <article key={i} className={`py-8 ${i > 0 ? "border-t border-border" : ""}`}>
              <span className="text-[10px] uppercase tracking-[0.15em] font-body font-bold text-destructive">
                {item.category}
              </span>
              <span className="text-[10px] mx-2 text-muted-foreground">·</span>
              <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-body">
                {item.date}
              </span>
              <h3 className="text-xl font-serif font-bold text-foreground leading-snug mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-3xl">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default NewsArticles;
