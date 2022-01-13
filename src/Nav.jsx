import React from "react";
import "./nav.css";

function Nav({ keys }) {
  return (
    <ul id="nav">
      {keys.reverse().map((k, index) => (
        <li key={index}>
          <a href={"/" + k}>{k}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
