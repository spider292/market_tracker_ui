import React, { useState } from "react";
import MonthlyForm from "../components/MonthlyForm";
import DataTable from "../components/DataTable";

function Nifty50View() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (lower, upper) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/nifty-data?lower=${lower}&upper=${upper}`
      );
      const result = await res.json();
      setData(result);
    } catch (err) {
      alert("Failed to fetch Nifty 50 data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MonthlyForm label="Nifty 50" fetchData={fetchData} />
      {loading ? <p>Loading...</p> : <DataTable data={data} />}
    </>
  );
}

export default Nifty50View;
