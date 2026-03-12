import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Business Development Manager",
    area: "Sales",
    posted: "1 day ago",
    experience: "2+ years",
    slug: "business-development-manager",
  },
];

const CareerPage = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">Career</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Career</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-16 max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug mb-4">
          Join The Team Which Will Help Shape the Future of <span className="text-primary">Sustainable Mobility</span>
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8">
          In case you don't find a relevant position, feel free to write to us at{" "}
          <a href="mailto:founders@chargesol.in" className="text-accent hover:text-primary transition-colors font-semibold">
            founders@chargesol.in
          </a>
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 border-2 border-foreground text-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:bg-foreground hover:text-background transition-colors"
        >
          Get Started Now
        </Link>
      </section>

      {/* Job Listings */}
      <section className="py-10 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wide text-foreground mb-2">
          Latest Jobs
        </h2>
        <div className="w-full h-[3px] bg-destructive mb-10" />

        <div className="space-y-6">
          {jobs.map((job) => (
            <article key={job.slug} className="border border-border p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="text-primary mt-1 shrink-0" size={24} />
                <div className="flex-1">
                  <h4 className="text-lg font-serif font-bold text-primary mb-1">
                    <Link to={`/career/${job.slug}`} className="hover:text-accent transition-colors">
                      {job.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-muted-foreground font-body">
                    Business Area: {job.area} · Experience: {job.experience}
                  </p>
                  <p className="text-[10px] text-muted-foreground font-body mt-1">
                    Posted {job.posted}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  to={`/career/${job.slug}`}
                  className="block text-center py-2 border border-foreground text-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:bg-foreground hover:text-background transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default CareerPage;
