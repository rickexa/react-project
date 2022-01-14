import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Projects/projects";
import Nav from "./Nav";

function App() {
  const keys = Object.keys(Projects);
  return (
    <BrowserRouter>
      <Nav keys={keys} />
      <Routes>
        <Route path="/" element={home()} />
        {keys.map((k, i) => {
          const _k = k.toLowerCase();
          let route = _k === "cocktails" ? `/${_k}/*` : `/${_k}`;
          return <Route key={i} path={route} element={<div id={_k}>{Projects[k]}</div>} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function home() {
  return (
    <div style={{ textAlign: "center", marginTop: "6rem", fontSize: "3rem" }}>
      <h1>Choose a project!</h1>
    </div>
  );
}
