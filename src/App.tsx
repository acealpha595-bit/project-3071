import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AgeCalculator from "./pages/AgeCalculator";
import BMICalculator from "./pages/BMICalculator";
import LoanCalculator from "./pages/LoanCalculator";
import CurrencyConverter from "./pages/CurrencyConverter";
import DateDifference from "./pages/DateDifference";
import PercentageCalculator from "./pages/PercentageCalculator";
import TemperatureConverter from "./pages/TemperatureConverter";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./components/Sitemap";
import "./App.css";
const queryClient = new QueryClient();
const App = ()=>(<QueryClientProvider client={queryClient} data-spec-id="Hm5rlraFs4tIooZN">
    <TooltipProvider data-spec-id="nQKkjOLUDcwkavFO">
      <Toaster data-spec-id="8R10BycsHoPuB10n"/>
      <BrowserRouter data-spec-id="YFKhY2FZZildlHCp">
        <Routes data-spec-id="JnmHP7HBL9n9q0QX">
          <Route path="/specai-page/Index" element={<Index data-spec-id="XpT7tuuFNsbl0mbM"/>} data-spec-id="KrfTb2FmqOLhKhGs"/>
          <Route path="/specai-page/NotFound" element={<NotFound data-spec-id="ZHn1rvbkGADTf41e"/>} data-spec-id="pRRieO0RN22cogQq"/>

          <Route path="/" element={<Index data-dora-id="1" data-spec-id="pg6Ghy6o8l6a3Oix"/>} data-spec-id="WKq8GO8NLf0qIfIY"/>
          <Route path="/about" element={<About data-spec-id="about-route-element"/>} data-spec-id="about-route"/>
          <Route path="/contact" element={<Contact data-spec-id="contact-route-element"/>} data-spec-id="contact-route"/>
          <Route path="/age-calculator" element={<AgeCalculator data-spec-id="JzFIoErO7g3fU5qI"/>} data-spec-id="XuMljjDBF3Zuaa8x"/>
          <Route path="/bmi-calculator" element={<BMICalculator data-spec-id="KAAS86bP67vrJDIb"/>} data-spec-id="r9uCt677LgbMEPvb"/>
          <Route path="/loan-calculator" element={<LoanCalculator data-spec-id="px61NdKtrGDQPs3Z"/>} data-spec-id="ZmKUKpLVQoE3DLD4"/>
          <Route path="/currency-converter" element={<CurrencyConverter data-spec-id="Slz92pqESHprwls3"/>} data-spec-id="9Ss6wP35hYcHgEBF"/>
          <Route path="/date-difference" element={<DateDifference data-spec-id="P9YI4f7BXaTHJFYy"/>} data-spec-id="Fni0om1jkJd3NnHo"/>
          <Route path="/percentage-calculator" element={<PercentageCalculator data-spec-id="IHkhYIOzdL9bNrXU"/>} data-spec-id="DIWigD9qnNLVPoc7"/>
          <Route path="/temperature-converter" element={<TemperatureConverter data-spec-id="temp-route-element"/>} data-spec-id="temp-route"/>
          <Route path="/privacy" element={<Privacy data-spec-id="privacy-route-element"/>} data-spec-id="privacy-route"/>
          <Route path="/terms" element={<Terms data-spec-id="terms-route-element"/>} data-spec-id="terms-route"/>
          <Route path="/sitemap.xml" element={<Sitemap data-spec-id="sitemap-route-element"/>} data-spec-id="sitemap-route"/>

          <Route path="*" element={<NotFound data-spec-id="GFQZwrrMNADo9tW8"/>} data-spec-id="KofgWSfIZvZsUjtD"/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);
export default App;
