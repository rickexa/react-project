import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <>
      {people.map((p) => (
        <Person key={p.id} {...p} />
      ))}
    </>
  );
};

export default List;
