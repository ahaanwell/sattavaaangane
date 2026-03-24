"use client";

import { useState, useEffect } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [calculated, setCalculated] = useState(false);
  const [errors, setErrors] = useState({});

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  const validate = () => {
    const errs = {};
    if (!loanAmount || isNaN(loanAmount) || Number(loanAmount) <= 0)
      errs.loanAmount = "Enter a valid loan amount";
    if (!interestRate || isNaN(interestRate) || Number(interestRate) <= 0 || Number(interestRate) > 50)
      errs.interestRate = "Enter a valid interest rate (0–50%)";
    if (!tenure || isNaN(tenure) || Number(tenure) <= 0 || Number(tenure) > 40)
      errs.tenure = "Enter a valid tenure (1–40 years)";
    return errs;
  };

  const calculateEMI = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(tenure);

    const r = annualRate / 12 / 100;
    const n = years * 12;

    const emiVal = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = emiVal * n;
    const totalInt = totalPay - P;

    setEmi(emiVal);
    setTotalInterest(totalInt);
    setTotalPayment(totalPay);
    setCalculated(true);
  };

  const reset = () => {
    setLoanAmount("");
    setInterestRate("");
    setTenure("");
    setEmi(null);
    setTotalInterest(null);
    setTotalPayment(null);
    setCalculated(false);
    setErrors({});
  };

  // Pie chart math
  const principalPct = totalPayment ? (parseFloat(loanAmount) / totalPayment) * 100 : 0;
  const interestPct = 100 - principalPct;

  const radius = 60;
  const circ = 2 * Math.PI * radius;
  const principalDash = (principalPct / 100) * circ;
  const interestDash = (interestPct / 100) * circ;

  return (
    <div className="min-h-screen bg-[#ffffff] flex items-center justify-center p-6 font-serif">
      <div className="w-full max-w-5xl relative">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.35em] text-primary uppercase mb-2 font-sans">
            Real Estate Finance
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] tracking-tight leading-none">
            EMI Calculator
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16 bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="h-px w-16 bg-primary" />
          </div>
          <p className="mt-4 text-gray-800 text-sm font-sans tracking-wide max-w-md mx-auto">
            Plan your home loan with confidence. Get a detailed breakdown of your monthly commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-[#e8ddd0] p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] tracking-tight font-sans">
                Loan Details
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold tracking-widest text-black uppercase mb-2 font-sans">
                  Loan Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black font-semibold text-lg font-sans">₹</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="e.g. 5000000"
                    className={`w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-gray-600 bg-white text-[#1a1a1a] font-sans text-base outline-none transition-all placeholder:text-[#c4b49e] focus:border-[#ce3125] focus:bg-white ${
                      errors.loanAmount ? "border-red-400" : "border-[#e8ddd0]"
                    }`}
                  />
                </div>
                {errors.loanAmount && (
                  <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.loanAmount}</p>
                )}
                {loanAmount && !errors.loanAmount && (
                  <p className="mt-1.5 text-xs text-[#8b7355] font-sans">
                    {formatCurrency(loanAmount)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest text-black uppercase mb-2 font-sans">
                  Annual Interest Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="e.g. 8.5"
                    step="0.1"
                    className={`w-full pl-4 pr-10 py-3.5 rounded-xl border-2 border-gray-600 bg-white text-[#1a1a1a] font-sans text-base outline-none transition-all placeholder:text-[#c4b49e] focus:border-[#ce3125] focus:bg-white ${
                      errors.interestRate ? "border-red-400" : "border-[#e8ddd0]"
                    }`}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black font-semibold font-sans">%</span>
                </div>
                {errors.interestRate && (
                  <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.interestRate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest text-black uppercase mb-2 font-sans">
                  Loan Tenure (Years)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="e.g. 20"
                    className={`w-full pl-4 pr-16 py-3.5 rounded-xl border-2 border-gray-600 bg-white text-[#1a1a1a] font-sans text-base outline-none transition-all placeholder:text-[#c4b49e] focus:border-[#ce3125] focus:bg-white ${
                      errors.tenure ? "border-red-400" : "border-[#e8ddd0]"
                    }`}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-sans">yrs</span>
                </div>
                {errors.tenure && (
                  <p className="mt-1.5 text-xs text-red-500 font-sans">{errors.tenure}</p>
                )}
                {tenure && !errors.tenure && (
                  <p className="mt-1.5 text-xs text-black font-sans">
                    {tenure * 12} monthly instalments
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={calculateEMI}
                  className="flex-1 bg-primary cursor-pointer text-white py-4 rounded-xl font-semibold text-base tracking-wide font-sans transition-all duration-200 shadow-lg shadow-[#2d5a27]/20 hover:shadow-xl hover:shadow-[#2d5a27]/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Calculate EMI
                </button>
                {calculated && (
                  <button
                    onClick={reset}
                    className="px-6 py-4 rounded-xl border-2 border-black text-black font-semibold font-sans transition-all duration-200"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {!calculated ? (
              <div className="bg-white rounded-2xl shadow-xl border border-[#e8ddd0] p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-sm font-semibold tracking-widest text-black uppercase mb-4 font-sans">
                    About This Calculator
                  </h3>
                  <p className="text-gray-800 text-sm font-sans leading-relaxed">
                    Easily estimate your monthly home loan payments. Enter your loan amount, annual interest rate, and tenure to plan your budget effectively.
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  {["Loan amount", "Interest rate", "Tenure in years"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#f0ebe3] flex items-center justify-center text-[#ce3125] text-xs font-bold font-sans">
                        {i + 1}
                      </div>
                      <span className="text-sm text-[#6b5e4e] font-sans">Enter {item}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ce3125] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#6b5e4e] font-sans">Get instant results</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-primary rounded-2xl shadow-xl p-7 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/5 translate-y-6 -translate-x-6" />
                  <p className="text-xs tracking-widest uppercase text-white font-sans mb-1">
                    Monthly EMI
                  </p>
                  <p className="text-4xl font-bold tracking-tight mt-1">
                    {formatCurrency(emi)}
                  </p>
                  <div className="h-px bg-white/20 my-4" />
                  <div className="flex justify-between text-sm font-sans">
                    <div>
                      <p className="text-white text-xs mb-1">Per Year</p>
                      <p className="font-semibold">{formatCurrency(emi * 12)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xs mb-1">Tenure</p>
                      <p className="font-semibold">{tenure} Years</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-[#e8ddd0] p-6 flex-1">
                  <div className="flex items-center justify-center mb-5">
                    <div className="relative w-36 h-36">
                      <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
                        <circle cx="80" cy="80" r={radius} fill="none" stroke="#f0ebe3" strokeWidth="20" />
                        <circle
                          cx="80" cy="80" r={radius} fill="none"
                          stroke="#001ca8" strokeWidth="20"
                          strokeDasharray={`${principalDash} ${circ}`}
                          strokeLinecap="butt"
                        />
                        <circle
                          cx="80" cy="80" r={radius} fill="none"
                          stroke="#10cd00" strokeWidth="20"
                          strokeDasharray={`${interestDash} ${circ}`}
                          strokeDashoffset={-principalDash}
                          strokeLinecap="butt"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xs text-black font-sans">Total</span>
                        <span className="text-sm font-bold text-[#1a1a1a] font-sans leading-tight">
                          {formatCurrency(totalPayment).replace("₹", "₹")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5]">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#001ca8]" />
                        <span className="text-xs font-semibold text-[#6b5e4e] font-sans tracking-wide uppercase">Principal</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#1a1a1a] font-sans">{formatCurrency(loanAmount)}</p>
                        <p className="text-xs text-[#8b7355] font-sans">{principalPct.toFixed(1)}%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5]">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#10cd00]" />
                        <span className="text-xs font-semibold text-[#6b5e4e] font-sans tracking-wide uppercase">Interest</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#1a1a1a] font-sans">{formatCurrency(totalInterest)}</p>
                        <p className="text-xs text-[#8b7355] font-sans">{interestPct.toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-[#a89880] mt-6 font-sans tracking-wide">
          * EMI calculations are indicative. Actual figures may vary based on lender terms.
        </p>
      </div>
    </div>
  );
}