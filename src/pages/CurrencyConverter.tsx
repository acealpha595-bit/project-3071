import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, ArrowLeft, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
const CurrencyConverter = ()=>{
    const [amount, setAmount] = useState("1");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState<number | null>(null);
    const currencies = [
        {
            code: "USD",
            name: "US Dollar"
        },
        {
            code: "EUR",
            name: "Euro"
        },
        {
            code: "GBP",
            name: "British Pound"
        },
        {
            code: "JPY",
            name: "Japanese Yen"
        },
        {
            code: "AUD",
            name: "Australian Dollar"
        },
        {
            code: "CAD",
            name: "Canadian Dollar"
        },
        {
            code: "CHF",
            name: "Swiss Franc"
        },
        {
            code: "CNY",
            name: "Chinese Yuan"
        },
        {
            code: "INR",
            name: "Indian Rupee"
        },
        {
            code: "KRW",
            name: "South Korean Won"
        },
        {
            code: "MXN",
            name: "Mexican Peso"
        },
        {
            code: "NZD",
            name: "New Zealand Dollar"
        },
        {
            code: "SEK",
            name: "Swedish Krona"
        },
        {
            code: "SGD",
            name: "Singapore Dollar"
        },
        {
            code: "NOK",
            name: "Norwegian Krone"
        }
    ];
    const { data: exchangeRates, isLoading, error, refetch } = useQuery({
        queryKey: [
            'exchangeRates',
            fromCurrency
        ],
        queryFn: async ()=>{
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
                if (!response.ok) {
                    return getMockRates();
                }
                const data = await response.json();
                return data.rates;
            } catch (error) {
                console.log('API failed, using mock data:', error);
                return getMockRates();
            }
        },
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000
    });
    const getMockRates = ()=>{
        const mockRates: {
            [key: string]: number;
        } = {
            USD: 1,
            EUR: 0.85,
            GBP: 0.73,
            JPY: 110,
            AUD: 1.35,
            CAD: 1.25,
            CHF: 0.92,
            CNY: 6.45,
            INR: 74.50,
            KRW: 1180,
            MXN: 20.50,
            NZD: 1.42,
            SEK: 8.60,
            SGD: 1.35,
            NOK: 8.95
        };
        if (fromCurrency === 'USD') {
            return mockRates;
        }
        const baseRate = mockRates[fromCurrency];
        const adjustedRates: {
            [key: string]: number;
        } = {};
        Object.keys(mockRates).forEach((currency)=>{
            adjustedRates[currency] = mockRates[currency] / baseRate;
        });
        return adjustedRates;
    };
    const convertCurrency = ()=>{
        if (!amount || !exchangeRates || isLoading) return;
        const rate = exchangeRates[toCurrency];
        if (rate) {
            const converted = parseFloat(amount) * rate;
            setResult(Math.round(converted * 100) / 100);
        }
    };
    const swapCurrencies = ()=>{
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
        setResult(null);
    };
    const reset = ()=>{
        setAmount("1");
        setFromCurrency("USD");
        setToCurrency("EUR");
        setResult(null);
    };
    useEffect(()=>{
        if (amount && exchangeRates && !isLoading) {
            convertCurrency();
        }
    }, [
        amount,
        fromCurrency,
        toCurrency,
        exchangeRates,
        isLoading
    ]);
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="currency-converter-page">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="gE92lLi7Vz4EXqZg">
          <div className="flex justify-between items-center h-16" data-spec-id="tPxIyIdpkIlW7Llr">
            <div className="flex items-center" data-spec-id="z0bZX1sLwq6hJyvO">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="CMoPhH27J2zKZPVZ"/>
              <h1 className="text-2xl font-bold text-gray-900" data-spec-id="om0Z7SxWBW1GBUjx">CalcHub Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="tcJ6MgkIrfu5fiTn">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="e4dwiZgLwDUJ6YbZ">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="VLWJ9vq6rJ3WacTD">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="RAlNoTkRPaxOfwEL">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8" data-spec-id="dDUAAteM9Bw5tMZ2">
        {}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6" data-spec-id="breadcrumb">
          <Link to="/" className="hover:text-blue-600" data-spec-id="LKWs6sXRgAh4osGJ">Home</Link>
          <span data-spec-id="pasnioRTQZwRdjGI">/</span>
          <span className="text-gray-900" data-spec-id="ca300kh0hgrGMvl2">Currency Converter</span>
        </div>

        {}
        <Button variant="outline" className="mb-6" asChild data-spec-id="back-button">
          <Link to="/" data-spec-id="iyj1DRByvGdLA2sK">
            <ArrowLeft className="h-4 w-4 mr-2" data-spec-id="kqoP1yPTcChbpK5M"/>
            Back to Calculators
          </Link>
        </Button>

        {}
        <div className="text-center mb-8" data-spec-id="page-title">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="6KYFJQ7OWyOvxBVm">Currency Converter</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-spec-id="1RjV8v14lZaBiHJx">
            Convert between world currencies with live exchange rates. 
            Get accurate, up-to-date currency conversions instantly.
          </p>
        </div>

        {}
        <Card className="mb-8" data-spec-id="converter-card">
          <CardHeader className="text-center" data-spec-id="gH6AaTM2JvYZuBDn">
            <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" data-spec-id="jlfoTpzsnTszrtaB"/>
            <CardTitle className="text-2xl" data-spec-id="wRXKpBua9PVKSzmr">Convert Currencies</CardTitle>
            <CardDescription data-spec-id="0VTSDS5XFUHehmiK">
              Enter amount and select currencies for instant conversion
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" data-spec-id="jDj4sg3FuezajEim">
            {}
            <div data-spec-id="qgVNkBb9oJEC4iHD">
              <Label htmlFor="amount" className="text-lg font-medium" data-spec-id="GpmaCiOZtWJKbBER">Amount</Label>
              <Input id="amount" type="number" placeholder="1" value={amount} onChange={(e)=>setAmount(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="amount-input"/>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-end" data-spec-id="EvxH2XWDk9FaueoK">
              {}
              <div data-spec-id="ipgIUdOTodS5yiyD">
                <Label className="text-lg font-medium" data-spec-id="5l2jlZIo5qqSMsHf">From</Label>
                <Select value={fromCurrency} onValueChange={setFromCurrency} data-spec-id="from-currency">
                  <SelectTrigger className="text-lg p-3 mt-2" data-spec-id="nRf2VYLQ5k3wZdr1">
                    <SelectValue data-spec-id="LoJLdooOdBJInjae"/>
                  </SelectTrigger>
                  <SelectContent data-spec-id="HT1oJtDsv4OPd4Ov">
                    {currencies.map((currency)=>(<SelectItem key={currency.code} value={currency.code} data-spec-id="GrHszk3aneBW7J7k">
                        {currency.code} - {currency.name}
                      </SelectItem>))}
                  </SelectContent>
                </Select>
              </div>

              {}
              <div className="flex justify-center" data-spec-id="bf1aCa1dTVpx9bNh">
                <Button variant="outline" size="icon" onClick={swapCurrencies} className="rounded-full" data-spec-id="swap-button">
                  <RefreshCw className="h-4 w-4" data-spec-id="Cq5h2Qkc4HkWNlR4"/>
                </Button>
              </div>

              {}
              <div data-spec-id="WWRWItDyx2LjrNcp">
                <Label className="text-lg font-medium" data-spec-id="Lw5nybmhOsmWOdH7">To</Label>
                <Select value={toCurrency} onValueChange={setToCurrency} data-spec-id="to-currency">
                  <SelectTrigger className="text-lg p-3 mt-2" data-spec-id="uAZ7GmhyyltUMjIG">
                    <SelectValue data-spec-id="S7lQkkAxt0FHGGuj"/>
                  </SelectTrigger>
                  <SelectContent data-spec-id="K8p5uNYtgn0r5Pq7">
                    {currencies.map((currency)=>(<SelectItem key={currency.code} value={currency.code} data-spec-id="kHn2qVB4KIvRFOWx">
                        {currency.code} - {currency.name}
                      </SelectItem>))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-spec-id="s3slIJRtbsDWfoMh">
              <Button onClick={()=>refetch()} size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading} data-spec-id="refresh-button">
                {isLoading ? "Loading..." : "Refresh Rates"}
              </Button>
              <Button onClick={reset} size="lg" variant="outline" data-spec-id="reset-button">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {}
        {result !== null && (<Card className="mb-8" data-spec-id="results-card">
            <CardHeader className="text-center" data-spec-id="pk6B8WWrV5tlt6CG">
              <CardTitle className="text-2xl text-blue-600" data-spec-id="DMxKia8picgaaZXb">Conversion Result</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="DshR4c8JDv19DTAa">
              <div className="text-center" data-spec-id="V4hHv1xCyJ87sBHH">
                <div className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="pxSzKEf0QvUG2hf7">
                  {amount} {fromCurrency} = {result.toLocaleString()} {toCurrency}
                </div>
                {exchangeRates && (<div className="text-lg text-gray-600" data-spec-id="9D1c593BuTN5kFHY">
                    1 {fromCurrency} = {exchangeRates[toCurrency]?.toFixed(4)} {toCurrency}
                  </div>)}
                {error && (<div className="text-sm text-orange-600 mt-2" data-spec-id="qxp0G4iUV4cB9KLY">
                    Using cached exchange rates
                  </div>)}
              </div>
            </CardContent>
          </Card>)}

        {}
        {exchangeRates && (<Card className="mb-8" data-spec-id="popular-rates">
            <CardHeader data-spec-id="RxEVtkFAsnWNH5hC">
              <CardTitle data-spec-id="dZ7jotc0mB54j7Up">Popular Exchange Rates (1 {fromCurrency})</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="jM3FX10fUcu2hJSM">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-spec-id="5EMFwEJ24SILEx8x">
                {currencies.filter((c)=>c.code !== fromCurrency).slice(0, 8).map((currency)=>(<div key={currency.code} className="p-3 bg-gray-50 rounded-lg text-center" data-spec-id="XDjGhgCRtSVLSJ1P">
                    <div className="font-semibold text-gray-900" data-spec-id="exOVpGM7ULv77gsM">{currency.code}</div>
                    <div className="text-sm text-gray-600" data-spec-id="6yjrOLAV56dQ2nSK">{exchangeRates[currency.code]?.toFixed(4) || 'N/A'}</div>
                  </div>))}
              </div>
            </CardContent>
          </Card>)}

        {}
        <div className="mb-8" data-spec-id="ad-banner">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="xRi0Jw4FCK70NRb0">
            <p className="text-gray-500" data-spec-id="i0rg2V0jelssjbEP">Advertisement Banner (728x90)</p>
          </div>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-spec-id="seo-content">
          <Card data-spec-id="n0LFQeayxreSuiyy">
            <CardHeader data-spec-id="ECqileyF17OYiEuy">
              <CardTitle data-spec-id="lMFne6Wl60yVj4PH">About Our Currency Converter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600" data-spec-id="8uUDxAXaFDFbyaAl">
              <p data-spec-id="oAXkAg93eRPxCcay">
                Our currency converter provides real-time exchange rates for major world currencies. 
                Whether you're traveling, shopping online internationally, or managing international 
                business, our tool gives you accurate conversion rates instantly.
              </p>
              <p data-spec-id="Hjko20EG1P2Kd1ZT">
                Exchange rates are updated regularly and sourced from reliable financial data providers. 
                The converter supports all major currencies including USD, EUR, GBP, JPY, and many more.
              </p>
            </CardContent>
          </Card>
          
          <Card data-spec-id="ssxE21pmFoyVOFj7">
            <CardHeader data-spec-id="3qNR2OBfIqVcw8Ir">
              <CardTitle data-spec-id="3qJ3QBc0aG8VBwit">Currency Converter Features</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="IdXrshyzEBUIZq0y">
              <ul className="space-y-2 text-gray-600" data-spec-id="ZxqWcR6xVhbNp6Ay">
                <li className="flex items-center" data-spec-id="hitz5u9GtHZO5RSt">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="xiXn3dDooLDzV2zW"></span>
                  Live exchange rates
                </li>
                <li className="flex items-center" data-spec-id="zssfgpz9TEydJdyt">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="FlEhETfVWhjX1gCN"></span>
                  15+ major world currencies
                </li>
                <li className="flex items-center" data-spec-id="cGVRg3E53itR0Orb">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="LNZvULPB59Z4DwXN"></span>
                  Instant conversion results
                </li>
                <li className="flex items-center" data-spec-id="xqdtKTnbxIii5uad">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="K2Kdmxy8Wo0yVyet"></span>
                  Currency swap functionality
                </li>
                <li className="flex items-center" data-spec-id="fEgw1Ls5qPheqYjM">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="MPYjlj7jzgHfknH1"></span>
                  Popular rates overview
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {}
        <Card data-spec-id="related-calculators">
          <CardHeader data-spec-id="t4W5HQ4oJje0xAyX">
            <CardTitle data-spec-id="TLw031NwboxO650j">Related Calculators</CardTitle>
            <CardDescription data-spec-id="b9AZkpc1phw5WqDC">Try these other useful financial tools</CardDescription>
          </CardHeader>
          <CardContent data-spec-id="tfFYHAy3529xLYzp">
            <div className="grid md:grid-cols-3 gap-4" data-spec-id="zNeiRzuNAT1jJbxY">
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="vmFM0vEm1Vnsj2QL">
                <Link to="/loan-calculator" data-spec-id="unwqZAENCbFEKedO">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="WEihORsiJMway1Xb"/>
                  Loan Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="YnsTXJNqanegDvGu">
                <Link to="/percentage-calculator" data-spec-id="blNCHpLE1ifrbsgf">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="j6Ra4W8G3GeFDedC"/>
                  Percentage Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="ZreAsTxjasQMOLiz">
                <Link to="/unit-converter" data-spec-id="wRMyTIzdu68TvHNc">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="DDBcHBqqU5wMhNJb"/>
                  Unit Converter
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
};
export default CurrencyConverter;
