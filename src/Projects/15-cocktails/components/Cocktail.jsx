import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, img, alcoholic, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
