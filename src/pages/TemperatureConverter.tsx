import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, Info, Mail, Thermometer } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
export default function TemperatureConverter() {
    const [temperature, setTemperature] = useState<string>('');
    const [fromUnit, setFromUnit] = useState<string>('celsius');
    const [toUnit, setToUnit] = useState<string>('fahrenheit');
    const [result, setResult] = useState<string>('');
    const convertTemperature = ()=>{
        console.log('Converting temperature:', temperature, 'from', fromUnit, 'to', toUnit);
        if (!temperature || isNaN(Number(temperature))) {
            console.log('Invalid temperature input');
            setResult('Please enter a valid number');
            return;
        }
        const temp = parseFloat(temperature);
        let celsius: number;
        switch(fromUnit){
            case 'celsius':
                celsius = temp;
                break;
            case 'fahrenheit':
                celsius = (temp - 32) * 5 / 9;
                break;
            case 'kelvin':
                celsius = temp - 273.15;
                break;
            case 'rankine':
                celsius = (temp - 491.67) * 5 / 9;
                break;
            default:
                celsius = temp;
        }
        let convertedTemp: number;
        let unitSymbol: string;
        switch(toUnit){
            case 'celsius':
                convertedTemp = celsius;
                unitSymbol = '°C';
                break;
            case 'fahrenheit':
                convertedTemp = celsius * 9 / 5 + 32;
                unitSymbol = '°F';
                break;
            case 'kelvin':
                convertedTemp = celsius + 273.15;
                unitSymbol = 'K';
                break;
            case 'rankine':
                convertedTemp = celsius * 9 / 5 + 491.67;
                unitSymbol = '°R';
                break;
            default:
                convertedTemp = celsius;
                unitSymbol = '°C';
        }
        const formattedResult = `${convertedTemp.toFixed(2)} ${unitSymbol}`;
        console.log('Conversion result:', formattedResult);
        setResult(formattedResult);
    };
    const clearAll = ()=>{
        console.log('Clearing all temperature converter fields');
        setTemperature('');
        setResult('');
    };
    const getUnitName = (unit: string)=>{
        const unitNames = {
            celsius: 'Celsius (°C)',
            fahrenheit: 'Fahrenheit (°F)',
            kelvin: 'Kelvin (K)',
            rankine: 'Rankine (°R)'
        };
        return unitNames[unit as keyof typeof unitNames] || unit;
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="temp-converter-page">
      {}
      <header className="bg-white shadow-sm" data-spec-id="temp-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-spec-id="temp-header-content">
          <div className="flex items-center justify-between" data-spec-id="temp-nav-container">
            <div className="flex items-center" data-spec-id="temp-logo-section">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="temp-logo-icon"/>
              <div data-spec-id="temp-brand-text">
                <h1 className="text-2xl font-bold text-gray-900" data-spec-id="temp-brand-name">CalcSuites</h1>
                <p className="text-xs text-gray-500" data-spec-id="temp-brand-slogan">Your Complete Calculator Toolkit</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6" data-spec-id="temp-navigation">
              <Link to="/" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="temp-nav-home">
                <Home className="h-4 w-4 mr-1" data-spec-id="w31wkp7Iez0UeiA0"/>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="temp-nav-about">
                <Info className="h-4 w-4 mr-1" data-spec-id="PxghbFhdBXGnGqJP"/>
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 flex items-center" data-spec-id="temp-nav-contact">
                <Mail className="h-4 w-4 mr-1" data-spec-id="BVCxTYtgTJsQmNq3"/>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-spec-id="temp-main-content">
        <div className="text-center mb-12" data-spec-id="temp-hero-section">
          <div className="flex justify-center mb-4" data-spec-id="temp-hero-icon">
            <Thermometer className="h-16 w-16 text-blue-600" data-spec-id="W9iGNBCux2ofOWWr"/>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="temp-hero-title">
            Temperature Converter
          </h1>
          <p className="text-xl text-gray-600" data-spec-id="temp-hero-description">
            Convert between Celsius, Fahrenheit, Kelvin, and Rankine temperature scales
          </p>
        </div>

        <Card className="max-w-2xl mx-auto" data-spec-id="temp-calculator-card">
          <CardHeader data-spec-id="temp-card-header">
            <CardTitle className="text-center text-2xl font-semibold" data-spec-id="temp-card-title">
              Temperature Conversion Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6" data-spec-id="temp-card-content">
            {}
            <div className="space-y-2" data-spec-id="temp-input-section">
              <label className="text-sm font-medium text-gray-700" data-spec-id="temp-input-label">
                Temperature Value
              </label>
              <Input type="number" placeholder="Enter temperature" value={temperature} onChange={(e)=>setTemperature(e.target.value)} className="text-lg" data-spec-id="temp-input-field"/>
            </div>

            {}
            <div className="space-y-2" data-spec-id="temp-from-section">
              <label className="text-sm font-medium text-gray-700" data-spec-id="temp-from-label">
                From
              </label>
              <Select value={fromUnit} onValueChange={setFromUnit} data-spec-id="temp-from-select">
                <SelectTrigger className="text-lg" data-spec-id="temp-from-trigger">
                  <SelectValue placeholder="Select unit" data-spec-id="temp-from-value"/>
                </SelectTrigger>
                <SelectContent data-spec-id="temp-from-content">
                  <SelectItem value="celsius" data-spec-id="temp-from-celsius">Celsius (°C)</SelectItem>
                  <SelectItem value="fahrenheit" data-spec-id="temp-from-fahrenheit">Fahrenheit (°F)</SelectItem>
                  <SelectItem value="kelvin" data-spec-id="temp-from-kelvin">Kelvin (K)</SelectItem>
                  <SelectItem value="rankine" data-spec-id="temp-from-rankine">Rankine (°R)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {}
            <div className="space-y-2" data-spec-id="temp-to-section">
              <label className="text-sm font-medium text-gray-700" data-spec-id="temp-to-label">
                To
              </label>
              <Select value={toUnit} onValueChange={setToUnit} data-spec-id="temp-to-select">
                <SelectTrigger className="text-lg" data-spec-id="temp-to-trigger">
                  <SelectValue placeholder="Select unit" data-spec-id="temp-to-value"/>
                </SelectTrigger>
                <SelectContent data-spec-id="temp-to-content">
                  <SelectItem value="celsius" data-spec-id="temp-to-celsius">Celsius (°C)</SelectItem>
                  <SelectItem value="fahrenheit" data-spec-id="temp-to-fahrenheit">Fahrenheit (°F)</SelectItem>
                  <SelectItem value="kelvin" data-spec-id="temp-to-kelvin">Kelvin (K)</SelectItem>
                  <SelectItem value="rankine" data-spec-id="temp-to-rankine">Rankine (°R)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {}
            <div className="flex gap-4" data-spec-id="temp-buttons-section">
              <Button onClick={convertTemperature} className="flex-1 bg-blue-600 hover:bg-blue-700 text-lg py-3" data-spec-id="temp-convert-button">
                Convert Temperature
              </Button>
              <Button onClick={clearAll} variant="outline" className="flex-1 text-lg py-3" data-spec-id="temp-clear-button">
                Clear
              </Button>
            </div>

            {}
            {result && (<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center" data-spec-id="temp-result-section">
                <p className="text-sm text-blue-600 mb-2" data-spec-id="temp-result-label">Converted Temperature</p>
                <p className="text-3xl font-bold text-blue-800" data-spec-id="temp-result-value">
                  {result}
                </p>
                <p className="text-sm text-gray-600 mt-2" data-spec-id="temp-conversion-summary">
                  {temperature} {getUnitName(fromUnit)} = {result}
                </p>
              </div>)}
          </CardContent>
        </Card>

        {}
        <div className="mt-16 grid md:grid-cols-2 gap-8" data-spec-id="temp-info-section">
          <Card data-spec-id="temp-formulas-card">
            <CardHeader data-spec-id="temp-formulas-header">
              <CardTitle className="text-xl font-semibold" data-spec-id="temp-formulas-title">
                Conversion Formulas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-spec-id="temp-formulas-content">
              <div data-spec-id="temp-formula-item-1">
                <p className="font-medium text-gray-900" data-spec-id="temp-formula-title-1">Celsius to Fahrenheit:</p>
                <p className="text-gray-700" data-spec-id="temp-formula-text-1">°F = (°C × 9/5) + 32</p>
              </div>
              <div data-spec-id="temp-formula-item-2">
                <p className="font-medium text-gray-900" data-spec-id="temp-formula-title-2">Celsius to Kelvin:</p>
                <p className="text-gray-700" data-spec-id="temp-formula-text-2">K = °C + 273.15</p>
              </div>
              <div data-spec-id="temp-formula-item-3">
                <p className="font-medium text-gray-900" data-spec-id="temp-formula-title-3">Celsius to Rankine:</p>
                <p className="text-gray-700" data-spec-id="temp-formula-text-3">°R = (°C × 9/5) + 491.67</p>
              </div>
            </CardContent>
          </Card>

          <Card data-spec-id="temp-reference-card">
            <CardHeader data-spec-id="temp-reference-header">
              <CardTitle className="text-xl font-semibold" data-spec-id="temp-reference-title">
                Common Temperature References
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-spec-id="temp-reference-content">
              <div data-spec-id="temp-reference-item-1">
                <p className="font-medium text-gray-900" data-spec-id="temp-reference-title-1">Water Freezing Point:</p>
                <p className="text-gray-700" data-spec-id="temp-reference-text-1">0°C = 32°F = 273.15K</p>
              </div>
              <div data-spec-id="temp-reference-item-2">
                <p className="font-medium text-gray-900" data-spec-id="temp-reference-title-2">Water Boiling Point:</p>
                <p className="text-gray-700" data-spec-id="temp-reference-text-2">100°C = 212°F = 373.15K</p>
              </div>
              <div data-spec-id="temp-reference-item-3">
                <p className="font-medium text-gray-900" data-spec-id="temp-reference-title-3">Human Body Temperature:</p>
                <p className="text-gray-700" data-spec-id="temp-reference-text-3">37°C = 98.6°F = 310.15K</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {}
        <div className="mt-12 text-center" data-spec-id="temp-back-section">
          <Button asChild variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" data-spec-id="temp-back-button">
            <Link to="/" data-spec-id="temp-back-link">
              ← Back to All Calculators
            </Link>
          </Button>
        </div>
      </main>

      {}
      <footer className="bg-gray-900 text-white py-12 mt-16" data-spec-id="temp-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-spec-id="temp-footer-content">
          <div className="flex items-center justify-center mb-4" data-spec-id="temp-footer-brand">
            <Calculator className="h-6 w-6 text-blue-400 mr-2" data-spec-id="temp-footer-icon"/>
            <span className="text-xl font-bold" data-spec-id="temp-footer-name">CalcSuites</span>
          </div>
          <p className="text-gray-400 mb-2" data-spec-id="temp-footer-description">
            Your Complete Calculator Toolkit
          </p>
          <p className="text-gray-400 text-sm" data-spec-id="temp-footer-email">
            Contact: calcsuites@gmail.com
          </p>
          <p className="text-gray-500 text-sm mt-4" data-spec-id="temp-footer-copyright">
            &copy; 2024 CalcSuites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);
}
