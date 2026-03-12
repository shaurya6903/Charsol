import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "horizontal" | "compact";
}

const articlePath = (article: Article) => `/article/${article.id}`;

const ArticleCard = ({ article, variant = "default" }: ArticleCardProps) => {
  if (variant === "compact") {
    return (
      <div className="flex gap-4 py-3 border-b border-border last:border-b-0">
        <Link to={articlePath(article)} className="flex-shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-20 h-20 object-cover"
            loading="lazy"
          />
        </Link>
        <div>
          <span className="text-xs uppercase tracking-wider text-accent font-body font-semibold">
            {article.category}
          </span>
          <h4 className="text-sm font-serif font-bold text-foreground leading-tight mt-1 hover:text-accent transition-colors">
            <Link to={articlePath(article)}>{article.title}</Link>
          </h4>
        </div>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <article className="flex gap-6 py-6 border-b border-border last:border-b-0">
        <Link to={articlePath(article)} className="flex-shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-48 h-32 object-cover"
            loading="lazy"
          />
        </Link>
        <div>
          <span className="text-xs uppercase tracking-wider text-accent font-body font-semibold">
            {article.category}
            {article.subcategory && ` / ${article.subcategory}`}
          </span>
          <h3 className="text-xl font-serif font-bold text-foreground mt-1 mb-2 hover:text-accent transition-colors">
            <Link to={articlePath(article)}>{article.title}</Link>
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-body">
            {article.date} · By {article.author}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <Link to={articlePath(article)} className="overflow-hidden block">
        <img
          src={article.image}
          alt={article.title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>
      <div className="pt-4">
        <span className="text-xs uppercase tracking-wider text-accent font-body font-semibold">
          {article.category}
          {article.subcategory && ` / ${article.subcategory}`}
        </span>
        <h3 className="text-lg font-serif font-bold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
          <Link to={articlePath(article)}>{article.title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        <p className="text-xs text-muted-foreground mt-3 font-body">
          {article.date} · By {article.author}
        </p>
      </div>
    </article>
  );
};

export default ArticleCard;
