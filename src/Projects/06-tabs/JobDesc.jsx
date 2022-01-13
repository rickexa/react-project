import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function JobDesc({ desc }) {
  return (
    <div className="job-desc">
      <FaAngleDoubleRight className="job-icon" />
      <p>{desc}</p>
    </div>
  );
}

export default JobDesc;
