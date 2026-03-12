import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-6">
        <nav className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] font-body text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-foreground">Refund Policy</span>
        </nav>
        <h2 className="text-3xl font-serif italic text-foreground">Refund Policy</h2>
      </div>
    </div>

    <main className="container mx-auto px-4">
      <section className="py-10 max-w-3xl">
        {/* Payment */}
        <div className="py-6">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">ChargeSol Payment</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            At the end of the EV Charging Session, Total Payable Amount for EV Charging will be collected by ChargeSol 
            and remaining additional paid amount shall be refunded to EV User's Wallet. ChargeSol shall provide a receipt 
            of the Total Payable Amount for EV Charging by You at the end of the EV Charging Session.
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            All applicable taxes in respect of the Service Charge, Cancellation/Reschedule Fee shall be borne and payable 
            by You to ChargeSol, as the case may be.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="py-6 border-t border-border">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">Payment Methods</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-serif font-bold text-foreground mb-2">1. E-Wallet Payment</h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                ChargeSol offers You the facility of making an online payment through an E-Wallet powered by a third party 
                payment processor. The processing of payments will be subject to the terms, conditions, and privacy policies 
                of the Payment Processor that ChargeSol engages for the purpose.
              </p>
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-foreground mb-2">2. Credit Card / Debit Card / Net Banking</h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Total EV Charging Service Fee shall be effected using the services of an entity providing payment gateway/processor 
                services authorized by ChargeSol. All PGs whose services are utilized shall be PCI-DSS compliant.
              </p>
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-foreground mb-2">3. ChargeSol Wallet</h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Payment initiated for EV charging session through Net Banking/Credit Card/Debit Card, on successful transaction 
                shall be first credited to ChargeSol Wallet. Amount received from Offers and Referrals, any Refundable amount 
                shall be credited to Wallet only.
              </p>
            </div>
          </div>
        </div>

        {/* Cancellation */}
        <div className="py-6 border-t border-border">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">Cancellation, Reschedule & Refund Policy</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed italic mb-4">
            *Applicable for Public/Commercial Charge Spots/Stations
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
            You agree and acknowledge that you may cancel/reschedule your booking for an EV at any point of time subject to 
            a Cancellation/Reschedule Fee as explained below:
          </p>

          <div className="border border-border">
            <div className="grid grid-cols-[1fr_2fr] border-b border-border">
              <div className="p-3 bg-card font-body text-xs font-bold uppercase text-foreground">Condition</div>
              <div className="p-3 bg-card font-body text-xs font-bold uppercase text-foreground">Policy</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] border-b border-border">
              <div className="p-3 text-sm font-body text-muted-foreground">Cancellation</div>
              <div className="p-3 text-sm font-body text-muted-foreground">Cancellation Fee charged if you cancel at any time after booking.</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] border-b border-border">
              <div className="p-3 text-sm font-body text-muted-foreground">Delay</div>
              <div className="p-3 text-sm font-body text-muted-foreground">Auto-cancelled if delayed more than 15 minutes from booking time slot. Cancellation Fee applies.</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] border-b border-border">
              <div className="p-3 text-sm font-body text-muted-foreground">Reschedule</div>
              <div className="p-3 text-sm font-body text-muted-foreground">No Fee for rescheduling. Charging Rate Change may apply per new schedule.</div>
            </div>
            <div className="grid grid-cols-[1fr_2fr]">
              <div className="p-3 text-sm font-body text-muted-foreground">Admin Cancel</div>
              <div className="p-3 text-sm font-body text-muted-foreground">No Cancellation Fee; full paid amount refunded if cancelled by ChargeSol Admin or Station Owner.</div>
            </div>
          </div>
        </div>

        {/* Processing */}
        <div className="py-6 border-t border-border">
          <h3 className="text-lg font-serif font-bold text-foreground mb-3">How Long Will It Take to Process My Cancellation?</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Once you request the cancellation of your booked time slot(s), it will take approximately 24/48 hours to process 
            the refund. You will be notified of the same by email/SMS.
          </p>
        </div>

        <div className="py-6 border-t border-border">
          <h3 className="text-lg font-serif font-bold text-foreground mb-3">What Are the Modes of Refund Available?</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            If you have cancelled your booking and the cancellation request has been successfully processed, for any payments 
            made using our payment gateway, the amount will be refunded and credited to your ChargeSol wallet. 
            Processing time will be 24 hours.
          </p>
        </div>
      </section>
    </main>

    <Footer />
    <CookieBanner />
  </div>
);

export default RefundPolicy;
