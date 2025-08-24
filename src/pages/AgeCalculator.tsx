import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Calendar, ArrowLeft } from "lucide-react";
const AgeCalculator = ()=>{
    const [birthDate, setBirthDate] = useState("");
    const [result, setResult] = useState<{
        years: number;
        months: number;
        days: number;
        totalDays: number;
        totalMonths: number;
    } | null>(null);
    const calculateAge = ()=>{
        if (!birthDate) return;
        const birth = new Date(birthDate);
        const today = new Date();
        if (birth > today) {
            alert("Birth date cannot be in the future!");
            return;
        }
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();
        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
        const totalMonths = years * 12 + months;
        setResult({
            years,
            months,
            days,
            totalDays,
            totalMonths
        });
    };
    const reset = ()=>{
        setBirthDate("");
        setResult(null);
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="age-calculator-page">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="C9VGlTW7p37Eb12B">
          <div className="flex justify-between items-center h-16" data-spec-id="MADfDoxhOO72Isn9">
            <div className="flex items-center" data-spec-id="uiY6ku7LWfuvZGIe">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="zQaPoESZZrinsLc7"/>
              <h1 className="text-2xl font-bold text-gray-900" data-spec-id="eG8WraLGbESGkghI">CalcHub Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="eo1Mbiw21jrJXJkR">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="vnqL6dGwqvuqqHxh">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="RVc9z6mmq02Op86Y">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="xUtSeO3Sa5D0K3lD">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8" data-spec-id="NRZDo8Js3pcLrFKF">
        {}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6" data-spec-id="breadcrumb">
          <Link to="/" className="hover:text-blue-600" data-spec-id="2AnUTHL6zVzCpjtp">Home</Link>
          <span data-spec-id="y2G12l4EDbgsZPD4">/</span>
          <span className="text-gray-900" data-spec-id="bPrp5wJDwSZUb6nY">Age Calculator</span>
        </div>

        {}
        <Button variant="outline" className="mb-6" asChild data-spec-id="back-button">
          <Link to="/" data-spec-id="NlpN3y1wf789NlKC">
            <ArrowLeft className="h-4 w-4 mr-2" data-spec-id="zsVB0yQXTxpBEQ01"/>
            Back to Calculators
          </Link>
        </Button>

        {}
        <div className="text-center mb-8" data-spec-id="page-title">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="PO1w9seIu2qs8ZHJ">Age Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-spec-id="Dptl3SFuRh1cQl6Z">
            Calculate your exact age in years, months, and days. Find out how many days 
            you've been alive and get detailed age statistics.
          </p>
        </div>

        {}
        <Card className="mb-8" data-spec-id="calculator-card">
          <CardHeader className="text-center" data-spec-id="Iq0Vp3yllih1J5xz">
            <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" data-spec-id="a5dBeyFiR0RJUCC9"/>
            <CardTitle className="text-2xl" data-spec-id="I0vmcBmTUqG7c46F">Enter Your Birth Date</CardTitle>
            <CardDescription data-spec-id="LXCkWKerNMEx8IEd">
              Select your birth date to calculate your exact age
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" data-spec-id="Hjv4IGJiDMQR0GO0">
            <div className="max-w-md mx-auto" data-spec-id="7o3I9f26hAdjW7if">
              <Label htmlFor="birthdate" className="text-lg font-medium" data-spec-id="w7xapYf9w3LzX6uj">Birth Date</Label>
              <Input id="birthdate" type="date" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="birth-date-input"/>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-spec-id="eTzIY4s74gltSphT">
              <Button onClick={calculateAge} size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={!birthDate} data-spec-id="calculate-button">
                Calculate Age
              </Button>
              <Button onClick={reset} size="lg" variant="outline" data-spec-id="reset-button">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {}
        {result && (<Card className="mb-8" data-spec-id="results-card">
            <CardHeader className="text-center" data-spec-id="urNuS6ixcFUep0LX">
              <CardTitle className="text-2xl text-blue-600" data-spec-id="8cg5R6sv9LEaXtNh">Your Age</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="2hO8NRwxGCDLx0HI">
              <div className="grid md:grid-cols-3 gap-6 text-center" data-spec-id="mySk2wW84zHXHI86">
                <div className="bg-blue-50 rounded-lg p-6" data-spec-id="LlRHJLav1m7WBEJv">
                  <div className="text-3xl font-bold text-blue-600" data-spec-id="3m6ApiXWWgkChuKG">{result.years}</div>
                  <div className="text-gray-600" data-spec-id="iVf0a2AnSNaVMvnK">Years</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6" data-spec-id="PU5rnMVwHwoJkVKv">
                  <div className="text-3xl font-bold text-green-600" data-spec-id="pjRTtvXR6wqwxhLp">{result.months}</div>
                  <div className="text-gray-600" data-spec-id="cgbkNsqTsTiqcwxJ">Months</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6" data-spec-id="7OJHqiBytTVZxSD2">
                  <div className="text-3xl font-bold text-purple-600" data-spec-id="dvvkOr7Zdxl7UEXl">{result.days}</div>
                  <div className="text-gray-600" data-spec-id="48ncfSFWRhqrvZNC">Days</div>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-6" data-spec-id="JESSAjU90xzDnJBv">
                <div className="text-center p-4 bg-gray-50 rounded-lg" data-spec-id="nSuDFwmNheaMfRRt">
                  <div className="text-2xl font-bold text-gray-900" data-spec-id="I5x2PJCP8VENyNCp">{result.totalDays.toLocaleString()}</div>
                  <div className="text-gray-600" data-spec-id="ehnaHSWUZumMogB0">Total Days Lived</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg" data-spec-id="988tjUJdkO688TXS">
                  <div className="text-2xl font-bold text-gray-900" data-spec-id="SERa6qydpWxIoW21">{result.totalMonths}</div>
                  <div className="text-gray-600" data-spec-id="65uhPL8RncQm54ts">Total Months</div>
                </div>
              </div>
            </CardContent>
          </Card>)}

        {}
        <div className="mb-8" data-spec-id="ad-banner">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="zy4i6H9aFImTftp1">
            <p className="text-gray-500" data-spec-id="EsnjLz2u29HIR3L9">Advertisement Banner (728x90)</p>
          </div>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-spec-id="seo-content">
          <Card data-spec-id="X4oDNyZ5oV8WUgLQ">
            <CardHeader data-spec-id="MSPOAzT0phxz4Qru">
              <CardTitle data-spec-id="BHb2gHPEXuzxqy3e">How to Use the Age Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600" data-spec-id="cYWpjZxgZlZEaYtL">
              <p data-spec-id="nZAFnIzEscCiFhWw">
                Our age calculator is simple to use. Just enter your birth date in the date picker 
                above and click "Calculate Age". The calculator will instantly show your exact age 
                in years, months, and days.
              </p>
              <p data-spec-id="5gTfpSktyPHNzIP2">
                You'll also see additional statistics like the total number of days you've been 
                alive and your age in total months. This information can be useful for various 
                purposes including legal documents, insurance, and personal milestones.
              </p>
            </CardContent>
          </Card>
          
          <Card data-spec-id="BKwTnAbOOR2cjcSG">
            <CardHeader data-spec-id="fQriVR9nzue4A96X">
              <CardTitle data-spec-id="KQEuWA5u9uLZmceI">Age Calculator Features</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="wDq2uNAJrKkZSSqQ">
              <ul className="space-y-2 text-gray-600" data-spec-id="fAlgOFydT85s7NoQ">
                <li className="flex items-center" data-spec-id="B6r4CxRpcCD2cKKF">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="s8Xxl1fwcuF7YZOX"></span>
                  Accurate age calculation in years, months, and days
                </li>
                <li className="flex items-center" data-spec-id="KUvBwkwMAeykpEgr">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="vFcFXnyiJftNpCo8"></span>
                  Total days lived calculation
                </li>
                <li className="flex items-center" data-spec-id="hRNvhl6X7IUEsBlH">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="TUKX47rj9FiksMfD"></span>
                  Age in total months
                </li>
                <li className="flex items-center" data-spec-id="43eYvXHkGlRoXVal">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="Uc9uRY2aicwpZjYN"></span>
                  Mobile-friendly interface
                </li>
                <li className="flex items-center" data-spec-id="z5hYcJtE1sY7ro7G">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="GdQxG935gakodazl"></span>
                  Free and no registration required
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {}
        <Card data-spec-id="related-calculators">
          <CardHeader data-spec-id="9q3JCjS2c4Z5RA8E">
            <CardTitle data-spec-id="MIdIqI2JqX0NMfc1">Related Calculators</CardTitle>
            <CardDescription data-spec-id="Hr7Np2OwRoskDpNO">Try these other useful calculators</CardDescription>
          </CardHeader>
          <CardContent data-spec-id="CGp8MtjpKiDgxEGx">
            <div className="grid md:grid-cols-3 gap-4" data-spec-id="UuHwqrwA5A4nk6EH">
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="B7npG05sJVWZ8Hs9">
                <Link to="/date-difference" data-spec-id="wi98yPdOPjbOHGiV">
                  <Calendar className="h-6 w-6 mb-2" data-spec-id="1xd2dtLdi1yox1Vn"/>
                  Date Difference
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="fgaJNLMtjcNh8IXq">
                <Link to="/pregnancy-calculator" data-spec-id="Rdz7qTadTJrzh7vV">
                  <Calendar className="h-6 w-6 mb-2" data-spec-id="Ub7DTljWsiaB3eZx"/>
                  Pregnancy Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="bElKGasyEaMV7CzU">
                <Link to="/bmi-calculator" data-spec-id="DhHYEDBxg8tL8CRH">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="Yz8ZDrevgM8uZ3L6"/>
                  BMI Calculator
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
};
export default AgeCalculator;
