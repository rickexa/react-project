import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div id="cocktails">
      <section className="section error-page">
        <div className="error-container">
          <h1>ooops! it's a dead end</h1>
          <Link to="" className="btn btn-primary">
            back home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Error;
