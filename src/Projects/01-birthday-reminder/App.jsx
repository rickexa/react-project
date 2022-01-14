import React, { useState } from "react";
import data from "./data";
import List from "./components/List";

function App() {
  document.title = "Birthday Reminder";
  require("./index.scss");
  const [people, setPeople] = useState(data);
  return (
    <div id="birthday">
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App;
