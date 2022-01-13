import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  require("./index2.scss");
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div id="cart">
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
    <div id="cart">
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
