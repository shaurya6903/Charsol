import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const definitions = [
  { term: "Account", def: "The account created by the Customer on the Mobile Application for availing the Services provided by ChargeSol." },
  { term: "Application", def: 'The mobile application, or the progressive web application named "ChargeSol" updated by ChargeSol from time to time.' },
  { term: "Convenience Fee", def: "The fee payable by the Customer to ChargeSol for the Service, including technology services, customer support and cashless payment options." },
  { term: "Cancellation Fee", def: "The Convenience Fee payable towards cancellation of an Electric Vehicle Charging Session time slot booking." },
  { term: "Customer/You/EV Driver/User", def: "A person who has an Account on the Application." },
  { term: "E-Wallet", def: "A pre-paid instrument which can be used to make payments." },
  { term: "EV Charging Session", def: "Duration between user starts and stops charging an electric vehicle." },
  { term: "Fare", def: "The amount in Indian Rupees reflected on the Application as payable for energy consumption during an EV Charging Session." },
  { term: "Service(s)", def: "The facilitation of EV Charging service by ChargeSol." },
  { term: "Charge Spot", def: "An instrument/machine to charge an electric vehicle." },
  { term: "Charging Station", def: "A location where one or more than one Charge Spots are installed." },
];

const TermsConditions = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">Terms & Conditions</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Terms & Conditions</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-10 max-w-3xl">
        {/* Intro */}
        <div className="py-6">
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            These terms and conditions ("User Terms") apply to your visit to and use of the Mobile Application and Site 
            whether through a computer or a mobile phone, the Service and the Application, as well as to all information, 
            recommendations and/or services provided to You on or through the Site, the Service and the Application.
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            By checking and agreeing "I agree to the Terms & Conditions and Privacy Policy" you are consenting to be bound 
            by these User Terms. Please ensure that you read and understand these entire user terms before you use the mobile 
            application/site.
          </p>
        </div>

        {/* Definitions */}
        <div className="py-6 border-t border-border">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6">1. Definitions</h3>
          <div className="space-y-4">
            {definitions.map((d, i) => (
              <div key={i} className="border-b border-border pb-3">
                <span className="text-sm font-body font-bold text-foreground">{d.term}:</span>{" "}
                <span className="text-sm font-body text-muted-foreground">{d.def}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="py-6 border-t border-border">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">2. Eligibility</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
            You will be "Eligible" to use the Services only when You fulfil all of the following conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-sm text-muted-foreground font-body">You have attained at least 18 (eighteen) years of age.</li>
            <li className="text-sm text-muted-foreground font-body">You are competent to enter into a contract under the Applicable Laws.</li>
          </ul>
        </div>

        {/* Registration */}
        <div className="py-6 border-t border-border">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">3. Registration and Account</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
            You can Register/Sign Up on the Application only after complying with ChargeSol's requirements by entering Your Registration Data.
            You shall ensure that the Registration Data provided is accurate, complete, current, valid and true.
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            You are solely responsible for maintaining the confidentiality of Your Registration Data and will be liable 
            for all activities and transactions that occur through Your Account. Your Account cannot be transferred, 
            assigned or sold to a third party.
          </p>
        </div>

        {/* Services */}
        <div className="py-6 border-t border-border">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">4. Services</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
            By using the Application or the Service, You agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-sm text-muted-foreground font-body">You will only use the Service for your sole, personal use.</li>
            <li className="text-sm text-muted-foreground font-body">You will not use the Service for unlawful purposes.</li>
            <li className="text-sm text-muted-foreground font-body">You will not try to harm the Service, Site, Application or our network.</li>
            <li className="text-sm text-muted-foreground font-body">You will comply with all Applicable Law from your country of domicile.</li>
            <li className="text-sm text-muted-foreground font-body">You are aware of and shall comply with the Information Technology Act, 2000.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="py-6 border-t border-border">
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            For any questions or unauthorized use of your Account, please contact us at{" "}
            <a href="mailto:founders@chargesol.in" className="text-accent hover:text-primary transition-colors font-semibold">
              founders@chargesol.in
            </a>
          </p>
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default TermsConditions;
