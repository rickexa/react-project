import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("as ");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const drinks = await (await fetch(url + searchTerm)).json();
      // console.log(drinks.drinks[0]);
      setCocktails(
        drinks.drinks.map((cc) => {
          return {
            id: cc.idDrink,
            name: cc.strDrink,
            img: cc.strDrinkThumb,
            alcoholic: cc.strAlcoholic,
            glass: cc.strGlass,
            ingreds: getIngredients(cc),
            instructions: cc.strInstructions,
          };
        })
      );
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

const getIngredients = (drink) => {
  const ingredients = [];
  const str = "strIngredient";
  for (let i = 1; i <= 15; i++) {
    const temp = drink[str + i];
    if (temp) ingredients.push(temp);
  }
  return ingredients;
};
