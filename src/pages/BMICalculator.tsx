import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Scale, ArrowLeft } from "lucide-react";
const BMICalculator = ()=>{
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [weightUnit, setWeightUnit] = useState("kg");
    const [heightUnit, setHeightUnit] = useState("cm");
    const [result, setResult] = useState<{
        bmi: number;
        category: string;
        color: string;
        description: string;
    } | null>(null);
    const getBMICategory = (bmi: number)=>{
        if (bmi < 18.5) {
            return {
                category: "Underweight",
                color: "text-blue-600",
                description: "You may need to gain weight. Consider consulting with a healthcare provider."
            };
        } else if (bmi < 25) {
            return {
                category: "Normal weight",
                color: "text-green-600",
                description: "You have a healthy weight for your height. Great job!"
            };
        } else if (bmi < 30) {
            return {
                category: "Overweight",
                color: "text-yellow-600",
                description: "You may want to consider a balanced diet and exercise routine."
            };
        } else {
            return {
                category: "Obese",
                color: "text-red-600",
                description: "Consider consulting with a healthcare provider for personalized advice."
            };
        }
    };
    const calculateBMI = ()=>{
        if (!weight || !height) return;
        let weightInKg = parseFloat(weight);
        let heightInM = parseFloat(height);
        if (weightUnit === "lbs") {
            weightInKg = weightInKg * 0.453592;
        }
        if (heightUnit === "cm") {
            heightInM = heightInM / 100;
        } else if (heightUnit === "ft") {
            heightInM = heightInM * 0.3048;
        } else if (heightUnit === "in") {
            heightInM = heightInM * 0.0254;
        }
        const bmi = weightInKg / (heightInM * heightInM);
        const categoryInfo = getBMICategory(bmi);
        setResult({
            bmi: Math.round(bmi * 10) / 10,
            ...categoryInfo
        });
    };
    const reset = ()=>{
        setWeight("");
        setHeight("");
        setResult(null);
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="bmi-calculator-page">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="ptx0FBiNRnW2bzBF">
          <div className="flex justify-between items-center h-16" data-spec-id="JYro1wic837nGsN1">
            <div className="flex items-center" data-spec-id="uaSZRAxo3AiScxgt">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="o8YSTN2cfdF7AHC9"/>
              <h1 className="text-2xl font-bold text-gray-900" data-spec-id="tIMiQjztkk5J2DFl">CalcHub Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="0gMTv6rMjTWpphAx">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="38KcmqHSvk40Knd0">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="RtSV008OAjn5t4sJ">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="dMLInRgsFVv5LVBn">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8" data-spec-id="JiOZdajzt5LITMAX">
        {}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6" data-spec-id="breadcrumb">
          <Link to="/" className="hover:text-blue-600" data-spec-id="HU09bSzMhDKgfMDH">Home</Link>
          <span data-spec-id="ZtVrsM100AIqccgW">/</span>
          <span className="text-gray-900" data-spec-id="pdC6IKasxe7YtFMu">BMI Calculator</span>
        </div>

        {}
        <Button variant="outline" className="mb-6" asChild data-spec-id="back-button">
          <Link to="/" data-spec-id="QWCDXkJEBcIbkym7">
            <ArrowLeft className="h-4 w-4 mr-2" data-spec-id="fZty1OHQCghrIwcI"/>
            Back to Calculators
          </Link>
        </Button>

        {}
        <div className="text-center mb-8" data-spec-id="page-title">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="GBT4lNT3kfMXr99E">BMI Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-spec-id="Vbia83LhQN8Z2ZOE">
            Calculate your Body Mass Index (BMI) to assess your weight category 
            and get insights about your health status.
          </p>
        </div>

        {}
        <Card className="mb-8" data-spec-id="calculator-card">
          <CardHeader className="text-center" data-spec-id="wNuitbBHbvGATzao">
            <Scale className="h-16 w-16 text-blue-600 mx-auto mb-4" data-spec-id="J9EE24NRbuxLoSKD"/>
            <CardTitle className="text-2xl" data-spec-id="dbxcCBJ18ATHnmIE">Enter Your Measurements</CardTitle>
            <CardDescription data-spec-id="vY8zxi0kamtigCPi">
              Input your weight and height to calculate your BMI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" data-spec-id="Kjxa2ZP9fLYOnhr4">
            <div className="grid md:grid-cols-2 gap-6" data-spec-id="WPftiVrwRMJmECNU">
              {}
              <div data-spec-id="OyTOIVpGa8azCpzS">
                <Label htmlFor="weight" className="text-lg font-medium" data-spec-id="QXgvd1BZq6JalPDe">Weight</Label>
                <div className="flex mt-2" data-spec-id="qxWnOnckqNWBvxy5">
                  <Input id="weight" type="number" placeholder="Enter weight" value={weight} onChange={(e)=>setWeight(e.target.value)} className="text-lg p-3 rounded-r-none" data-spec-id="weight-input"/>
                  <Select value={weightUnit} onValueChange={setWeightUnit} data-spec-id="a9dE9atHLDwkXaJA">
                    <SelectTrigger className="w-20 rounded-l-none border-l-0" data-spec-id="weight-unit">
                      <SelectValue data-spec-id="XKSbYLicKaOGlnOk"/>
                    </SelectTrigger>
                    <SelectContent data-spec-id="thxJvHIwDN6UW82T">
                      <SelectItem value="kg" data-spec-id="5EwFE3va0rtew7hr">kg</SelectItem>
                      <SelectItem value="lbs" data-spec-id="idWtjfq43ijhfF7k">lbs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {}
              <div data-spec-id="emrXXZYKHvuTu5yi">
                <Label htmlFor="height" className="text-lg font-medium" data-spec-id="jssn6XZg3Bv32bo5">Height</Label>
                <div className="flex mt-2" data-spec-id="80yUIjh7YhwyVFEQ">
                  <Input id="height" type="number" placeholder="Enter height" value={height} onChange={(e)=>setHeight(e.target.value)} className="text-lg p-3 rounded-r-none" data-spec-id="height-input"/>
                  <Select value={heightUnit} onValueChange={setHeightUnit} data-spec-id="zXtUVuhoYnnWwpNH">
                    <SelectTrigger className="w-20 rounded-l-none border-l-0" data-spec-id="height-unit">
                      <SelectValue data-spec-id="BDChj5pDaVjFfsbx"/>
                    </SelectTrigger>
                    <SelectContent data-spec-id="g9I0IlMA1PbfD5LL">
                      <SelectItem value="cm" data-spec-id="FQ0PvvcP992YcSlr">cm</SelectItem>
                      <SelectItem value="ft" data-spec-id="FFUZBdouMtXM0aHX">ft</SelectItem>
                      <SelectItem value="in" data-spec-id="VfW3hi8lTqHxRFZW">in</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-spec-id="eMhgFgtyXEkCGoz0">
              <Button onClick={calculateBMI} size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={!weight || !height} data-spec-id="calculate-button">
                Calculate BMI
              </Button>
              <Button onClick={reset} size="lg" variant="outline" data-spec-id="reset-button">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {}
        {result && (<Card className="mb-8" data-spec-id="results-card">
            <CardHeader className="text-center" data-spec-id="QE1dyDG6Yc8bc6n1">
              <CardTitle className="text-2xl text-blue-600" data-spec-id="l6M29SxCVRVDxVHd">Your BMI Result</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="ac7INWzDJOQD4Jio">
              <div className="text-center mb-6" data-spec-id="R6iYWwmZLfStt8wW">
                <div className="text-6xl font-bold text-blue-600 mb-2" data-spec-id="XYLstFUGPO7mi48c">{result.bmi}</div>
                <div className={`text-2xl font-semibold ${result.color} mb-2`} data-spec-id="VHvUtDG1UZWvxV9i">{result.category}</div>
                <p className="text-gray-600 max-w-md mx-auto" data-spec-id="HqJtqOROxDUAOQtU">{result.description}</p>
              </div>
              
              {}
              <div className="space-y-3" data-spec-id="Hh1oLkeXIEv3nQp9">
                <h3 className="text-lg font-semibold text-center mb-4" data-spec-id="HDsLmFhff9gcpEUv">BMI Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" data-spec-id="7zNfAt2ksN6JK2qM">
                  <div className="p-3 bg-blue-50 rounded-lg text-center" data-spec-id="bO8sNRjwiNKEXmK2">
                    <div className="font-semibold text-blue-600" data-spec-id="wCtCNqoQJOpWIpY1">Underweight</div>
                    <div className="text-sm text-gray-600" data-spec-id="JES5oE3xZ1osudZP">Below 18.5</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg text-center" data-spec-id="liFh0VAXxj5mlujH">
                    <div className="font-semibold text-green-600" data-spec-id="xQ60di4dzr0iYgb1">Normal</div>
                    <div className="text-sm text-gray-600" data-spec-id="PaBQxrhRHzyIngxF">18.5 - 24.9</div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg text-center" data-spec-id="u5goOCK1rK9CQciQ">
                    <div className="font-semibold text-yellow-600" data-spec-id="huXOysXMjCwjl20c">Overweight</div>
                    <div className="text-sm text-gray-600" data-spec-id="1LH5nYcVUtAr1xXw">25.0 - 29.9</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg text-center" data-spec-id="SPSpdlpglyNlDRGn">
                    <div className="font-semibold text-red-600" data-spec-id="xf6PK0F9wfgpuKmb">Obese</div>
                    <div className="text-sm text-gray-600" data-spec-id="ouHGuqWIVhksesgT">30.0 and above</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>)}

        {}
        <div className="mb-8" data-spec-id="ad-banner">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="cXKloCWpFJdI7zhN">
            <p className="text-gray-500" data-spec-id="kAtfDoyFmg8Vodxe">Advertisement Banner (728x90)</p>
          </div>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-spec-id="seo-content">
          <Card data-spec-id="z71MPdjYSYEv4bWC">
            <CardHeader data-spec-id="5EePAR3sSfygqVFS">
              <CardTitle data-spec-id="0ZYxXg0s9A3siw78">Understanding BMI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600" data-spec-id="aF3TIlni9tQGpJ8e">
              <p data-spec-id="rwZWXZUZN8YSCHAD">
                Body Mass Index (BMI) is a measure that uses your height and weight to work out 
                if your weight is healthy. It's calculated by dividing your weight in kilograms 
                by your height in meters squared.
              </p>
              <p data-spec-id="zva32CXbE9qTvThb">
                While BMI is a useful screening tool, it doesn't directly measure body fat and 
                may not be accurate for everyone, such as athletes with high muscle mass or 
                elderly people with reduced muscle mass.
              </p>
            </CardContent>
          </Card>
          
          <Card data-spec-id="7hcyg7WGCYBP1ghN">
            <CardHeader data-spec-id="Qll4bI4OUg9y6eT4">
              <CardTitle data-spec-id="fVNWKjhjhotj5XVC">BMI Calculator Features</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="ydflRGGUiG78ueBf">
              <ul className="space-y-2 text-gray-600" data-spec-id="TeaGy0jMvKZLIS5P">
                <li className="flex items-center" data-spec-id="hjxCS4hK4jmOQzuw">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="rlcCcYityv35Rjhk"></span>
                  Supports multiple units (kg/lbs, cm/ft/in)
                </li>
                <li className="flex items-center" data-spec-id="YcCoFV8GSOpH5gw5">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="vd9HzrM0hzcKFOqX"></span>
                  Instant BMI calculation
                </li>
                <li className="flex items-center" data-spec-id="iTYcduYQ6HcOFzgK">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="ZYGBddUlCTpIfAwi"></span>
                  Health category classification
                </li>
                <li className="flex items-center" data-spec-id="erIdxMDyLmXwNlMy">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="V6tTvVi1DAqcVOLR"></span>
                  Visual BMI scale reference
                </li>
                <li className="flex items-center" data-spec-id="UJwgT4d8LwVcFdKJ">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="8iYDIW4fuNWmPZep"></span>
                  Mobile-friendly interface
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {}
        <Card data-spec-id="related-calculators">
          <CardHeader data-spec-id="GD6rgBPxAbZObkNm">
            <CardTitle data-spec-id="F6apmQASniDXSkz3">Related Calculators</CardTitle>
            <CardDescription data-spec-id="8bLDy5H1hVIVfdWO">Try these other health and fitness calculators</CardDescription>
          </CardHeader>
          <CardContent data-spec-id="HB4PQwdqimiKUykv">
            <div className="grid md:grid-cols-3 gap-4" data-spec-id="aG35KbJmSPUnGDxb">
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="2rRt55e7yzPhgzoP">
                <Link to="/age-calculator" data-spec-id="rDu6JH4fvgRS55BQ">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="Sr7R0qQj7ePeUZil"/>
                  Age Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="8uNvm6Lii3Kl8Q2U">
                <Link to="/pregnancy-calculator" data-spec-id="F6iwsklJI4tzSYpO">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="jP7BkV0u6gFw1Tdz"/>
                  Pregnancy Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="1GGcdgl6xr2WhGLq">
                <Link to="/percentage-calculator" data-spec-id="iQKeLFk0pSiHYJBa">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="xc1yjzqQMpcTxMKe"/>
                  Percentage Calculator
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
};
export default BMICalculator;
