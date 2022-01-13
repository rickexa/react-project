import React, { useState, useEffect } from "react";

const Categories = ({ catList, setSelectedCategory }) => {
  const [activeCategories, setActiveCategories] = useState(
    catList.map((c) => {
      return { category: c, active: false };
    })
  );

  const toggleActive = (id) => {
    console.log(id);
    setActiveCategories((prev) => {
      const next = prev;
      next[id].active = !next[id].active;
      console.log(next);
      return next;
    });
  };

  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => setSelectedCategory(null)}>
        all
      </button>
      {activeCategories.map((c, id) => (
        <button
          key={id}
          className={c.active ? "filter-btn active" : "filter-btn"}
          onClick={() => {
            toggleActive(id);
            setSelectedCategory(c.category);
          }}
        >
          {c.category}
        </button>
      ))}
    </div>
  );
};

export default Categories;

// return (
//   <div className="btn-container">
//     <button className="filter-btn" onClick={() => setCategory("")}>
//       all
//     </button>
//     {catList.map((c, id) => (
//       <button key={id} className="filter-btn" onClick={() => setCategory(c)}>
//         {c}
//       </button>
//     ))}
//   </div>
// );
