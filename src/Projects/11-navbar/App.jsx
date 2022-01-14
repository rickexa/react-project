import React from "react";
import Navbar from "./Navbar";

function App() {
  document.title = "Navbar";
  require("./index.scss");
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
