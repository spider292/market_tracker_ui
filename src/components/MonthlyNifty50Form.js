// src/components/MonthlyNifty50Form.js
import React, { useState } from "react";
import "../MonthlyNifty50Form.css";

function MonthlyNifty50Form({ fetchData }) {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");

  const handleSubmit = () => {
    if (!firstValue || !secondValue || !thirdValue) {
      alert("Please enter all values");
      return;
    }

    // Calculate upper and lower boundaries
    const upperBoundary = parseFloat(firstValue) + parseFloat(secondValue);
    const lowerBoundary = parseFloat(firstValue) - parseFloat(thirdValue);

    // Fetch data based on calculated boundaries
    fetchData(lowerBoundary, upperBoundary);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Fetch Nifty 50 Data</h2>
      <div className="input-section">
        <div className="form-group">
          <input
            type="number"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
            className="input-field"
            placeholder="Enter first value"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
            className="input-field"
            placeholder="Enter second value"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            value={thirdValue}
            onChange={(e) => setThirdValue(e.target.value)}
            className="input-field"
            placeholder="Enter third value"
          />
        </div>

        <button onClick={handleSubmit} className="submit-button">
          Fetch Data
        </button>
      </div>
    </div>
  );
}

export default MonthlyNifty50Form;
