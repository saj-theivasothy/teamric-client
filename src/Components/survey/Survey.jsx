import React, { useState } from "react";

import Droppable from "./Droppable";
import Draggable from "./Draggable";

import data from "../../data/sample.json";

import Search from "../search/Search";

import VirtueBucketList from "./VirtueBucketList";

import VirtueListItem from "./VirtueListItem";

import "../styles/survey.scss";

const Survey = () => {
  const [employee, setEmployee] = useState();
  const [virtueBucket, setVirtueBucket] = useState();

  const selectEmployee = (id) => {
    setEmployee(id);
    console.log("Hi your survey id is", employee);
  };

  const selectVirtueBucket = (id) => {
    setVirtueBucket(id);
  };

  const getVirtuesForBucketId = (id) => {
    const virtues = data.virtues.filter(
      (virtue) => virtue.virtue_bucket_id === id
    );

    return virtues;
  };

  const virtues = getVirtuesForBucketId(virtueBucket).map((virtue) => (
    <VirtueListItem key={virtue.id} {...virtue} />
  ));

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
          <h6>Drag Virtues</h6>
          <Droppable id="dr1">
            <div className="virtues_container">{virtues}</div>
          </Droppable>
        </article>
        <div className="dropzone_container">
          <h6>Drop Virtues</h6>
          <Droppable id="dr2">
            <div className="dropzone"></div>
          </Droppable>
        </div>
        <div className="feedback_container">
          <h6></h6>
        </div>
      </main>
    </>
  );
};

export default Survey;
