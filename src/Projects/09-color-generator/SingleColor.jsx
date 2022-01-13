import React, { useState, useEffect } from "react";
import { blackWhite } from "./utils";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <div
      className={`color ${blackWhite(rgb) === "white" ? "color-light" : null}`}
      style={{ background: hex }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value"> {weight}%</p>
      <p className="color-value"> {hex}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;
