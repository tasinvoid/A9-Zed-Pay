import React, { useState } from "react";

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTenure);

    const calculatedEMI =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);

    setEmi(calculatedEMI.toFixed(2));
  };

  return (
    <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10">
      <h2>EMI Calculator</h2>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="border rounded-sm"
        />
      </div>
      <div>
        <label>Interest Rate (Annual %):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => e.target.value}
          className="border rounded-sm"
        />
      </div>
      <div>
        <label>Loan Tenure (Months):</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          className="border rounded-sm"
        />
      </div>
      <button onClick={calculateEMI} className="btn">Calculate EMI</button>
      {emi > 0 && <div>EMI: {emi}</div>}
    </div>
  );
}

export default EMICalculator;
