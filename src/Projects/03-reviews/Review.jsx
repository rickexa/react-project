import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const changePerson = (incr) => {
    let nextIndex = index + incr;
    if (nextIndex < 0) nextIndex = people.length - 1;
    else if (nextIndex === people.length) nextIndex = 0;
    setIndex(nextIndex);
  };

  const randomPerson = () => {
    let rand = Math.floor(Math.random() * people.length);
    setIndex(rand);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => changePerson(-1)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => changePerson(1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
