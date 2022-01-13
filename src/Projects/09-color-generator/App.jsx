import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  require("./index.css");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    let colors = [];
    try {
      setError(false);
      colors = new Values(color).all(10);
    } catch (e) {
      console.log(e);
      setError(true);
    }
    setList(colors);
  };

  return (
    <>
      <section className="container">
        <h3>color generator </h3>
        <form onSubmit={submit}>
          <input
            type="text"
            className={error ? "error" : ""}
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((el, i) => (
          <SingleColor key={i} {...el} index={i} hex={"#" + el.hex} />
        ))}
      </section>
    </>
  );
}

export default App;
