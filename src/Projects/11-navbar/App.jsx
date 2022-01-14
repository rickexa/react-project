import React from "react";
import Navbar from "./Navbar";

function App() {
  document.title = "Navbar";
  require("./index.scss");
  return (
    <>
      <Navbar />
      {home()}
    </>
  );
}

export default App;
function home() {
  return (
    <div style={{ textAlign: "center", marginTop: "6rem", fontSize: "2rem" }}>
      <h2>Shrink the window!</h2>
    </div>
  );
}
