import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import surfingImg from "@/assets/articles/surfing.jpg";

const categories = [
  { title: "Music & Art", text: "Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate." },
  { title: "Lifestyle", text: "Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate." },
  { title: "Health & Beauty", text: "Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate." },
];

const FeaturedBlocks = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Page title bar */}
    <div className="bg-secondary border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h2 className="text-3xl font-serif italic text-foreground">Featured Blocks</h2>
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>›</span>
          <span className="text-foreground font-semibold">Featured Blocks</span>
        </div>
      </div>
    </div>

    <main className="container mx-auto px-4 py-12">
      {/* Hero feature block */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="bg-foreground text-background p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-serif leading-snug mb-4">
            The Fall's Most Fascinating Art Show? The Met Trying to Fix Itself
          </h3>
          <p className="text-sm font-body leading-relaxed opacity-80">
            Duis interdum risus ligula, in consequat lectus eleifend quis. In malesuada finibus arcu eu volutpat. Suspendisse ornare lacus ligula, quis mollis augue accumsan et. Phasellus et ante id ante finibus consectetur at ut lorem. Etiam id facilisis lorem. Aliquam eleifend orci ligula, sit amet posuere lectus egestas vitae. Morbi et felis vestibulum, euismod magna in, tempor enim. Vivamus placerat dictum enim eget pellentesque. Mauris egestas cursus malesuada.
          </p>
        </div>
        <div className="aspect-[4/3] md:aspect-auto">
          <img
            src={surfingImg}
            alt="Featured article"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
        {categories.map(({ title, text }) => (
          <div key={title} className="bg-secondary p-6 flex flex-col">
            <h4 className="text-lg font-serif text-foreground mb-3">{title}</h4>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6 flex-1">{text}</p>
            <div>
              <Link
                to="#"
                className="inline-block bg-foreground text-background text-xs font-body font-semibold uppercase tracking-wider px-5 py-2.5 hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default FeaturedBlocks;
