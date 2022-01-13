import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Slider({ type, onClick }) {
  return (
    <button className={type} onClick={onClick}>
      {type === "prev" && <FiChevronLeft />}
      {type === "next" && <FiChevronRight />}
    </button>
  );
}

export default Slider;
