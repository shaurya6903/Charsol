import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const JobDetail = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <Link to="/career" className="hover:text-foreground transition-colors">Career</Link>
          <span>&gt;</span>
          <span className="text-foreground">Business Development Manager</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Job Description</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-16 max-w-3xl">
        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8">
          Hello Dear Aspirant, We are looking for some experienced as well as fresh talent of graphic designers, 
          web developers, business development managers, and social media managers in their particular field.
        </p>

        <h3 className="text-2xl font-serif font-bold text-primary mb-6">
          Business Development Manager
        </h3>

        <div className="space-y-4 border border-border p-6 mb-8">
          <div className="flex justify-between border-b border-border pb-3">
            <span className="text-xs font-body font-bold uppercase tracking-wider text-foreground">Experience</span>
            <span className="text-sm font-body text-muted-foreground">2+ years</span>
          </div>
          <div className="flex justify-between border-b border-border pb-3">
            <span className="text-xs font-body font-bold uppercase tracking-wider text-foreground">No. of Positions</span>
            <span className="text-sm font-body text-muted-foreground">5</span>
          </div>
          <div className="flex justify-between border-b border-border pb-3">
            <span className="text-xs font-body font-bold uppercase tracking-wider text-foreground">Department</span>
            <span className="text-sm font-body text-muted-foreground">Design</span>
          </div>
          <div className="flex justify-between border-b border-border pb-3">
            <span className="text-xs font-body font-bold uppercase tracking-wider text-foreground">Skills</span>
            <span className="text-sm font-body text-muted-foreground">Adobe Creative Suite, CorelDraw, MS-Office, UI/UX Design, Creative mind-set</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-body font-bold uppercase tracking-wider text-foreground">Salary</span>
            <span className="text-sm font-body text-muted-foreground">As per market standard</span>
          </div>
        </div>

        <a
          href="mailto:founders@chargesol.in"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.15em] font-body font-bold hover:opacity-90 transition-opacity"
        >
          Apply Now
        </a>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default JobDetail;
