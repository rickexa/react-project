import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktails</label>
          <input
            autoComplete="off"
            type="text"
            id="name"
            ref={searchValue}
            onChange={() => setSearchTerm(searchValue.current.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
