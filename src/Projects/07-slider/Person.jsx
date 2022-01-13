import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

function Person({ person, position }) {
  const { image, name, quote, title } = person;
  return (
    <article className={position}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p>{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}

export default Person;
