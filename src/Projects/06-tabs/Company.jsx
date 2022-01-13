import React, { useState } from "react";

function Company({ data, setSelected, current }) {
  return (
    <div className="btn-container">
      {data.map((j, index) => (
        <button
          key={j.id}
          className={`job-btn ${current == index && "active-btn"}`}
          onClick={() => setSelected(index)}
        >
          {j.company}
        </button>
      ))}
    </div>
  );
}

export default Company;
