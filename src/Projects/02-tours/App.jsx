import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  document.title = "Tours";
  require("./index.scss");
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter((t) => t.id !== id));
  };

  const getTours = async () => {
    setLoading(true);
    try {
      let data = await fetch(url);
      data = await data.json();
      console.log(data);
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <div id="tours">
        <main>
          <Loading />
        </main>
      </div>
    );
  }
  if (tours.length > 0)
    return (
      <div id="tours">
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      </div>
    );
  else
    return (
      <div id="tours">
        <main>
          <div className="title">
            <h2>No Tours Left</h2>
            <button className="btn" onClick={() => getTours()}>
              Refresh
            </button>
          </div>
        </main>
      </div>
    );
}

export default App;
