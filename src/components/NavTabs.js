import React, { useState } from "react";
import Nifty50View from "../views/Nifty50View";
import RelianceView from "../views/RelianceView";
import "./NavTabs.css";

function NavTabs() {
  const [activeTab, setActiveTab] = useState("nifty");

  return (
    <div>
      <div className="tab-header">
        <button
          className={activeTab === "nifty" ? "active" : ""}
          onClick={() => setActiveTab("nifty")}
        >
          Nifty 50
        </button>
        <button
          className={activeTab === "reliance" ? "active" : ""}
          onClick={() => setActiveTab("reliance")}
        >
          Reliance
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "nifty" ? <Nifty50View /> : <RelianceView />}
      </div>
    </div>
  );
}

export default NavTabs;
