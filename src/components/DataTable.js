import React from "react";
import "./DataTable.css";

function DataTable({ data }) {
  const copy = (val) => navigator.clipboard.writeText(val);

  const open = data.filter(d => d.open !== undefined).map(d => d.open);
  const high = data.filter(d => d.high !== undefined).map(d => d.high);
  const low = data.filter(d => d.low !== undefined).map(d => d.low);
  const close = data.filter(d => d.close !== undefined).map(d => d.close);
  const maxLen = Math.max(open.length, high.length, low.length, close.length);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr><th>Open</th><th>High</th><th>Low</th><th>Close</th></tr>
        </thead>
        <tbody>
          {Array.from({ length: maxLen }).map((_, i) => (
            <tr key={i}>
              {[open[i], high[i], low[i], close[i]].map((val, j) => (
                <td key={j}>
                  {val !== undefined && (
                    <>
                      {val}{" "}
                      <span onClick={() => copy(val)} className="copy-icon">📋</span>
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
