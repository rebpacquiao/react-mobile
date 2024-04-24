import React, { useState } from "react";
import listings from "../data/riskAssesorListing";
import Listing from "../components/riskAssesor";

function SwitchComponent() {
  const [active, setActive] = useState("Risk assessor");

  const handleClick = (role) => {
    setActive(role);
  };

  return (
    <div className="switch-container">
      <div className="switch-toggle">
        <button
          onClick={() => handleClick("Risk assessor")}
          className={active === "Risk assessor" ? "active" : ""}
        >
          Risk assessor
        </button>
        <button
          onClick={() => handleClick("Task operator")}
          className={active === "Task operator" ? "active" : ""}
        >
          Task operator
        </button>
      </div>
      <div className="mt-6">
        {active === "Risk assessor" ? (
          <div>
            {listings.map((listing, index) => (
              <Listing key={index} {...listing} />
            ))}
          </div>
        ) : (
          <p>Coming Soon...</p>
        )}
      </div>
    </div>
  );
}

export default SwitchComponent;
