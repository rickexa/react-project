import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";
// const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const { cocktails } = useGlobalContext();
  const [cocktail, setCocktail] = useState({});

  const { name, img, alcoholic, glass, instructions, ingreds } = cocktail;
  useEffect(() => {
    const filter = cocktails.filter((cc) => cc.id === id);
    console.log("filter");
    setCocktail(filter[0]);
  }, [cocktails, id]);

  return (
    <section className="section cocktail-section">
      <Link to="/cocktails" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{cocktail.name} </h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {alcoholic}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingreds && ingreds.map((ing, index) => <span key={index}>{ing}</span>)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
