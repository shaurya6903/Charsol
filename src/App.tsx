import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCartSync } from "@/hooks/useCartSync";
import { Chatbot } from "@/components/Chatbot";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import SolutionCPOs from "./pages/SolutionCPOs";
import SolutionOEMs from "./pages/SolutionOEMs";
import SolutionFleet from "./pages/SolutionFleet";
import SolutionOther from "./pages/SolutionOther";
import NewsArticles from "./pages/NewsArticles";
import CareerPage from "./pages/Career";
import JobDetail from "./pages/JobDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import Subscribe from "./pages/Subscribe";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/cpos" element={<SolutionCPOs />} />
        <Route path="/solutions/oems" element={<SolutionOEMs />} />
        <Route path="/solutions/fleet" element={<SolutionFleet />} />
        <Route path="/solutions/other" element={<SolutionOther />} />
        <Route path="/news" element={<NewsArticles />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/career/:slug" element={<JobDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:handle" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
