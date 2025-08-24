import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Percent, ArrowLeft } from "lucide-react";
const PercentageCalculator = ()=>{
    const [value, setValue] = useState("");
    const [percentage, setPercentage] = useState("");
    const [oldValue, setOldValue] = useState("");
    const [newValue, setNewValue] = useState("");
    const [part, setPart] = useState("");
    const [whole, setWhole] = useState("");
    const calculateBasicPercentage = ()=>{
        if (!value || !percentage) return null;
        return (parseFloat(value) * parseFloat(percentage)) / 100;
    };
    const calculatePercentageChange = ()=>{
        if (!oldValue || !newValue) return null;
        const old = parseFloat(oldValue);
        const newVal = parseFloat(newValue);
        return ((newVal - old) / old) * 100;
    };
    const calculateWhatPercentage = ()=>{
        if (!part || !whole) return null;
        return (parseFloat(part) / parseFloat(whole)) * 100;
    };
    const reset = ()=>{
        setValue("");
        setPercentage("");
        setOldValue("");
        setNewValue("");
        setPart("");
        setWhole("");
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="percentage-calculator-page">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="F6oDIGksrRsD7pV5">
          <div className="flex justify-between items-center h-16" data-spec-id="lc0Mr5WWO7T8IpM1">
            <div className="flex items-center" data-spec-id="QPynbGUphzLiCL9Q">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="Y7PMQJghSrpKjKzA"/>
              <h1 className="text-2xl font-bold text-gray-900" data-spec-id="5BmmnSffIVoQyQ2X">CalcHub Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="2WGGkZxqFwOWSnp9">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="MFckZ3d1PLm6Cc6i">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="V1bEUyW01FwMVnQ1">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="KOqhmrzrsQbCPmve">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8" data-spec-id="ku2oHuFGwBuwuXFL">
        {}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6" data-spec-id="breadcrumb">
          <Link to="/" className="hover:text-blue-600" data-spec-id="D9h3JkJTg50GCzmy">Home</Link>
          <span data-spec-id="BrRymTWoqWSuP59D">/</span>
          <span className="text-gray-900" data-spec-id="uh0yON7Z4SXbgwyB">Percentage Calculator</span>
        </div>

        {}
        <Button variant="outline" className="mb-6" asChild data-spec-id="back-button">
          <Link to="/" data-spec-id="Mh0yVnhFsXo7X50B">
            <ArrowLeft className="h-4 w-4 mr-2" data-spec-id="uBXr9RYfFrEdNOXS"/>
            Back to Calculators
          </Link>
        </Button>

        {}
        <div className="text-center mb-8" data-spec-id="page-title">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="eB1LIBsP4FFiyfz8">Percentage Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-spec-id="XU6xIgiMiQDa24CJ">
            Calculate percentages, percentage changes, and find what percentage 
            one number is of another. Essential for business, finance, and everyday math.
          </p>
        </div>

        {}
        <Card className="mb-8" data-spec-id="calculator-card">
          <CardHeader className="text-center" data-spec-id="TxZSpMGSJqLHJE6N">
            <Percent className="h-16 w-16 text-blue-600 mx-auto mb-4" data-spec-id="1IE3XSeYvZfaTOeS"/>
            <CardTitle className="text-2xl" data-spec-id="H8NDqBO3oFffXkKJ">Percentage Calculations</CardTitle>
            <CardDescription data-spec-id="R6OPDB5fzh0qo5hu">
              Choose from different percentage calculation types
            </CardDescription>
          </CardHeader>
          <CardContent data-spec-id="q6LUHrysDdE94jlD">
            <Tabs defaultValue="basic" className="w-full" data-spec-id="vrb1OASC4wQt0cm1">
              <TabsList className="grid w-full grid-cols-3" data-spec-id="tabs-list">
                <TabsTrigger value="basic" data-spec-id="COfnES9hSRhlnwIZ">Basic %</TabsTrigger>
                <TabsTrigger value="change" data-spec-id="jWMDF1C4OBzmuJqh">% Change</TabsTrigger>
                <TabsTrigger value="find" data-spec-id="icKtwegRuec8BsuZ">Find %</TabsTrigger>
              </TabsList>
              
              {}
              <TabsContent value="basic" className="space-y-6" data-spec-id="basic-tab">
                <div className="text-center mb-4" data-spec-id="3hOg4XJt5m9XYC9s">
                  <h3 className="text-lg font-semibold" data-spec-id="EpTc4G6l7Dv8qxAm">What is X% of Y?</h3>
                  <p className="text-gray-600" data-spec-id="ui00Syp6F8TkWhIJ">Calculate a percentage of a number</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4" data-spec-id="Ha2FkULU9SToQmUF">
                  <div data-spec-id="Z5WarhOEcoIl5c1g">
                    <Label htmlFor="percentage-basic" data-spec-id="50pyp7gycPgfZCND">Percentage (%)</Label>
                    <Input id="percentage-basic" type="number" placeholder="25" value={percentage} onChange={(e)=>setPercentage(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="percentage-input"/>
                  </div>
                  <div data-spec-id="nDFSMNa5JXAgWVyY">
                    <Label htmlFor="value-basic" data-spec-id="h56kw2ZLQ5XV8fpn">Of Value</Label>
                    <Input id="value-basic" type="number" placeholder="200" value={value} onChange={(e)=>setValue(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="value-input"/>
                  </div>
                </div>
                
                {calculateBasicPercentage() !== null && (<div className="text-center p-6 bg-blue-50 rounded-lg" data-spec-id="basic-result">
                    <div className="text-3xl font-bold text-blue-600" data-spec-id="FhYkA97qRMURBjMZ">
                      {calculateBasicPercentage()?.toFixed(2)}
                    </div>
                    <div className="text-gray-600" data-spec-id="Xg0eOKPKt8yGNqmJ">
                      {percentage}% of {value} = {calculateBasicPercentage()?.toFixed(2)}
                    </div>
                  </div>)}
              </TabsContent>

              {}
              <TabsContent value="change" className="space-y-6" data-spec-id="change-tab">
                <div className="text-center mb-4" data-spec-id="sTTEvVLApOSPGafQ">
                  <h3 className="text-lg font-semibold" data-spec-id="1hSudA4C55J38jt5">Percentage Change</h3>
                  <p className="text-gray-600" data-spec-id="wLN83mDVdumaCoNc">Calculate percentage increase or decrease</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4" data-spec-id="RPiWex8iL6nwfhI8">
                  <div data-spec-id="QFPYgluftOT4CDY0">
                    <Label htmlFor="old-value" data-spec-id="YuIjnECrelz6zYbA">Original Value</Label>
                    <Input id="old-value" type="number" placeholder="100" value={oldValue} onChange={(e)=>setOldValue(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="old-value-input"/>
                  </div>
                  <div data-spec-id="W1nIAHxyoFWStgyi">
                    <Label htmlFor="new-value" data-spec-id="vbBD3DwyGQWm9z3I">New Value</Label>
                    <Input id="new-value" type="number" placeholder="125" value={newValue} onChange={(e)=>setNewValue(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="new-value-input"/>
                  </div>
                </div>
                
                {calculatePercentageChange() !== null && (<div className="text-center p-6 bg-green-50 rounded-lg" data-spec-id="change-result">
                    <div className={`text-3xl font-bold ${calculatePercentageChange()! >= 0 ? 'text-green-600' : 'text-red-600'}`} data-spec-id="1KUgxVUQYpDy6LHZ">
                      {calculatePercentageChange()! >= 0 ? '+' : ''}{calculatePercentageChange()?.toFixed(2)}%
                    </div>
                    <div className="text-gray-600" data-spec-id="ffyUVtIS51sXK6BX">
                      {calculatePercentageChange()! >= 0 ? 'Increase' : 'Decrease'} from {oldValue} to {newValue}
                    </div>
                  </div>)}
              </TabsContent>

              {}
              <TabsContent value="find" className="space-y-6" data-spec-id="find-tab">
                <div className="text-center mb-4" data-spec-id="4imazyKyo4PeYBYP">
                  <h3 className="text-lg font-semibold" data-spec-id="AvzsUiEGHENLfSsJ">What % is X of Y?</h3>
                  <p className="text-gray-600" data-spec-id="IgPkE4OPejXNFZJr">Find what percentage one number is of another</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4" data-spec-id="WhNRFluyTH2Ah6eo">
                  <div data-spec-id="jyCOZfX0JStyomnx">
                    <Label htmlFor="part-value" data-spec-id="kISobFSQRQKzgZNf">Part (X)</Label>
                    <Input id="part-value" type="number" placeholder="50" value={part} onChange={(e)=>setPart(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="part-input"/>
                  </div>
                  <div data-spec-id="YYhwXVl6m8eIwUVR">
                    <Label htmlFor="whole-value" data-spec-id="nWceWod1J0zJgG8j">Whole (Y)</Label>
                    <Input id="whole-value" type="number" placeholder="200" value={whole} onChange={(e)=>setWhole(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="whole-input"/>
                  </div>
                </div>
                
                {calculateWhatPercentage() !== null && (<div className="text-center p-6 bg-purple-50 rounded-lg" data-spec-id="find-result">
                    <div className="text-3xl font-bold text-purple-600" data-spec-id="E3RjsnCgidHSD3ZW">
                      {calculateWhatPercentage()?.toFixed(2)}%
                    </div>
                    <div className="text-gray-600" data-spec-id="v7hNG2m4Tn0rgAaE">
                      {part} is {calculateWhatPercentage()?.toFixed(2)}% of {whole}
                    </div>
                  </div>)}
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-center mt-6" data-spec-id="7dbuTX4PJZM4ZXJb">
              <Button onClick={reset} size="lg" variant="outline" data-spec-id="reset-button">
                Reset All
              </Button>
            </div>
          </CardContent>
        </Card>

        {}
        <div className="mb-8" data-spec-id="ad-banner">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="Z3bwzz8wCfyqvYp9">
            <p className="text-gray-500" data-spec-id="aNFWhwwQQz6FkcKx">Advertisement Banner (728x90)</p>
          </div>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-spec-id="seo-content">
          <Card data-spec-id="YrIFgixPcCEduwWN">
            <CardHeader data-spec-id="uHDaWufxnY9VQq1D">
              <CardTitle data-spec-id="zmmSMDTaNHfNzy2g">How to Use the Percentage Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600" data-spec-id="sX9YlPCR5E2VLkac">
              <p data-spec-id="4N8kSCs9dSJ1fqg7">
                Our percentage calculator offers three different calculation types. 
                Use "Basic %" to find what percentage of a number is (e.g., 25% of 200). 
                Use "% Change" to calculate increases or decreases between two values.
              </p>
              <p data-spec-id="lsaYUtvP6kdIQ3NC">
                The "Find %" tab helps you determine what percentage one number represents 
                of another. This is useful for calculating grades, completion rates, 
                or analyzing data proportions.
              </p>
            </CardContent>
          </Card>
          
          <Card data-spec-id="SrzATb57QUodB2OO">
            <CardHeader data-spec-id="3Z1XlGGB9kS1fTGd">
              <CardTitle data-spec-id="iYdqW3Bm0DAtM2QV">Common Percentage Uses</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="Gh42tlhscDEV0dBS">
              <ul className="space-y-2 text-gray-600" data-spec-id="0slcrS3ag7HLCivI">
                <li className="flex items-center" data-spec-id="CWGGQp6E0EH5K4yD">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="WKqNf6reJ7d9FJPL"></span>
                  Calculating discounts and markups
                </li>
                <li className="flex items-center" data-spec-id="lfT8mj14Z5o4Njxs">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="J02NMTuHiIQh8IZb"></span>
                  Tax calculations
                </li>
                <li className="flex items-center" data-spec-id="XAz2za0arivNXdJ3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="QLDnP0wrI34hv57g"></span>
                  Grade and score analysis
                </li>
                <li className="flex items-center" data-spec-id="D1vl7P8Lsro2kDqg">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="RXFyNsCuhsoyxmLD"></span>
                  Business performance metrics
                </li>
                <li className="flex items-center" data-spec-id="kk5z49RpyVLM1vK6">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="ZKI4ysP8DlFRMNYU"></span>
                  Statistical data analysis
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {}
        <Card data-spec-id="related-calculators">
          <CardHeader data-spec-id="UDAxKleyGiKuaTLp">
            <CardTitle data-spec-id="z4OgmAztEfwk64wi">Related Calculators</CardTitle>
            <CardDescription data-spec-id="IKVUHTVdedxgd8rR">Try these other useful calculation tools</CardDescription>
          </CardHeader>
          <CardContent data-spec-id="oibBzbG4g6GpGmMh">
            <div className="grid md:grid-cols-3 gap-4" data-spec-id="MSRnaspmIMHUd6gC">
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="6RsVZQWUBqI1rToZ">
                <Link to="/loan-calculator" data-spec-id="u9NwXOoQO4TTnizb">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="ZwGW5OGStmukUUDF"/>
                  Loan Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="PUfsg09u5U10p4Rc">
                <Link to="/currency-converter" data-spec-id="NJVex6fK4uK4YlR3">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="iWVGUI7CXIyeDuN1"/>
                  Currency Converter
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="hF536jOJ5N3tJVIu">
                <Link to="/bmi-calculator" data-spec-id="3TbKsCKVQg59pYpk">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="1yA9GcveOFltphoM"/>
                  BMI Calculator
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
};
export default PercentageCalculator;
