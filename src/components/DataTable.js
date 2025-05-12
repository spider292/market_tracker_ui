// src/components/DataTable.js
import React from "react";
import "../DataTable.css";

function DataTable({ data }) {
  return (
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Copy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.open}</td>
              <td>{row.high}</td>
              <td>{row.low}</td>
              <td>{row.close}</td>
              <td>
                <button
                  className="copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `Open: ${row.open}, High: ${row.high}, Low: ${row.low}, Close: ${row.close}`
                    );
                  }}
                >
                  Copy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
