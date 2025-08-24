import { Link } from 'react-router-dom';
import { Calculator, Home, Info, Mail } from 'lucide-react';
export default function Privacy() {
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="privacy-page-root">
      {}
      <header className="bg-white shadow-sm" data-spec-id="privacy-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-spec-id="privacy-header-content">
          <div className="flex items-center justify-between" data-spec-id="privacy-nav-container">
            <div className="flex items-center" data-spec-id="privacy-logo-section">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="privacy-logo-icon"/>
              <div data-spec-id="privacy-brand-text">
                <h1 className="text-2xl font-bold text-gray-900" data-spec-id="privacy-brand-name">CalcSuites</h1>
                <p className="text-xs text-gray-500" data-spec-id="privacy-brand-slogan">Your Complete Calculator Toolkit</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6" data-spec-id="privacy-navigation">
              <Link to="/" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="privacy-nav-home">
                <Home className="h-4 w-4 mr-1" data-spec-id="auXvNtWkU65b5VNq"/>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="privacy-nav-about">
                <Info className="h-4 w-4 mr-1" data-spec-id="hK8R6uqMC0FiFFmD"/>
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="privacy-nav-contact">
                <Mail className="h-4 w-4 mr-1" data-spec-id="nS3fkMsZO6oOLzpl"/>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-spec-id="privacy-main-content">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" data-spec-id="privacy-content-card">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center" data-spec-id="privacy-title">
            Privacy Policy
          </h1>
          
          <div className="prose max-w-none" data-spec-id="privacy-policy-content">
            <p className="text-lg text-gray-700 mb-6" data-spec-id="privacy-last-updated">
              <strong data-spec-id="yTXGXcdYITXGFU2o">Last updated:</strong> {new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}
            </p>

            <section className="mb-8" data-spec-id="privacy-intro-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-intro-title">Introduction</h2>
              <p className="text-gray-700 mb-4" data-spec-id="privacy-intro-description">
                CalcSuites ("we", "our", or "us") operates the calcsuites.store website (the "Service"). 
                This page informs you of our policies regarding the collection, use, and disclosure of 
                personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-gray-700" data-spec-id="privacy-intro-commitment">
                We are committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, and safeguard your information when you visit our website and use our calculators.
              </p>
            </section>

            <section className="mb-8" data-spec-id="privacy-collection-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-collection-title">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3" data-spec-id="privacy-collection-automatic-title">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2" data-spec-id="privacy-collection-automatic-list">
                <li data-spec-id="lI3Cb5xk0RHa5OGq">IP address and general location information</li>
                <li data-spec-id="iBAtFG5B83PRkyJh">Browser type and version</li>
                <li data-spec-id="rCFWlTUPmyITPxTm">Device information (mobile, desktop, screen size)</li>
                <li data-spec-id="BBS3citMF19XpAh5">Pages visited and time spent on our website</li>
                <li data-spec-id="F46x2BtS1HhQeOp4">Referring website information</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3" data-spec-id="privacy-collection-voluntary-title">Voluntarily Provided Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2" data-spec-id="privacy-collection-voluntary-list">
                <li data-spec-id="ILpNP3gexuwXaHTQ">Contact form submissions (name, email, message)</li>
                <li data-spec-id="qMik4Uno6cA29DnP">Calculator inputs (for calculation purposes only - not stored)</li>
                <li data-spec-id="0X1vSbWHKMH3FMVW">Feedback or support communications</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="privacy-usage-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-usage-title">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="privacy-usage-list">
                <li data-spec-id="kemTBLMoyWh3vA68">To provide and maintain our calculator services</li>
                <li data-spec-id="D2hRAJZQepFwNBLQ">To improve our website functionality and user experience</li>
                <li data-spec-id="xsKUdF8fD3rshBae">To respond to your inquiries and support requests</li>
                <li data-spec-id="sMWp7mdJIYhdIcR3">To analyze website usage and optimize performance</li>
                <li data-spec-id="u0Utwf5bUBpPtcjO">To display relevant advertisements through Google AdSense</li>
                <li data-spec-id="UvxqBFpJespsJo1S">To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="privacy-cookies-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-cookies-title">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4" data-spec-id="privacy-cookies-description">
                We use cookies and similar tracking technologies to enhance your browsing experience:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="privacy-cookies-list">
                <li data-spec-id="1v50qXNK0rwkd1Pi"><strong data-spec-id="6DmLDlSLtnGRpgGo">Essential Cookies:</strong> Required for basic website functionality</li>
                <li data-spec-id="aZmM76EoCBWzkEHC"><strong data-spec-id="6ssq2Iy9j7bzzivj">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li data-spec-id="8xjIfEThz0CyZWGk"><strong data-spec-id="VmKB0j0PeSbIyYQ9">Advertising Cookies:</strong> Used by Google AdSense to display relevant ads</li>
              </ul>
              <p className="text-gray-700 mt-4" data-spec-id="privacy-cookies-control">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8" data-spec-id="privacy-adsense-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-adsense-title">Google AdSense</h2>
              <p className="text-gray-700 mb-4" data-spec-id="privacy-adsense-description">
                Our website uses Google AdSense to display advertisements. Google AdSense uses cookies 
                to serve ads based on your prior visits to our website or other websites.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="privacy-adsense-list">
                <li data-spec-id="ydl1dmrjfQIaSo3P">Google uses the DoubleClick cookie to enable it and its partners to serve ads based on your visits to our sites and/or other sites on the Internet</li>
                <li data-spec-id="LVRqulRORNEDiCtn">You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:text-blue-800" data-spec-id="3IEVQ9bg5rCgVPc4">Google Ad Settings</a></li>
                <li data-spec-id="MkYYBPKeI9RzsHWk">You can also opt out of Google's use of cookies by visiting <a href="https://www.google.com/policies/technologies/ads/" className="text-blue-600 hover:text-blue-800" data-spec-id="4tgnDKphcwW34Iwv">Google's Ads Settings</a></li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="privacy-sharing-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-sharing-title">Information Sharing</h2>
              <p className="text-gray-700 mb-4" data-spec-id="privacy-sharing-description">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="privacy-sharing-list">
                <li data-spec-id="CQpywmLshZiDvSTX">With your explicit consent</li>
                <li data-spec-id="pRf7dn8V1bQI8Ob4">To comply with legal requirements</li>
                <li data-spec-id="2kvOSXwmZoLlsTct">To protect our rights and safety</li>
                <li data-spec-id="az69hmLMBZwbmatu">With service providers (like Google AdSense) as described in this policy</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="privacy-security-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-security-title">Data Security</h2>
              <p className="text-gray-700" data-spec-id="privacy-security-description">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </section>

            <section className="mb-8" data-spec-id="privacy-rights-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-rights-title">Your Rights</h2>
              <p className="text-gray-700 mb-4" data-spec-id="privacy-rights-description">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2" data-spec-id="privacy-rights-list">
                <li data-spec-id="0tZitUKRLNk5FqsY">Access your personal information we hold</li>
                <li data-spec-id="3mu2MCsUtLvR9EKS">Request correction of inaccurate information</li>
                <li data-spec-id="TzhKZgVLj61v26Bn">Request deletion of your personal information</li>
                <li data-spec-id="3ciTOviqydkRlivp">Object to processing of your personal information</li>
                <li data-spec-id="0GWGgAE5CfVNSm6e">Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section className="mb-8" data-spec-id="privacy-contact-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-contact-title">Contact Us</h2>
              <p className="text-gray-700" data-spec-id="privacy-contact-description">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 mt-2" data-spec-id="privacy-contact-email">
                <strong data-spec-id="QoSUuZg5KoGWVZLo">Email:</strong> calcsuites@gmail.com
              </p>
              <p className="text-gray-700" data-spec-id="privacy-contact-website">
                <strong data-spec-id="KpD2sV39zdcpj7qB">Website:</strong> calcsuites.store
              </p>
            </section>

            <section data-spec-id="privacy-changes-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-spec-id="privacy-changes-title">Changes to This Policy</h2>
              <p className="text-gray-700" data-spec-id="privacy-changes-description">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>

      {}
      <footer className="bg-gray-900 text-white py-8" data-spec-id="privacy-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="privacy-footer-content">
          <div className="flex items-center justify-center mb-4" data-spec-id="privacy-footer-brand">
            <Calculator className="h-6 w-6 text-blue-400 mr-2" data-spec-id="privacy-footer-icon"/>
            <span className="text-xl font-bold" data-spec-id="privacy-footer-name">CalcSuites</span>
          </div>
          <p className="text-gray-400 mb-2" data-spec-id="privacy-footer-email">
            Email: calcsuites@gmail.com
          </p>
          <p className="text-gray-500 text-sm" data-spec-id="privacy-footer-copyright">
            &copy; 2024 CalcSuites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);
}
