import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterItems, setFilterItems] = useState(items);
  const catList = [...new Set(items.map((i) => i.category))];

  useEffect(() => {
    const filter = selectedCategory ? items.filter((item) => item.category === selectedCategory) : items;
    setFilterItems(filter);
  }, [selectedCategory]);

  require("./index.css");
  return (
    <div className="section menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories catList={catList} setSelectedCategory={setSelectedCategory} />
      <Menu items={filterItems} />
    </div>
  );
}

export default App;
