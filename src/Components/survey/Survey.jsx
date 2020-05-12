import React, { useState } from "react";

import data from "../../data/sample.json";

import Search from "../search/Search";

import VirtueBucketList from "./VirtueBucketList";

import VirtueListItem from "./VirtueListItem";

import "../styles/survey.scss";

const Survey = () => {
  const [employee, setEmployee] = useState();
  const [virtueBucket, setVirtueBucket] = useState();
  const [selectedVirtues, setSelectedVirtues] = useState([]);

  const selectEmployee = (id) => {
    setEmployee(id);
  };

  const selectVirtueBucket = (id) => {
    setVirtueBucket(id);
  };

  const selectVirtues = (id) => {};

  const getVirtuesById = (id) => {
    data.virtues.filter((virtue) => virtue.id === id);
  };

  const getVirtuesForBucketId = (id) => {
    const virtues = data.virtues.filter(
      (virtue) => virtue.virtue_bucket_id === id
    );
    return virtues;
  };

  const virtuesForBucket = getVirtuesForBucketId(virtueBucket);
  const virtues = virtuesForBucket.map((virtue) => {
    return (
      <VirtueListItem
        key={virtue.id}
        {...virtue}
        onClick={setSelectedVirtues}
      />
    );
  });

  return (
    <>
      <header>
        <h1>Feedback</h1>
      </header>
      <main>
        <div className="search_container">
          <Search className="search" onClick={selectEmployee} />
        </div>
        <div className="survey_bucket_container">
          <div className="virtue_categories">
            <h6>Select a Virtue Category</h6>
            <VirtueBucketList
              virtue_buckets={data.virtue_buckets}
              onClick={selectVirtueBucket}
            />
          </div>
        </div>
        <article className="dragzone_container">
          <h6>Select Virtues</h6>
          <div className="virtues_container">{virtues}</div>
        </article>
        <div className="feedback_container">
          <h6>Give your feedback</h6>
        </div>
      </main>
    </>
  );
};

export default Survey;
