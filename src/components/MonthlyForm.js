import React, { useState } from "react";
import "./MonthlyForm.css";

function MonthlyForm({ fetchData, label }) {
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");

  const handleSubmit = () => {
    const u = parseFloat(upper);
    const l = parseFloat(lower);

    if (isNaN(u) || isNaN(l) || u <= l) {
      alert("Please enter valid limits");
      return;
    }

    fetchData(l, u);
  };

  return (
    <div className="form-container">
      <h2>{label} Monthly Filter</h2>
      <input
        type="number"
        placeholder="Lower limit"
        value={lower}
        onChange={(e) => setLower(e.target.value)}
      />
      <input
        type="number"
        placeholder="Upper limit"
        value={upper}
        onChange={(e) => setUpper(e.target.value)}
      />
      <button onClick={handleSubmit}>Fetch Data</button>
    </div>
  );
}

export default MonthlyForm;
