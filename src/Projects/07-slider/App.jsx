import React, { useState, useEffect } from "react";
import data from "./data";
import Slider from "./Slider";
import Person from "./Person";

function App() {
  require("./index.css");
  const [people, setPeople] = useState(data);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const last = people.length - 1;
    if (selected < 0) setSelected(last);
    if (selected > last) setSelected(0);
  }, [selected, people]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelected(selected + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [selected]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          let position = "nextSlide";
          if (selected === index) position = "activeSlide";
          if (index === selected - 1 || (selected === 0 && index === people.length - 1))
            position = "lastSlide";
          return <Person person={person} position={position} key={person.id} />;
        })}
        <Slider type={"prev"} onClick={() => setSelected(selected - 1)} />
        <Slider type={"next"} onClick={() => setSelected(selected + 1)} />
      </div>
    </section>
  );
}

export default App;
