import React, { useState } from "react";

import Droppable from "./Droppable";
import Draggable from "./Draggable";

import data from "../../data/sample.json";

import Search from "../search/Search";

import VirtueBucketList from "./VirtueBucketList";

import VirtueList from "./VirtueList";

import "../styles/survey.scss";

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
        <div className="survey_bucket_container">
          <div className="virtue_categories">
            <h6>Select a Virtue Category</h6>
            <VirtueBucketList virtue_buckets={data.virtue_buckets} />
          </div>
        </div>
        <div>
          <div className="virtues">
            <h6>Select Virtue</h6>
            <Droppable id="dr1">
              <div>
                <VirtueList virtues={data.virtues} />
              </div>
            </Droppable>
          </div>
        </div>
        <Droppable id="dr2">
          <div className="dropzone_container"></div>
        </Droppable>
        <div className="feedback_container">
          <h6></h6>
        </div>
      </main>
    </>
  );
};

export default Survey;
