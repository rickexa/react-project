import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  require("./index.css");
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
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length > 0)
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  else
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={() => getTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
}

export default App;
