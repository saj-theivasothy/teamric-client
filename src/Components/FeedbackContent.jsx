import React, { useState, useEffect } from "react";
import LayoutStyles from "./styles/layout.module.css";
import Graphic from "./Profile/Graphic";
import axios from "axios";

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
    timeline: [2018, "Knowledge"],
    pie: ["Mary Tyler"],
    quadrant: [2019],
    scatter: [2019],
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

  return (
    <div className={LayoutStyles.main_heading}>
      <h3>DASHBOARD</h3>
      <main className={LayoutStyles.main}>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.heading}
        >
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
          {feedbacks.length > 0 && (
            <Graphic
              type="quadrant"
              xLabel="x"
              yLabel="y"
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
