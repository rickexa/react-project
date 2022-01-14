import React, { useState } from "react";

const Categories = ({ catList, setSelectedCategory }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => setSelectedCategory("")}>
        all
      </button>
      {catList.map((c, id) => (
        <button key={id} className="filter-btn" onClick={() => setSelectedCategory(c)}>
          {c}
        </button>
      ))}
    </div>
  );
};

export default Categories;
