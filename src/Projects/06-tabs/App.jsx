import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Company from "./Company";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";
function App() {
  require("./index.css");
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [selected, setSelected] = useState(0);

  const getJobs = async () => {
    setLoading(true);

    try {
      let data = await fetch(url);
      data = await data.json();
      console.log(data);
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }
  // console.log(selectedTab);
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <Company data={jobs} setSelected={setSelected} current={selected} />
          {<JobInfo job={jobs[selected]} />}
        </div>
        <button className="btn">more info</button>
      </section>
    </>
  );
}

export default App;
