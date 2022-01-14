import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { AppProvider } from "./context";

function App() {
  document.title = "Stripe Submenus";
  require("./index.scss");

  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
}

export default App;
