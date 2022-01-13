import React, { useState } from "react";
import JobDesc from "./JobDesc";

function JobInfo({ job }) {
  console.log(job);
  const { title, company, dates, duties } = job;

  return (
    <>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <div className="job-date">{dates}</div>
        {duties.map((d, index) => (
          <JobDesc key={index} desc={d} />
        ))}
      </article>
    </>
  );
}

export default JobInfo;
