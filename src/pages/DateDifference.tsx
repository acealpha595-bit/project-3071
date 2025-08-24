import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Calendar, ArrowLeft } from "lucide-react";
const DateDifference = ()=>{
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState<{
        years: number;
        months: number;
        days: number;
        totalDays: number;
        totalWeeks: number;
        totalHours: number;
    } | null>(null);
    const calculateDifference = ()=>{
        if (!startDate || !endDate) return;
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (start > end) {
            alert("Start date must be before end date!");
            return;
        }
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();
        if (days < 0) {
            months--;
            const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            days += lastMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalHours = totalDays * 24;
        setResult({
            years,
            months,
            days,
            totalDays,
            totalWeeks,
            totalHours
        });
    };
    const reset = ()=>{
        setStartDate("");
        setEndDate("");
        setResult(null);
    };
    const setTodayAsEnd = ()=>{
        const today = new Date().toISOString().split('T')[0];
        setEndDate(today);
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="date-difference-page">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="0ZZYr7cAczOKC5Oc">
          <div className="flex justify-between items-center h-16" data-spec-id="zwJvRrcpbylU1quo">
            <div className="flex items-center" data-spec-id="qt6aWDV3VAzMmPXl">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="Zlh29bLpzZfvxHGu"/>
              <h1 className="text-2xl font-bold text-gray-900" data-spec-id="DkBPiJlQz1A9HsFr">CalcHub Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="j4XEyMMqwTsNLd4W">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="IF3UYwsWBUrSNMit">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="PCd6B5G59MecV75N">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="6Zp45A2EA3rh3fZL">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8" data-spec-id="9a0asS25ALguA6U8">
        {}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6" data-spec-id="breadcrumb">
          <Link to="/" className="hover:text-blue-600" data-spec-id="ll75W5YIF7dcv3Wq">Home</Link>
          <span data-spec-id="UdmGsasCFF46LNwI">/</span>
          <span className="text-gray-900" data-spec-id="rKJChRbKs9ulcLAi">Date Difference Calculator</span>
        </div>

        {}
        <Button variant="outline" className="mb-6" asChild data-spec-id="back-button">
          <Link to="/" data-spec-id="4Rg2S9by2RjoySYg">
            <ArrowLeft className="h-4 w-4 mr-2" data-spec-id="TZvuu4pi33B0m9vf"/>
            Back to Calculators
          </Link>
        </Button>

        {}
        <div className="text-center mb-8" data-spec-id="page-title">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="oB2f2i2xcAIgsORO">Date Difference Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-spec-id="2rMuprxa7cFw7txU">
            Calculate the exact difference between two dates in years, months, days, 
            weeks, and hours. Perfect for planning and tracking time periods.
          </p>
        </div>

        {}
        <Card className="mb-8" data-spec-id="calculator-card">
          <CardHeader className="text-center" data-spec-id="6tRK7krnBq0JkmTj">
            <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" data-spec-id="dZjjjtMcPbwMHynE"/>
            <CardTitle className="text-2xl" data-spec-id="eIvLoB5cKBCrAnwS">Select Date Range</CardTitle>
            <CardDescription data-spec-id="TM74HgNVfOVNs46Y">
              Choose start and end dates to calculate the time difference
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" data-spec-id="TH0POuAhivn9ZDxx">
            <div className="grid md:grid-cols-2 gap-6" data-spec-id="aRRMatjlPhO7QxrZ">
              <div data-spec-id="zlc1cdfBsLpYF9UV">
                <Label htmlFor="startDate" className="text-lg font-medium" data-spec-id="97s7mAQJ9hGuFdhl">Start Date</Label>
                <Input id="startDate" type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="start-date-input"/>
              </div>
              
              <div data-spec-id="qLQVGhscrtHvfsEe">
                <Label htmlFor="endDate" className="text-lg font-medium" data-spec-id="lr4CJ3fCUttKoUtg">End Date</Label>
                <div className="flex gap-2 mt-2" data-spec-id="qYQU0WHPKjdCfErn">
                  <Input id="endDate" type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} className="text-lg p-3" data-spec-id="end-date-input"/>
                  <Button variant="outline" onClick={setTodayAsEnd} className="whitespace-nowrap" data-spec-id="today-button">
                    Today
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-spec-id="IgrEGQK83iQQjb4t">
              <Button onClick={calculateDifference} size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={!startDate || !endDate} data-spec-id="calculate-button">
                Calculate Difference
              </Button>
              <Button onClick={reset} size="lg" variant="outline" data-spec-id="reset-button">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {}
        {result && (<Card className="mb-8" data-spec-id="results-card">
            <CardHeader className="text-center" data-spec-id="HYex5LJ9XcHqmVyD">
              <CardTitle className="text-2xl text-blue-600" data-spec-id="paPlQJKH58YyzV48">Time Difference</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="zw940SVfgOasYpuB">
              <div className="grid md:grid-cols-3 gap-6 text-center mb-8" data-spec-id="LzpUBT98Rrpgvd02">
                <div className="bg-blue-50 rounded-lg p-6" data-spec-id="kH63DcgNrVIge7Pe">
                  <div className="text-3xl font-bold text-blue-600" data-spec-id="faQNVxLZqf6Xg7NB">{result.years}</div>
                  <div className="text-gray-600" data-spec-id="EELa233UyO7xUYjM">Years</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6" data-spec-id="SnYkv1kCBlXCBkR6">
                  <div className="text-3xl font-bold text-green-600" data-spec-id="o19cOKcrrxelO2bG">{result.months}</div>
                  <div className="text-gray-600" data-spec-id="bjnkAV9h9Fmdypri">Months</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6" data-spec-id="4hetohTJ2Y26Ce4T">
                  <div className="text-3xl font-bold text-purple-600" data-spec-id="o8I6jWcLagTAw9B3">{result.days}</div>
                  <div className="text-gray-600" data-spec-id="t8lTS2ROeIDziJhq">Days</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center" data-spec-id="918s9iCD7edYqIlL">
                <div className="p-4 bg-gray-50 rounded-lg" data-spec-id="AGdBxNzq4znDTvOf">
                  <div className="text-2xl font-bold text-gray-900" data-spec-id="LVzT8WXEbqtJV12T">{result.totalDays.toLocaleString()}</div>
                  <div className="text-gray-600" data-spec-id="4mPilEKcslUV2jLd">Total Days</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg" data-spec-id="DJLpXS0tujwVDW9b">
                  <div className="text-2xl font-bold text-gray-900" data-spec-id="Xzn3U1H4gWcPJkDC">{result.totalWeeks.toLocaleString()}</div>
                  <div className="text-gray-600" data-spec-id="kzuMKCz2yEHisAq8">Total Weeks</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg" data-spec-id="a1cfFvY2SY1kHULO">
                  <div className="text-2xl font-bold text-gray-900" data-spec-id="mqlBkqek26W1VxEE">{result.totalHours.toLocaleString()}</div>
                  <div className="text-gray-600" data-spec-id="uAS2NaTmlDxOw2hN">Total Hours</div>
                </div>
              </div>
            </CardContent>
          </Card>)}

        {}
        <div className="mb-8" data-spec-id="ad-banner">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="vMnpgs202qQxIJoI">
            <p className="text-gray-500" data-spec-id="fdxCSubUHurolI2G">Advertisement Banner (728x90)</p>
          </div>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-spec-id="seo-content">
          <Card data-spec-id="gbwg7Sk9Q23wnnK5">
            <CardHeader data-spec-id="9zpLn7nxeWlNQbbd">
              <CardTitle data-spec-id="xn045dzwxQwUdA64">How to Use the Date Difference Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600" data-spec-id="kzI3yb8RJdf1ebQH">
              <p data-spec-id="sf2Gc3uST6l4MZeF">
                Our date difference calculator helps you find the exact time between two dates. 
                Simply select your start date and end date, then click calculate to see the 
                difference in years, months, days, weeks, and hours.
              </p>
              <p data-spec-id="gI7lCVxGnAB2c3t1">
                This tool is perfect for calculating age, planning projects, tracking 
                milestones, or determining how much time has passed between important events. 
                The "Today" button lets you quickly set the end date to the current date.
              </p>
            </CardContent>
          </Card>
          
          <Card data-spec-id="yEKyw1HtomTVHaxz">
            <CardHeader data-spec-id="lcxDzbNjdmNsVn7B">
              <CardTitle data-spec-id="NRCwmLdaAVa8JVOX">Date Calculator Features</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="bTzckubJVIJBYjwR">
              <ul className="space-y-2 text-gray-600" data-spec-id="viE8GJALqVtcSTO8">
                <li className="flex items-center" data-spec-id="bAkvJKWrteiqWnHF">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="XMH2y2JipWm4iRwx"></span>
                  Precise date difference calculation
                </li>
                <li className="flex items-center" data-spec-id="foZz3rHffCb6WTmx">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="V7mTnvd9vNy6Y5r3"></span>
                  Multiple time unit results
                </li>
                <li className="flex items-center" data-spec-id="Sm0opNJlfY0uXRdW">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="AY7qZcKGZGBoYhbQ"></span>
                  Quick "Today" button
                </li>
                <li className="flex items-center" data-spec-id="YICT9eBKkBsx75jN">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="c43A0mI2dbFzpKwl"></span>
                  Easy date picker interface
                </li>
                <li className="flex items-center" data-spec-id="KF0sUr2FXEErSbtS">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="LmPgHn1jln5Az5jP"></span>
                  Mobile-friendly design
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {}
        <Card data-spec-id="related-calculators">
          <CardHeader data-spec-id="TNH79K8KUBq1qOaR">
            <CardTitle data-spec-id="KBE43HQhE6eorVtm">Related Date & Time Calculators</CardTitle>
            <CardDescription data-spec-id="Bh1laBqcdpQfscGs">Try these other useful date and time tools</CardDescription>
          </CardHeader>
          <CardContent data-spec-id="ITrWYL0loazILq0L">
            <div className="grid md:grid-cols-3 gap-4" data-spec-id="C3kUAIghGgcjbhxh">
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="pOON2qMIRkDwl2Ly">
                <Link to="/age-calculator" data-spec-id="CI8b3VoL6b6Od8RW">
                  <Calendar className="h-6 w-6 mb-2" data-spec-id="Qrad8W5fbuYKSl0r"/>
                  Age Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="4y1hxtaIuRptAeqf">
                <Link to="/pregnancy-calculator" data-spec-id="jIMCfmjbGTJ1zSNM">
                  <Calendar className="h-6 w-6 mb-2" data-spec-id="MqBIrTAFhG4LX7kV"/>
                  Pregnancy Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="JNNB7AMRC8sXrc8r">
                <Link to="/percentage-calculator" data-spec-id="GbNQh6WwBPnqvAhu">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="fzLQxONowWn3Djac"/>
                  Percentage Calculator
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
};
export default DateDifference;
