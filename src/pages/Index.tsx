import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Calendar, DollarSign, Scale, TrendingUp, Baby, Percent, Thermometer } from "lucide-react";
const Index = ()=>{
    const calculators = [
        {
            title: "Age Calculator",
            description: "Calculate your exact age in years, months, and days",
            icon: Calendar,
            path: "/age-calculator",
            keywords: "age calculator, birthday calculator, years months days"
        },
        {
            title: "BMI Calculator",
            description: "Calculate Body Mass Index and health category",
            icon: Scale,
            path: "/bmi-calculator",
            keywords: "BMI calculator, body mass index, health calculator"
        },
        {
            title: "Loan Calculator",
            description: "Calculate monthly payments for loans and mortgages",
            icon: DollarSign,
            path: "/loan-calculator",
            keywords: "loan calculator, mortgage calculator, monthly payment"
        },
        {
            title: "Currency Converter",
            description: "Convert currencies with live exchange rates",
            icon: TrendingUp,
            path: "/currency-converter",
            keywords: "currency converter, exchange rates, money converter"
        },
        {
            title: "Date Difference",
            description: "Calculate days between two dates",
            icon: Calendar,
            path: "/date-difference",
            keywords: "date difference calculator, days between dates"
        },
        {
            title: "Pregnancy Calculator",
            description: "Calculate due date and pregnancy timeline",
            icon: Baby,
            path: "/pregnancy-calculator",
            keywords: "pregnancy calculator, due date calculator, pregnancy timeline"
        },
        {
            title: "Percentage Calculator",
            description: "Calculate percentages, increases, and decreases",
            icon: Percent,
            path: "/percentage-calculator",
            keywords: "percentage calculator, percent calculator"
        },
        {
            title: "Temperature Converter",
            description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine scales",
            icon: Thermometer,
            path: "/temperature-converter",
            keywords: "temperature converter, celsius fahrenheit kelvin"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="app-root">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="WhxXc2g4y5X4KxHq">
          <div className="flex justify-between items-center h-16" data-spec-id="nQLkGwHjewySZUwo">
            <div className="flex items-center" data-spec-id="XfGjoDYQ4fEC0Ny1">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="mkfka3NqRG7sjFs1"/>
              <div data-spec-id="brand-text-section">
                <h1 className="text-2xl font-bold text-gray-900" data-spec-id="nstMDOeDzROrLv5d">CalcSuites</h1>
                <p className="text-xs text-gray-500" data-spec-id="brand-slogan">Your Complete Calculator Toolkit</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="navigation">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="tKn5VFMMNfnpcwJL">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="JK8qNCvUgBwe5Eom">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="v2af91h8p1t9HW1z">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {}
      <section className="bg-white border-b shadow-sm py-4" data-spec-id="quick-calculator-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="calculator-links-container">
          <div className="flex gap-1 justify-center overflow-x-auto scrollbar-hide" data-spec-id="calculator-buttons-grid">
            {calculators.map((calc, index)=>(<Button key={index} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white transition-colors whitespace-nowrap flex-shrink-0 text-xs px-2 py-1" asChild data-spec-id={`quick-calc-btn-${index}`}>
                <Link to={calc.path} className="flex items-center gap-1" data-spec-id={`quick-calc-link-${index}`}>
                  <calc.icon className="h-3 w-3" data-spec-id={`quick-calc-icon-${index}`}/>
                  <span className="hidden md:inline" data-spec-id={`quick-calc-text-${index}`}>{calc.title}</span>
                  <span className="md:hidden" data-spec-id={`quick-calc-text-mobile-${index}`}>
                    {calc.title.split(' ')[0]}
                  </span>
                </Link>
              </Button>))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-spec-id="hero-section">
        <div className="max-w-7xl mx-auto text-center" data-spec-id="vbTqhUwz2KTVFpnQ">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" data-spec-id="vhHOJm6mBjTeWV7k">
            Free Online Calculators
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" data-spec-id="AmeUFk9qjC10Hzjj">
            Access a comprehensive collection of free online calculators for all your daily needs. 
            From age and BMI calculations to loan payments and currency conversions - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-spec-id="kIgadi5sm1BGm5ky">
            <button onClick={()=>{
        document.getElementById('calculators-section')?.scrollIntoView({
            behavior: 'smooth'
        });
    }} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg" data-spec-id="buck6lwAOjoQ0RyD">
              Explore Calculators
            </button>
            <Link to="/about" className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg inline-block text-center no-underline" data-spec-id="GFDWD1i3Zs3lbR0S">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {}
      <div className="max-w-7xl mx-auto px-4 py-8" data-spec-id="ad-banner-top">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="uaqn72AXby1knV0W">
          <p className="text-gray-500" data-spec-id="McusP5DME3zVI961">Advertisement Banner (728x90)</p>
        </div>
      </div>

      {}
      <section id="calculators-section" className="py-16 px-4 sm:px-6 lg:px-8" data-spec-id="calculators-section">
        <div className="max-w-7xl mx-auto" data-spec-id="FZvqUoTmtULgjyjn">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-spec-id="fXLB1kvn2jUEDNIH">
            Popular Online Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-spec-id="lmtWX1BFay7fAYWG">
            {calculators.map((calc, index)=>(<Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group" data-spec-id={`calculator-card-${index}`}>
                <Link to={calc.path} className="block" data-spec-id="mc8189MwP58ldTry">
                  <CardHeader className="text-center" data-spec-id="4PErXBWEGpxfykgs">
                    <calc.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform"/>
                    <CardTitle className="text-lg" data-spec-id="Ug6VcnmDtQ1ZtF5Q">{calc.title}</CardTitle>
                    <CardDescription data-spec-id="zP5eNUDx28KaHd9h">{calc.description}</CardDescription>
                  </CardHeader>
                  <CardContent data-spec-id="JMf63syCPbqOleq1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" data-spec-id="Qp5JDalAnQrmokeF">
                      Use Calculator
                    </Button>
                  </CardContent>
                </Link>
              </Card>))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-spec-id="seo-content">
        <div className="max-w-7xl mx-auto" data-spec-id="NY0HkHNorxyjlYbc">
          <div className="grid md:grid-cols-2 gap-12" data-spec-id="LXyqrSYS11Wra8Gl">
            <div data-spec-id="SY3PPLeRmicpbs1l">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-spec-id="kZNZl8v90cDdVPw6">
                Why Choose CalcSuites?
              </h2>
              <div className="space-y-4 text-gray-600" data-spec-id="Fd0v9GtMV4JZZs4y">
                <p data-spec-id="rXru7Zr9wOlljKcR">
                  CalcSuites offers the most comprehensive collection of free online calculators 
                  designed to make your daily calculations quick and accurate. Whether you're 
                  planning finances, tracking health metrics, or converting units, our tools 
                  provide instant results.
                </p>
                <p data-spec-id="VpE8hdJnkcslLybJ">
                  All our calculators are mobile-friendly, require no downloads, and work 
                  instantly in your browser. We prioritize accuracy, speed, and user experience 
                  to help you get the information you need when you need it.
                </p>
              </div>
            </div>
            <div data-spec-id="ZIRG4Iwg0Tb9L0sI">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" data-spec-id="gFEvSZPpDq7KwXjL">
                Featured Calculator Categories
              </h3>
              <ul className="space-y-3 text-gray-600" data-spec-id="DkrHhKLTE5A4mrPq">
                <li className="flex items-center" data-spec-id="KAVD5IuG4xAQnYxx">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="mvNeHe32pVSKvBTe"></span>
                  Financial Calculators - Loans, mortgages, and investments
                </li>
                <li className="flex items-center" data-spec-id="FGVIwNTFoTTl6zrb">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="lHcbGPzIGYUTV5ma"></span>
                  Health & Fitness - BMI, pregnancy, and wellness tools
                </li>
                <li className="flex items-center" data-spec-id="ryXoyWYkoQDmsFOE">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="4HqP2LMdSeokSNub"></span>
                  Date & Time - Age, date differences, and timelines
                </li>
                <li className="flex items-center" data-spec-id="0XAiTsN3dZEdnLYg">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="GHzDIUQoTePZHZC2"></span>
                  Unit Conversions - Length, weight, temperature, and more
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      <div className="max-w-7xl mx-auto px-4 py-8" data-spec-id="ad-banner-bottom">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="oTumKUANgbrsbjqd">
          <p className="text-gray-500" data-spec-id="0nGJcbdrUEHtcxms">Advertisement Banner (300x250)</p>
        </div>
      </div>

      {}
      <footer className="bg-gray-900 text-white py-12" data-spec-id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="UgePkCQThaNunTQv">
          <div className="grid md:grid-cols-4 gap-8" data-spec-id="V22zBHmhs9AbtoSL">
            <div data-spec-id="MI2mFRlAWsFlArjR">
              <div className="flex items-center mb-4" data-spec-id="1eld8W8VHK3lsT72">
                <Calculator className="h-6 w-6 text-blue-400 mr-2" data-spec-id="TLzHJ6tz2CwKLAa3"/>
                <span className="text-xl font-bold" data-spec-id="cKvak158517YooMf">CalcSuites</span>
              </div>
              <p className="text-gray-400" data-spec-id="IId5HQw8VOwD7DOG">
                Your Complete Calculator Toolkit
              </p>
              <p className="text-gray-400 text-sm mt-2" data-spec-id="footer-contact-email">
                Contact: calcsuites@gmail.com
              </p>
            </div>
            <div data-spec-id="1GiNZEJuMGzClH53">
              <h4 className="text-lg font-semibold mb-4" data-spec-id="xeZswQyxc6Ftz6kt">Popular Calculators</h4>
              <ul className="space-y-2 text-gray-400" data-spec-id="8XfoFoPLcYA8fd4t">
                <li data-spec-id="VLbtrQ8oQ3NW3Qoq"><Link to="/age-calculator" className="hover:text-blue-400" data-spec-id="wxi484e59OyYGUf5">Age Calculator</Link></li>
                <li data-spec-id="RcZXFgNMBssNSwaQ"><Link to="/bmi-calculator" className="hover:text-blue-400" data-spec-id="HbBZlSgxyicN1nRD">BMI Calculator</Link></li>
                <li data-spec-id="MByoeZRtVsK6MCil"><Link to="/loan-calculator" className="hover:text-blue-400" data-spec-id="TS1HlKaubXINPFlg">Loan Calculator</Link></li>
                <li data-spec-id="cOnMcyJPukWVywUU"><Link to="/currency-converter" className="hover:text-blue-400" data-spec-id="FOJx49RlTcNFf6fY">Currency Converter</Link></li>
              </ul>
            </div>
            <div data-spec-id="lFfND2laf8uco4QN">
              <h4 className="text-lg font-semibold mb-4" data-spec-id="vbvjfPLBKfDzit23">More Tools</h4>
              <ul className="space-y-2 text-gray-400" data-spec-id="TACZBGxQR4xm4u8a">
                <li data-spec-id="j7d4Nb6HDGBxuUeY"><Link to="/date-difference" className="hover:text-blue-400" data-spec-id="8VTAfLstPB0IEvJD">Date Difference</Link></li>
                <li data-spec-id="H8FhQuJOT0tz3h47"><Link to="/pregnancy-calculator" className="hover:text-blue-400" data-spec-id="TZdQd4xPORBFlrIE">Pregnancy Calculator</Link></li>
                <li data-spec-id="LJgtl8M40RGRTLvk"><Link to="/percentage-calculator" className="hover:text-blue-400" data-spec-id="S8Q2mHjZrT1UwhlF">Percentage Calculator</Link></li>
                <li data-spec-id="sJIxnebHYfSvqvda"><Link to="/temperature-converter" className="hover:text-blue-400" data-spec-id="j1rq4NuMD3zwjTjw">Temperature Converter</Link></li>
              </ul>
            </div>
            <div data-spec-id="XItrBA70f7PzeqO8">
              <h4 className="text-lg font-semibold mb-4" data-spec-id="8B6bV0euKXxjt4X1">Company</h4>
              <ul className="space-y-2 text-gray-400" data-spec-id="9T42oh8z47KKWhLN">
                <li data-spec-id="ilYQ5UIgfdJ41mUE"><Link to="/about" className="hover:text-blue-400" data-spec-id="9rXLqRx4J9fNNMjT">About Us</Link></li>
                <li data-spec-id="rdHruRo3sjg4X6gT"><Link to="/contact" className="hover:text-blue-400" data-spec-id="E68jlGkjVORyq82H">Contact</Link></li>
                <li data-spec-id="gR7GaBX4VLVt6jzU"><Link to="/privacy" className="hover:text-blue-400" data-spec-id="LPlsqrnHpeSExvuz">Privacy Policy</Link></li>
                <li data-spec-id="z3duXnawdszdB4fR"><Link to="/terms" className="hover:text-blue-400" data-spec-id="Ka7wFCYPQrStw1dz">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-spec-id="0nxO8wNBduqgj8pP">
            <p data-spec-id="8M8aIdkq2KLJek72">&copy; 2024 CalcSuites. All rights reserved. Free online calculators for everyone.</p>
            <p className="text-sm text-gray-500 mt-2" data-spec-id="disclaimer-text">All calculators are provided for informational purposes only. Results should be verified for critical decisions.</p>
          </div>
        </div>
      </footer>
    </div>);
};
export default Index;
