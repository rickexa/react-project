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
        <Route path="/birthday" element={<Projects.Birthday />} />
        {/* <Route path="/tours" element={<Projects.Tours />} />
        <Route path="/reviews" element={<Projects.Reviews />} />
        <Route path="/accordion" element={<Projects.Accordion />} />
        <Route path="/menu" element={<Projects.Menu />} />
        <Route path="/tabs" element={<Projects.Tabs />} />
        <Route path="/slider" element={<Projects.Slider />} />
        <Route path="/lorem" element={<Projects.Lorem />} />
        <Route path="/color" element={<Projects.Color />} />
        <Route path="/grocery" element={<Projects.Grocery />} />
        <Route path="/navbar" element={<Projects.NavBar />} />
        <Route path="/sidebar" element={<Projects.Sidebar />} />
        <Route path="/stripe" element={<Projects.Stripe />} /> */}
        <Route path="/cart" element={<Projects.Cart />} />
        <Route path="/cocktails/*" element={<Projects.Cocktails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
