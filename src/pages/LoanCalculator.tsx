import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, ArrowLeft } from "lucide-react";
const LoanCalculator = ()=>{
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [result, setResult] = useState<{
        monthlyPayment: number;
        totalInterest: number;
        totalAmount: number;
    } | null>(null);
    const calculateLoan = ()=>{
        if (!loanAmount || !interestRate || !loanTerm) return;
        const principal = parseFloat(loanAmount);
        const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
        const numberOfPayments = parseFloat(loanTerm) * 12;
        if (monthlyInterestRate === 0) {
            const monthlyPayment = principal / numberOfPayments;
            setResult({
                monthlyPayment: Math.round(monthlyPayment * 100) / 100,
                totalInterest: 0,
                totalAmount: principal
            });
            return;
        }
        const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        const totalAmount = monthlyPayment * numberOfPayments;
        const totalInterest = totalAmount - principal;
        setResult({
            monthlyPayment: Math.round(monthlyPayment * 100) / 100,
            totalInterest: Math.round(totalInterest * 100) / 100,
            totalAmount: Math.round(totalAmount * 100) / 100
        });
    };
    const reset = ()=>{
        setLoanAmount("");
        setInterestRate("");
        setLoanTerm("");
        setResult(null);
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-spec-id="loan-calculator-page">
      {}
      <header className="bg-white shadow-sm border-b" data-spec-id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-spec-id="jH1bJcSKvb6bqic5">
          <div className="flex justify-between items-center h-16" data-spec-id="dt1ZmxNEwL49oB6k">
            <div className="flex items-center" data-spec-id="3j3zcXX4R8n6aEzN">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" data-spec-id="dtJZv0d221rUuG7i"/>
              <h1 className="text-2xl font-bold text-gray-900" data-spec-id="DZueOWUEDvgKtYH2">CalcHub Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8" data-spec-id="3tE0spmizuEkIZr0">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="qwVKMNyf3TNc4oCO">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="gi9BS74aFAvQzPrm">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors" data-spec-id="AH8n7JZQ4tyR0nOl">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8" data-spec-id="l6rolvybBtljggDO">
        {}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6" data-spec-id="breadcrumb">
          <Link to="/" className="hover:text-blue-600" data-spec-id="tBu4iTcXHW6ODKVR">Home</Link>
          <span data-spec-id="YOviq52GlrRsaSI9">/</span>
          <span className="text-gray-900" data-spec-id="TeHCJ8OF6s28d5GU">Loan Calculator</span>
        </div>

        {}
        <Button variant="outline" className="mb-6" asChild data-spec-id="back-button">
          <Link to="/" data-spec-id="eWC3cdKTRbDOW5Id">
            <ArrowLeft className="h-4 w-4 mr-2" data-spec-id="3CkN0aCpBDt5JUZW"/>
            Back to Calculators
          </Link>
        </Button>

        {}
        <div className="text-center mb-8" data-spec-id="page-title">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-spec-id="qKvcIRTQ65rE8Ank">Loan Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-spec-id="VBv9pkmI2BFRBToa">
            Calculate your monthly loan payments, total interest, and overall loan cost. 
            Perfect for mortgages, car loans, and personal loans.
          </p>
        </div>

        {}
        <Card className="mb-8" data-spec-id="calculator-card">
          <CardHeader className="text-center" data-spec-id="JY8gVWtCPorLZcR9">
            <DollarSign className="h-16 w-16 text-blue-600 mx-auto mb-4" data-spec-id="geZBp68OnmJgqOgh"/>
            <CardTitle className="text-2xl" data-spec-id="jLcJWkpkrsrIr3LW">Enter Loan Details</CardTitle>
            <CardDescription data-spec-id="UwgPNUC5kVPrtDHS">
              Input your loan amount, interest rate, and term to calculate payments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" data-spec-id="JgfkNjU2G4xHW2Pp">
            <div className="grid md:grid-cols-3 gap-6" data-spec-id="DDuBkyjFidZl1nfV">
              {}
              <div data-spec-id="BORyuG8CRhYolBC6">
                <Label htmlFor="loanAmount" className="text-lg font-medium" data-spec-id="vfiH00Wj7bULs84d">Loan Amount ($)</Label>
                <Input id="loanAmount" type="number" placeholder="100,000" value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="loan-amount-input"/>
              </div>

              {}
              <div data-spec-id="PjHSDr8Jog45Oxj7">
                <Label htmlFor="interestRate" className="text-lg font-medium" data-spec-id="WAYrcaGwtvjRieSH">Annual Interest Rate (%)</Label>
                <Input id="interestRate" type="number" placeholder="5.5" step="0.01" value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="interest-rate-input"/>
              </div>

              {}
              <div data-spec-id="Y4RGEsqFhtXzqMvK">
                <Label htmlFor="loanTerm" className="text-lg font-medium" data-spec-id="gfwKJJXGsnPcveAj">Loan Term (Years)</Label>
                <Input id="loanTerm" type="number" placeholder="30" value={loanTerm} onChange={(e)=>setLoanTerm(e.target.value)} className="text-lg p-3 mt-2" data-spec-id="loan-term-input"/>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-spec-id="WfbewBJcGJpUjNmh">
              <Button onClick={calculateLoan} size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={!loanAmount || !interestRate || !loanTerm} data-spec-id="calculate-button">
                Calculate Payment
              </Button>
              <Button onClick={reset} size="lg" variant="outline" data-spec-id="reset-button">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {}
        {result && (<Card className="mb-8" data-spec-id="results-card">
            <CardHeader className="text-center" data-spec-id="Fj8t7F2ZIZmsi6c7">
              <CardTitle className="text-2xl text-blue-600" data-spec-id="vvlezgNPGrfp3j2R">Loan Payment Summary</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="W3Kj74Bi42qmEFGA">
              <div className="grid md:grid-cols-3 gap-6 text-center" data-spec-id="c8nhmN8B5y1tPwEy">
                <div className="bg-blue-50 rounded-lg p-6" data-spec-id="i1BKXhaRwovWhj68">
                  <div className="text-3xl font-bold text-blue-600" data-spec-id="GAjiYgJtlkEqIO5j">${result.monthlyPayment.toLocaleString()}</div>
                  <div className="text-gray-600" data-spec-id="r7JxRxWYD4NIXNUd">Monthly Payment</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6" data-spec-id="d0m1pYsyx42gPfU6">
                  <div className="text-3xl font-bold text-green-600" data-spec-id="8L5196YJYHZIBMkC">${result.totalInterest.toLocaleString()}</div>
                  <div className="text-gray-600" data-spec-id="zHgH1qmhXEJoDLEd">Total Interest</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6" data-spec-id="tnM3R30sdJAMXieA">
                  <div className="text-3xl font-bold text-purple-600" data-spec-id="pJVbwpxAUzuzNTEK">${result.totalAmount.toLocaleString()}</div>
                  <div className="text-gray-600" data-spec-id="ucf0WNgwnTLxWY0e">Total Amount</div>
                </div>
              </div>
              
              {}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg" data-spec-id="s4FhdUyMZkeEdiIE">
                <h3 className="text-lg font-semibold mb-4 text-center" data-spec-id="zsXUKYexVrMszlav">Loan Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm" data-spec-id="4CQqSHYUR0jEe3xT">
                  <div className="flex justify-between" data-spec-id="gxDAUbKxXHK3aXEb">
                    <span data-spec-id="DtTEQYcTvMr4ufWC">Principal Amount:</span>
                    <span className="font-semibold" data-spec-id="s8D8F6KJJi5iH34t">${parseFloat(loanAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between" data-spec-id="Pm6XJwBahLz3VWPn">
                    <span data-spec-id="xe1GtPoAxQIDCJGT">Interest Rate:</span>
                    <span className="font-semibold" data-spec-id="AWovsS8akjb4Rj7a">{interestRate}% per year</span>
                  </div>
                  <div className="flex justify-between" data-spec-id="UBxAAKoZVv7FAKhF">
                    <span data-spec-id="4LtABhgBkt7oJsPL">Loan Term:</span>
                    <span className="font-semibold" data-spec-id="Zu6uDFt9GOURwGUT">{loanTerm} years</span>
                  </div>
                  <div className="flex justify-between" data-spec-id="pnRfsNFR4IvSLUp0">
                    <span data-spec-id="7FMD8VrVFvB9Decv">Total Payments:</span>
                    <span className="font-semibold" data-spec-id="7Zd1EpzQdDHxkasa">{parseFloat(loanTerm) * 12} months</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>)}

        {}
        <div className="mb-8" data-spec-id="ad-banner">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center" data-spec-id="70wqBI86vFPwEDbr">
            <p className="text-gray-500" data-spec-id="wdlcPrLd6z4kopOW">Advertisement Banner (728x90)</p>
          </div>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-spec-id="seo-content">
          <Card data-spec-id="RmzjkVOQ51dqG02H">
            <CardHeader data-spec-id="nYI4xf8NjCS3deHX">
              <CardTitle data-spec-id="xNaa8JMscCs0hX84">How to Use the Loan Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600" data-spec-id="tbXIq3MTzyguKFD8">
              <p data-spec-id="gZjodCZVrtJDd1d2">
                Our loan calculator helps you estimate monthly payments for any type of loan. 
                Simply enter the loan amount, annual interest rate, and loan term in years. 
                The calculator will show your monthly payment, total interest, and total amount paid.
              </p>
              <p data-spec-id="YgbDh1nmf8Z0GjG1">
                This tool is perfect for planning mortgages, auto loans, personal loans, 
                and any other fixed-rate installment loans. Use it to compare different 
                loan options and find the best terms for your budget.
              </p>
            </CardContent>
          </Card>
          
          <Card data-spec-id="qlfi5CkTc7PnsvX9">
            <CardHeader data-spec-id="guEUfSRCdfHWHUOo">
              <CardTitle data-spec-id="T30Av1fEkBsfuJKi">Loan Calculator Features</CardTitle>
            </CardHeader>
            <CardContent data-spec-id="xOg0zQpZbNiNE8f7">
              <ul className="space-y-2 text-gray-600" data-spec-id="EJib0S36Lsno5EwV">
                <li className="flex items-center" data-spec-id="hf31AzvDVtcGX4j6">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="WRujfiA1KLjM1mEk"></span>
                  Monthly payment calculation
                </li>
                <li className="flex items-center" data-spec-id="VCfpQR3snrVqZ44T">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="6BCnbXcI3j3Qc0Js"></span>
                  Total interest over loan term
                </li>
                <li className="flex items-center" data-spec-id="4pi6DTIUufqVph4v">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="NkVwKFcOJrmrKPfr"></span>
                  Total amount paid breakdown
                </li>
                <li className="flex items-center" data-spec-id="35C3xVWekwI8AkEk">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="4F2KrWJ8lKtFhSdn"></span>
                  Works for all loan types
                </li>
                <li className="flex items-center" data-spec-id="PmuK987v7HZbP2yA">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" data-spec-id="TvxYYB4nejsqSaG9"></span>
                  Instant results
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {}
        <Card data-spec-id="related-calculators">
          <CardHeader data-spec-id="fTJy4F4X68H83D7I">
            <CardTitle data-spec-id="PiZbGPXhOZjnPzhW">Related Financial Calculators</CardTitle>
            <CardDescription data-spec-id="hPBLvfU3WXazqK4i">Try these other financial planning tools</CardDescription>
          </CardHeader>
          <CardContent data-spec-id="jnIVXW6pSonXJMiI">
            <div className="grid md:grid-cols-3 gap-4" data-spec-id="RtwTJ3JnrWiieild">
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="FRBQe2rk339YLlv9">
                <Link to="/percentage-calculator" data-spec-id="SjFdAsCc8KfRRxbH">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="oWKhd2WtRohq0FfM"/>
                  Percentage Calculator
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="4VpLdSokLrSimAKt">
                <Link to="/currency-converter" data-spec-id="pW72pRn62eCu6COR">
                  <DollarSign className="h-6 w-6 mb-2" data-spec-id="8FsjdCrqYD5yGylT"/>
                  Currency Converter
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-16 flex-col" data-spec-id="WJMRBeHHlN2NIf2p">
                <Link to="/unit-converter" data-spec-id="BMsEgTIgFP57CPqA">
                  <Calculator className="h-6 w-6 mb-2" data-spec-id="f4YxPHS9BSsDK1Z3"/>
                  Unit Converter
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);
};
export default LoanCalculator;
