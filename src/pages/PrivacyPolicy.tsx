import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const sections = [
  { title: "Introduction", content: "This Privacy Policy explains how ChargeSol collects, uses, and protects your personal information when you use our website and services." },
  { title: "Information Collection", content: "We collect personal information such as name, email address, and contact details when you interact with our website or use our services." },
  { title: "Use of Information", content: "Your information is used to provide and improve our services, communicate with you, and ensure the security of our platform." },
  { title: "Sharing of Information", content: "We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights." },
  { title: "Data Security", content: "We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. You can contact us for any privacy-related concerns." },
  { title: "Changes to Policy", content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page." },
  { title: "Contact Us", content: "For any questions or concerns about this Privacy Policy, please contact us at team@chargesol.in." },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">Privacy Policy</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Privacy Policy</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-10 max-w-3xl">
        {sections.map((s, i) => (
          <div key={i} className={`py-6 ${i > 0 ? "border-t border-border" : ""}`}>
            <h3 className="text-lg font-serif font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.content}</p>
          </div>
        ))}
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default PrivacyPolicy;
