import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Users, Target, Award, Clock, Globe } from "lucide-react";
const About = ()=>{
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="about-page-root">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="about-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="about-header-container">
          <div className="flex justify-between items-center h-16" data-spec-id="about-header-content">
            <div className="flex items-center" data-spec-id="about-logo-section">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="about-logo-icon"/>
              <div data-spec-id="about-brand-text">
                <h1 className="text-2xl font-bold text-gray-900" data-spec-id="about-brand-name">CalcSuites</h1>
                <p className="text-xs text-gray-500" data-spec-id="about-brand-slogan">Your Complete Calculator Toolkit</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="about-navigation">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="about-nav-home">Home</Link>
              <Link to="/about" className="text-blue-600 font-medium" data-spec-id="about-nav-about">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="about-nav-contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-spec-id="about-hero-section">
        <div className="max-w-4xl mx-auto text-center" data-spec-id="about-hero-content">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-spec-id="about-hero-title">
            About CalcSuites
          </h1>
          <p className="text-xl text-gray-600 mb-8" data-spec-id="about-hero-subtitle">
            Your Complete Calculator Toolkit for Every Calculation Need
          </p>
          <div className="flex justify-center mb-12" data-spec-id="about-hero-icon">
            <Calculator className="h-20 w-20 text-blue-600" data-spec-id="about-hero-calculator-icon"/>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-spec-id="about-main-content">
        <div className="max-w-4xl mx-auto" data-spec-id="about-content-container">
          {}
          <div className="mb-16" data-spec-id="about-mission-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-spec-id="about-mission-title">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" data-spec-id="about-mission-description">
              CalcSuites is dedicated to providing the most comprehensive and user-friendly collection of online calculators 
              available on the web. We believe that accurate calculations should be accessible to everyone, anywhere, at any time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" data-spec-id="about-mission-vision">
              Our vision is to become the world's most trusted platform for online calculations, helping millions of users 
              make informed decisions in their personal and professional lives through precise, reliable computational tools.
            </p>
          </div>

          {}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-spec-id="about-features-grid">
            <div className="text-center p-6" data-spec-id="about-feature-1">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" data-spec-id="about-feature-1-icon"/>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" data-spec-id="about-feature-1-title">Instant Results</h3>
              <p className="text-gray-600" data-spec-id="about-feature-1-description">
                Get accurate calculations in seconds with our optimized algorithms and user-friendly interfaces.
              </p>
            </div>
            <div className="text-center p-6" data-spec-id="about-feature-2">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" data-spec-id="about-feature-2-icon"/>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" data-spec-id="about-feature-2-title">Always Accessible</h3>
              <p className="text-gray-600" data-spec-id="about-feature-2-description">
                Access our calculators from any device, anywhere in the world. No downloads or installations required.
              </p>
            </div>
            <div className="text-center p-6" data-spec-id="about-feature-3">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" data-spec-id="about-feature-3-icon"/>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" data-spec-id="about-feature-3-title">Precision First</h3>
              <p className="text-gray-600" data-spec-id="about-feature-3-description">
                Every calculator is thoroughly tested and validated to ensure maximum accuracy and reliability.
              </p>
            </div>
          </div>

          {}
          <div className="mb-16" data-spec-id="about-offerings-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-spec-id="about-offerings-title">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-8" data-spec-id="about-offerings-grid">
              <div data-spec-id="about-offering-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" data-spec-id="about-offering-1-title">
                  Financial Calculators
                </h3>
                <p className="text-gray-700 mb-4" data-spec-id="about-offering-1-description">
                  From loan payments to investment returns, our financial calculators help you make smart money decisions. 
                  Calculate mortgage payments, determine loan affordability, and plan your financial future with confidence.
                </p>
                <ul className="text-gray-600 space-y-1" data-spec-id="about-offering-1-list">
                  <li data-spec-id="about-offering-1-item-1">• Loan & Mortgage Calculator</li>
                  <li data-spec-id="about-offering-1-item-2">• Investment Return Calculator</li>
                  <li data-spec-id="about-offering-1-item-3">• Currency Converter</li>
                </ul>
              </div>
              <div data-spec-id="about-offering-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" data-spec-id="about-offering-2-title">
                  Health & Lifestyle
                </h3>
                <p className="text-gray-700 mb-4" data-spec-id="about-offering-2-description">
                  Monitor your health and plan important life events with our specialized health calculators. 
                  Track your fitness goals and plan for major milestones with accurate, medically-informed tools.
                </p>
                <ul className="text-gray-600 space-y-1" data-spec-id="about-offering-2-list">
                  <li data-spec-id="about-offering-2-item-1">• BMI Calculator</li>
                  <li data-spec-id="about-offering-2-item-2">• Pregnancy Calculator</li>
                  <li data-spec-id="about-offering-2-item-3">• Age Calculator</li>
                </ul>
              </div>
              <div data-spec-id="about-offering-3">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" data-spec-id="about-offering-3-title">
                  Everyday Math
                </h3>
                <p className="text-gray-700 mb-4" data-spec-id="about-offering-3-description">
                  Simplify daily calculations with our practical math tools. From percentages to unit conversions, 
                  we've got the calculators you need for school, work, and everyday life.
                </p>
                <ul className="text-gray-600 space-y-1" data-spec-id="about-offering-3-list">
                  <li data-spec-id="about-offering-3-item-1">• Percentage Calculator</li>
                  <li data-spec-id="about-offering-3-item-2">• Unit Converter</li>
                  <li data-spec-id="about-offering-3-item-3">• Date Difference Calculator</li>
                </ul>
              </div>
              <div data-spec-id="about-offering-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" data-spec-id="about-offering-4-title">
                  Always Growing
                </h3>
                <p className="text-gray-700 mb-4" data-spec-id="about-offering-4-description">
                  We continuously expand our calculator collection based on user feedback and emerging needs. 
                  New calculators are added regularly to ensure we meet all your computational requirements.
                </p>
                <ul className="text-gray-600 space-y-1" data-spec-id="about-offering-4-list">
                  <li data-spec-id="about-offering-4-item-1">• Regular Updates</li>
                  <li data-spec-id="about-offering-4-item-2">• User-Requested Features</li>
                  <li data-spec-id="about-offering-4-item-3">• Mobile Optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {}
          <div className="mb-16" data-spec-id="about-why-section">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-spec-id="about-why-title">
              Why Choose CalcSuites?
            </h2>
            <div className="space-y-6" data-spec-id="about-why-content">
              <div className="flex items-start space-x-4" data-spec-id="about-why-item-1">
                <Target className="h-6 w-6 text-blue-600 mt-1" data-spec-id="about-why-item-1-icon"/>
                <div data-spec-id="about-why-item-1-content">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" data-spec-id="about-why-item-1-title">
                    Accuracy You Can Trust
                  </h3>
                  <p className="text-gray-700" data-spec-id="about-why-item-1-description">
                    Every calculator undergoes rigorous testing and validation. Our algorithms are based on industry standards 
                    and mathematical best practices to ensure you get reliable results every time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-spec-id="about-why-item-2">
                <Users className="h-6 w-6 text-blue-600 mt-1" data-spec-id="about-why-item-2-icon"/>
                <div data-spec-id="about-why-item-2-content">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" data-spec-id="about-why-item-2-title">
                    User-Centered Design
                  </h3>
                  <p className="text-gray-700" data-spec-id="about-why-item-2-description">
                    Our calculators are designed with you in mind. Clean interfaces, intuitive controls, and clear results 
                    make complex calculations simple and accessible for users of all technical backgrounds.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-spec-id="about-why-item-3">
                <Calculator className="h-6 w-6 text-blue-600 mt-1" data-spec-id="about-why-item-3-icon"/>
                <div data-spec-id="about-why-item-3-content">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" data-spec-id="about-why-item-3-title">
                    Comprehensive Coverage
                  </h3>
                  <p className="text-gray-700" data-spec-id="about-why-item-3-description">
                    From basic arithmetic to complex financial modeling, CalcSuites covers all your calculation needs in one place. 
                    No need to search multiple websites or install different apps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {}
          <div className="text-center bg-blue-50 rounded-lg p-8" data-spec-id="about-cta-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" data-spec-id="about-cta-title">
              Ready to Start Calculating?
            </h2>
            <p className="text-gray-700 mb-6" data-spec-id="about-cta-description">
              Join millions of users who trust CalcSuites for their daily calculations.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild data-spec-id="about-cta-button">
              <Link to="/" data-spec-id="about-cta-link">Explore Our Calculators</Link>
            </Button>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-gray-900 text-white py-12" data-spec-id="about-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="about-footer-content">
          <div className="flex items-center justify-center mb-4" data-spec-id="about-footer-brand">
            <Calculator className="h-6 w-6 text-blue-400 mr-2" data-spec-id="about-footer-icon"/>
            <span className="text-xl font-bold" data-spec-id="about-footer-name">CalcSuites</span>
          </div>
          <p className="text-gray-400 mb-4" data-spec-id="about-footer-description">
            Your Complete Calculator Toolkit
          </p>
          <p className="text-gray-400 mb-2" data-spec-id="about-footer-email">
            Contact us: calcsuites@gmail.com
          </p>
          <p className="text-gray-500 text-sm" data-spec-id="about-footer-disclaimer">
            All calculators are provided for informational purposes only. Results should be verified for critical decisions.
          </p>
          <p className="text-gray-500 text-sm mt-4" data-spec-id="about-footer-copyright">
            &copy; 2024 CalcSuites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);
};
export default About;
