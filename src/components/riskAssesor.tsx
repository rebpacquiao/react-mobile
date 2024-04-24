import React from "react";

function Listing({ title, description, thumbnail }) {
  return (
    <div className="list-container">
      <img src={thumbnail} alt={title} style={{ marginRight: "1em" }} />
      <div className="listing-content">
        <h2 style={{ fontWeight: "bold" }}>{title}</h2>
        <p>{description}</p>
        <button className="enroll-btn">ENROLL FOR FREE</button>
      </div>
    </div>
  );
}

export default Listing;
