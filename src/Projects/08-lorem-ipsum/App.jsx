import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import data from "./data";
import Lorem from "./Lorem";

function App() {
  document.title = "Lorem Ipsum";
  require("./index.scss");
  const [pCount, setPCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setParagraphs(data.slice(0, pCount));
  };

  useEffect(() => {
    if (pCount <= 0) setPCount(1);
    if (pCount > data.length) setPCount(data.length);
  }, [pCount]);

  return (
    <section className="section-center" onSubmit={(e) => submit(e)}>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={pCount}
          onChange={(e) => setPCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <div className="section-center">
        {paragraphs.map((par, i) => (
          <Lorem key={i} text={par} />
        ))}
      </div>
    </section>
  );
}

export default App;
