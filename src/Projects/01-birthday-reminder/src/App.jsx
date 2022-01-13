import React, { useState } from "react";
import data from "./data";
import List from "./components/List";

function App() {
  require("./index.css");
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear All</button>
      </section>
    </main>
  );
}

export default App;