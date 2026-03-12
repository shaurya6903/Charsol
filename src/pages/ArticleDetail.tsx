import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ArticleCard from "@/components/ArticleCard";
import { getArticleById, articles } from "@/data/articles";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Article Not Found</h2>
          <Link to="/" className="text-accent hover:underline font-body">Return to Homepage</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);
  const recent = articles.filter((a) => a.id !== article.id).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8 font-body">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/${article.category.toLowerCase()}`} className="hover:text-foreground">
            {article.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground line-clamp-1 inline">{article.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-2">
            <span className="text-xs uppercase tracking-wider text-accent font-body font-semibold">
              {article.category}
              {article.subcategory && ` / ${article.subcategory}`}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4 leading-tight">
              {article.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-8 pb-6 border-b border-border">
              <span>By <strong className="text-foreground">{article.author}</strong></span>
              <span>·</span>
              <span>{article.date}</span>
              {article.likes && (
                <>
                  <span>·</span>
                  <span>{article.likes} likes</span>
                </>
              )}
            </div>

            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-video object-cover mb-8"
            />

            <div className="font-body text-foreground leading-relaxed space-y-5 text-base">
              <p className="text-lg font-medium">{article.excerpt}</p>

              <p>
                The implications of this story reach far beyond what initially meets the eye. Experts
                across multiple disciplines have weighed in, offering perspectives that challenge
                conventional thinking and open new avenues for understanding the complex dynamics at play.
              </p>
              <p>
                "What we're seeing is a fundamental shift in how people engage with this topic," said
                Dr. Sarah Mitchell, a professor of media studies at Metropolitan University. "The old
                frameworks simply don't apply anymore, and we need to develop new ways of thinking
                about the challenges ahead."
              </p>

              <h3 className="text-2xl font-serif font-bold text-foreground pt-4">The Broader Context</h3>
              <p>
                To understand the full significance of these developments, it helps to look at the
                historical trajectory. For decades, the prevailing wisdom held that incremental change
                was the only viable path forward. But recent events have demonstrated that rapid
                transformation is not only possible but, in some cases, inevitable.
              </p>
              <p>
                Community leaders have been quick to respond. In Metro City, a coalition of
                organizations has formed to address the immediate concerns raised by stakeholders.
                Their plan, released last Thursday, outlines a comprehensive approach that balances
                short-term pragmatism with long-term vision.
              </p>

              <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-muted-foreground my-8">
                "We cannot afford to wait for perfect conditions. The time for action is now, and the
                people we serve deserve nothing less than our best efforts."
                <span className="block text-sm mt-2 not-italic">— Mayor Rebecca Torres</span>
              </blockquote>

              <h3 className="text-2xl font-serif font-bold text-foreground pt-4">Looking Ahead</h3>
              <p>
                As the situation continues to evolve, several key questions remain unanswered. Analysts
                point to three critical factors that will determine the outcome: public engagement,
                institutional capacity, and the willingness of decision-makers to embrace innovative
                solutions.
              </p>
              <p>
                The next few months will be crucial. With elections approaching and public attention
                at an all-time high, the pressure on all involved parties to deliver meaningful results
                has never been greater. Whether they rise to the occasion remains to be seen, but one
                thing is certain: the conversation has been permanently changed.
              </p>
              <p>
                For those following this story, we recommend checking our coverage regularly as new
                developments continue to emerge. Our team of reporters will be on the ground,
                providing the in-depth analysis and firsthand reporting that our readers have come
                to expect from The Daily Chronicle.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
              {[article.category, article.subcategory, "Featured", "Analysis"].filter(Boolean).map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related */}
            {related.length > 0 && (
              <div>
                <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-foreground mb-4 pb-2 border-b border-border">
                  Related in {article.category}
                </h4>
                {related.map((a) => (
                  <ArticleCard key={a.id} article={a} variant="compact" />
                ))}
              </div>
            )}

            {/* Recent */}
            <div>
              <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-foreground mb-4 pb-2 border-b border-border">
                Recent Headlines
              </h4>
              <ul className="space-y-3">
                {recent.map((a) => (
                  <li key={a.id}>
                    <Link
                      to={`/article/${a.id}`}
                      className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Newsletter />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
