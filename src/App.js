// src/App.js
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import MonthlyNifty50Form from "./components/MonthlyNifty50Form";
import DataTable from "./components/DataTable";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async (lowerBoundary, upperBoundary) => {
    try {
      const res = await axios.get("http://localhost:5000/nifty-data", {
        params: { lower: lowerBoundary, upper: upperBoundary },
      });
      setData(res.data);
    } catch (err) {
      alert("Error fetching data");
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h2 className="app-title">📊 Nifty 50 Monthly Data Viewer</h2>
      <MonthlyNifty50Form fetchData={fetchData} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
