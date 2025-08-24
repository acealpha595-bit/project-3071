import { Link } from 'react-router-dom';
import { Calculator, Home, Info, Mail } from 'lucide-react';
export default function Terms() {
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="terms-page-root">
      {}
      <header className="bg-white shadow-sm" data-spec-id="terms-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-spec-id="terms-header-content">
          <div className="flex items-center justify-between" data-spec-id="terms-nav-container">
            <div className="flex items-center" data-spec-id="terms-logo-section">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="terms-logo-icon"/>
              <div data-spec-id="terms-brand-text">
                <h1 className="text-2xl font-bold text-gray-900" data-spec-id="terms-brand-name">CalcSuites</h1>
                <p className="text-xs text-gray-500" data-spec-id="terms-brand-slogan">Your Complete Calculator Toolkit</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6" data-spec-id="terms-navigation">
              <Link to="/" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="terms-nav-home">
                <Home className="h-4 w-4 mr-1" data-spec-id="nOiCxsZi7Yp6ZtyA"/>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="terms-nav-about">
                <Info className="h-4 w-4 mr-1" data-spec-id="dPvymgRI1dGHXJpp"/>
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="terms-nav-contact">
                <Mail className="h-4 w-4 mr-1" data-spec-id="pjFjW0dvc6z04znN"/>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-spec-id="terms-main-content">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" data-spec-id="terms-content-card">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center" data-spec-id="terms-title">
            Terms of Service
          </h1>
          
          <div className="prose max-w-none" data-spec-id="terms-content">
            <p className="text-lg text-gray-700 mb-6" data-spec-id="terms-last-updated">
              <strong data-spec-id="Q1kzEeyU7lFS16uC">Last updated:</strong> {new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}
            </p>

            <section className="mb-8" data-spec-id="terms-intro-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-intro-title">Welcome to CalcSuites</h2>
              <p className="text-gray-700 mb-4" data-spec-id="terms-intro-description">
                These Terms of Service ("Terms") govern your use of the CalcSuites website located at 
                calcsuites.store (the "Service") operated by CalcSuites ("us", "we", or "our").
              </p>
              <p className="text-gray-700" data-spec-id="terms-acceptance">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
            </section>

            <section className="mb-8" data-spec-id="terms-description-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-description-title">Description of Service</h2>
              <p className="text-gray-700 mb-4" data-spec-id="terms-service-description">
                CalcSuites provides a comprehensive collection of free online calculators including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="terms-calculator-list">
                <li data-spec-id="zJStp9AyE9mJx0vn">Age Calculator</li>
                <li data-spec-id="PGcjuBfep9kA3Wbf">BMI Calculator</li>
                <li data-spec-id="OVP8S0T4Fk0493r5">Loan Calculator</li>
                <li data-spec-id="youoqSn7BDqkx81u">Currency Converter</li>
                <li data-spec-id="w58Q2DHMAdPwOnuI">Date Difference Calculator</li>
                <li data-spec-id="16TON4dfpfebSWSg">Percentage Calculator</li>
                <li data-spec-id="s67fEfhbus25ZyYH">And other calculation tools</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="terms-use-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-use-title">Acceptable Use</h2>
              <p className="text-gray-700 mb-4" data-spec-id="terms-use-description">You may use our Service for lawful purposes only. You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="terms-prohibited-list">
                <li data-spec-id="gyIQerLjhfXr1386">Use the Service for any unlawful purpose or activity</li>
                <li data-spec-id="krDO7fcYQ65WDNc2">Attempt to interfere with the proper functioning of the Service</li>
                <li data-spec-id="LgAiYVsKlETrhJEE">Use automated systems to access the Service excessively</li>
                <li data-spec-id="YFHUHc28gNHM1wbv">Attempt to gain unauthorized access to any part of the Service</li>
                <li data-spec-id="2bDibqN6xOZxB0fO">Upload malicious code or attempt to compromise site security</li>
                <li data-spec-id="JVToXYR7jMqeNSsh">Use the Service to spam or harass other users</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="terms-accuracy-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-accuracy-title">Accuracy of Calculations</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4" data-spec-id="terms-accuracy-warning">
                <p className="text-yellow-800 font-medium" data-spec-id="terms-accuracy-disclaimer">
                  <strong data-spec-id="zoqdKvYIzMmhof7c">Important Disclaimer:</strong> All calculations provided by CalcSuites are for informational purposes only.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="terms-accuracy-points">
                <li data-spec-id="e58Hn6owi9Bvq2T4">Results should be independently verified for critical decisions</li>
                <li data-spec-id="rQEoZwFhvuTOyuvV">We strive for accuracy but cannot guarantee error-free calculations</li>
                <li data-spec-id="f2ZoDKVpSBMH4Oik">Financial, medical, or legal decisions should involve qualified professionals</li>
                <li data-spec-id="YhpTvdX4SffQGBsC">Users are responsible for verifying results before taking action</li>
                <li data-spec-id="zgOZitcaR2fExoLh">CalcSuites is not liable for decisions made based on our calculations</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="terms-content-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-content-title">Intellectual Property</h2>
              <p className="text-gray-700 mb-4" data-spec-id="terms-content-description">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of CalcSuites and its licensors. The Service is protected by copyright, 
                trademark, and other laws.
              </p>
              <p className="text-gray-700" data-spec-id="terms-content-usage">
                You may not reproduce, distribute, modify, or create derivative works of our content 
                without explicit written permission.
              </p>
            </section>

            <section className="mb-8" data-spec-id="terms-privacy-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-privacy-title">Privacy</h2>
              <p className="text-gray-700" data-spec-id="terms-privacy-description">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the Service, to understand our practices regarding your personal information.
              </p>
              <p className="text-gray-700 mt-2" data-spec-id="terms-privacy-link">
                <Link to="/privacy" className="text-blue-600 hover:text-blue-800" data-spec-id="TOdqIK34kGMw2Zc4">View our Privacy Policy</Link>
              </p>
            </section>

            <section className="mb-8" data-spec-id="terms-advertising-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-advertising-title">Advertising</h2>
              <p className="text-gray-700 mb-4" data-spec-id="terms-advertising-description">
                Our Service may display advertisements to support our free calculator tools. These ads are 
                provided by third-party advertising networks, including Google AdSense.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="terms-advertising-points">
                <li data-spec-id="NX4LyAdDTeyFzRdJ">We do not control the content of third-party advertisements</li>
                <li data-spec-id="YxX5dhJXXGSGf826">Clicking on ads may redirect you to external websites</li>
                <li data-spec-id="iZNdzPDJdGDc2aEE">We are not responsible for the content or practices of advertised websites</li>
                <li data-spec-id="q3TIM9ozlYyqLYYb">Ad-blocking software may affect website functionality</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="terms-limitation-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-limitation-title">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4" data-spec-id="terms-limitation-description">
                In no event shall CalcSuites, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section className="mb-8" data-spec-id="terms-warranty-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-warranty-title">Disclaimer of Warranties</h2>
              <p className="text-gray-700" data-spec-id="terms-warranty-description">
                The information on this Service is provided on an "as is" basis. To the fullest extent 
                permitted by law, this Service is provided without any representations or warranties, 
                express or implied, including but not limited to implied warranties of merchantability, 
                fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section className="mb-8" data-spec-id="terms-termination-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-termination-title">Termination</h2>
              <p className="text-gray-700" data-spec-id="terms-termination-description">
                We may terminate or suspend access to our Service immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8" data-spec-id="terms-changes-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-changes-title">Changes to Terms</h2>
              <p className="text-gray-700" data-spec-id="terms-changes-description">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
            </section>

            <section data-spec-id="terms-contact-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="terms-contact-title">Contact Information</h2>
              <p className="text-gray-700 mb-4" data-spec-id="terms-contact-description">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-700" data-spec-id="terms-contact-email">
                <strong data-spec-id="XZTGKdbx2YWsOl1m">Email:</strong> calcsuites@gmail.com
              </p>
              <p className="text-gray-700 mt-2" data-spec-id="terms-contact-website">
                <strong data-spec-id="nPm3Oros0WgUaFLx">Website:</strong> calcsuites.store
              </p>
            </section>
          </div>
        </div>
      </main>

      {}
      <footer className="bg-gray-900 text-white py-8" data-spec-id="terms-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="terms-footer-content">
          <div className="flex items-center justify-center mb-4" data-spec-id="terms-footer-brand">
            <Calculator className="h-6 w-6 text-blue-400 mr-2" data-spec-id="terms-footer-icon"/>
            <span className="text-xl font-bold" data-spec-id="terms-footer-name">CalcSuites</span>
          </div>
          <p className="text-gray-400 mb-2" data-spec-id="terms-footer-email">
            Email: calcsuites@gmail.com
          </p>
          <p className="text-gray-500 text-sm" data-spec-id="terms-footer-copyright">
            &copy; 2024 CalcSuites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);
}
