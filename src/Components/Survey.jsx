import React, { useState } from "react";

import Search from "./Search";

import data from "../data/sample.json";

import VirtueBucketListItem from "./VirtueBucketListItem";

import "./styles/survey.css";

const Survey = () => {
  const [employee, setEmployee] = useState(0);

  const selectEmployee = (id) => {
    setEmployee(id);
    console.log("Hi your survey id is", employee);
  };

  return (
    <>
      <header>
        <h1>Feedback</h1>
      </header>
      <main>
        <div className="search_container">
          <Search className="search" onClick={selectEmployee} />
        </div>
        <div class="survey_bucket_container">
          <VirtueBucketListItem {...data.virtue_buckets[0]} />
        </div>
      </main>
    </>
  );
};

export default Survey;
