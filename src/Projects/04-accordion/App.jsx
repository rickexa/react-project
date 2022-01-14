import React from "react";
import data from "./questions";

import SingleQuestion from "./Question";

function App() {
  document.title = "Accordion";
  require("./index.scss");
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((q) => (
            <SingleQuestion key={q.id} {...q} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
