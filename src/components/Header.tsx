import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Sun, Moon } from "lucide-react";
import chargesolLogo from "@/assets/chargesol-logo.png";
import { CartDrawer } from "@/components/CartDrawer";

const solutionLinks = [
  { label: "ChargeSol for CPOs", path: "/solutions/cpos" },
  { label: "ChargeSol for OEMs", path: "/solutions/oems" },
  { label: "ChargeSol for Fleet Operators", path: "/solutions/fleet" },
  { label: "Other Businesses", path: "/solutions/other" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Solutions", path: "/solutions", children: solutionLinks },
  { label: "News & Articles", path: "/news" },
  { label: "Shop", path: "/shop" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-background">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground font-body">{dateStr}</span>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[10px] uppercase tracking-[0.12em] font-body font-semibold text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-[0.12em] font-body font-semibold text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="text-[10px] uppercase tracking-[0.12em] font-body font-semibold text-muted-foreground hover:text-foreground transition-colors">Refund Policy</Link>
            <button onClick={() => setDark(!dark)} className="p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle dark mode">
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="container mx-auto px-4 py-6 text-center">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={chargesolLogo} alt="ChargeSol" className="h-16 md:h-20 w-auto" style={{ filter: "none" }} />
        </Link>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body mt-2">Empowering Sustainable Mobility</p>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-center py-3">
            <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.path} className="relative group">
                    <Link
                      to={link.path}
                      className="text-xs uppercase tracking-[0.15em] font-body font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown size={12} />
                    </Link>
                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                      <div className="bg-background border border-border shadow-md min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] font-body font-semibold text-foreground hover:text-accent hover:bg-card transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-xs uppercase tracking-[0.15em] font-body font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/subscribe"
                className="text-xs uppercase tracking-[0.15em] font-body font-bold text-primary-foreground bg-primary px-4 py-1.5 hover:opacity-90 transition-opacity"
              >
                Subscribe
              </Link>
              <CartDrawer />
            </div>

            <button className="lg:hidden p-2 text-foreground" aria-label="Search"><Search size={20} /></button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-border py-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setSolOpen(!solOpen)}
                        className="w-full flex items-center justify-between text-xs uppercase tracking-[0.15em] font-body font-semibold text-foreground py-2"
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform ${solOpen ? "rotate-180" : ""}`} />
                      </button>
                      {solOpen && (
                        <div className="pl-4 space-y-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={() => setMobileOpen(false)}
                              className="block text-[11px] uppercase tracking-[0.12em] font-body font-semibold text-muted-foreground hover:text-accent py-1.5"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs uppercase tracking-[0.15em] font-body font-semibold text-foreground hover:text-accent py-2"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/subscribe" onClick={() => setMobileOpen(false)} className="block text-xs uppercase tracking-[0.15em] font-body font-bold text-primary py-2">Subscribe</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
