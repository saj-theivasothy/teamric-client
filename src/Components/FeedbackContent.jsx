import React, { useState, useEffect } from "react";
import LayoutStyles from "./styles/layout.module.css";
import Graphic from "./Profile/Graphic";
import axios from "axios";
import Dropdown from "./Dropdown";

import { getFeedbacks } from "./Helpers/getters";

{
  /* <Graphic type="scatter" xLabel="x" yLabel="y" title="Title" />
<Graphic type="timeline" xLabel="x" yLabel="y" title="Title" />
<Graphic type="pie" title="Title" />
<Graphic type="candle" title="Title" />
<Graphic type="quadrant" title="Title" />
<Graphic type="swarm" title="Title" /> */
}

function FeedbackContent() {
  const [surveys, setSurveys] = useState([]);
  const [virtues, setVirtues] = useState([]);
  const [virtueBuckets, setVirtueBuckets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [graphSettings, setGraphSettings] = useState({
    timeline: [2020, "Courage"],
    pie: [2018, "Stephen Khan"],
    quadrant: [2019],
    scatter: [2019],
    candle: [2019, "Execution", "Stephen Khan"],
    bar: [2020],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/surveys"),
      axios.get("/virtues"),
      axios.get("/virtues/buckets"),
      axios.get("/employees"),
    ]).then((all) => {
      setSurveys(all[0].data);
      setVirtues(all[1].data);
      setVirtueBuckets(all[2].data);
      setEmployees(all[3].data);
    });
  }, []);

  let feedbacks = [];
  if (
    surveys.length > 0 &&
    virtues.length > 0 &&
    virtueBuckets.length > 0 &&
    employees.length > 0
  ) {
    feedbacks = getFeedbacks(surveys, virtues, virtueBuckets, employees);
  }

  const yearOptions = [2017, 2018, 2019, 2020];
  const virtueBucketOptions = [...virtueBuckets].map((data) => data.name);

  const handleYearChange = (chart, event) => {
    const temp = [...graphSettings[chart]];

    temp.splice(0, 1, event.target.value);

    setGraphSettings({ ...graphSettings, [chart]: temp });
  };

  const handleBucketChange = (event, chart) => {
    const temp = [...graphSettings[chart]];

    temp.splice(1, 1, event.target.getAttribute("value"));

    setGraphSettings({ ...graphSettings, [chart]: temp });
  };
  
  return (
    <div className={LayoutStyles.main_heading}>
      <h3>DASHBOARD</h3>
      <main className={LayoutStyles.main}>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.heading}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleYearChange("bar", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="bar"
              xLabel="x"
              yLabel="y"
              title="Feedback"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.updates}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleYearChange("quadrant", event)}
          />
          {feedbacks.length > 0 && (
            // <Graphic
            //   type="pie"
            //   xLabel="x"
            //   yLabel="y"
            //   title="Title"
            //   feedbacks={feedbacks}
            //   settings={graphSettings}
            // />
            <Graphic

              type="quadrant"
              xLabel="x"
              yLabel="y"

              type="radar"

              title="Title"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.chart}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleYearChange("candle", event)}
          />
          <Dropdown
            title="Select Virtue Bucket"
            options={virtueBucketOptions}
            onClick={(event) => handleBucketChange(event, "candle")}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="candle"
              title="Title"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>

        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.addchart}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleYearChange("timeline", event)}
          />
          <Dropdown
            title="Select Virtue Bucket"
            options={virtueBucketOptions}
            onClick={(event) => handleBucketChange(event, "timeline")}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="timeline"
              xLabel="x"
              yLabel="y"
              title="Title"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section className={LayoutStyles.feed}>
          <h3>Live Feed</h3>
        </section>
      </main>
    </div>
  );
}

export default FeedbackContent;
