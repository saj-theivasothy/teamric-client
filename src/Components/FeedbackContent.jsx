import React, { useState, useEffect } from "react";
import LayoutStyles from "./styles/layout.module.css";
import Graphic from "./styles/Profile/Graphic";
import Dropdown from "./Dropdown";
import { getResults } from "./Helpers/getters";
import LiveFeed from "./livefeed/LiveFeed";

{
  /* <Graphic type="scatter" xLabel="x" yLabel="y" title="Title" />
<Graphic type="timeline" xLabel="x" yLabel="y" title="Title" />
<Graphic type="pie" title="Title" />
<Graphic type="candle" title="Title" />
<Graphic type="quadrant" title="Title" />
<Graphic type="swarm" title="Title" /> */
}

function FeedbackContent(props) {
  const {
    virtues,
    surveys,
    employees,
    feedbacks,
    graphSettings,
    handleChange,
    yearOptions,
    virtueBucketOptions,
  } = props;

  let liveFeedResults = [];
  if (surveys.length > 0 && employees.length > 0) {
    liveFeedResults = getResults(surveys, employees, virtues);
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
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("bar", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="bar"
              xLabel="Average Rating"
              yLabel="Vitue Bucket"
              title="AVERAGE RATING FOR VIRTUE BUCKET"
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
            onClick={(event) => handleChange("quadrant", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="quadrant"
              xLabel="Completeness of Vision"
              yLabel="Ability to Execute"
              title="MAGIC QUADRANT FOR WORKPLACE"
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
            onClick={(event) => handleChange("swarm", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="swarm"
              xLabel="Category"
              yLabel="Average Rating"
              title="AVERAGE RATING OF THE TEAM"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>

        <section
          className={LayoutStyles.timeline}
          className={LayoutStyles.main_header}
          className={LayoutStyles.addchart}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("timeline", event)}
          />
          <Dropdown
            title="Select Virtue Bucket"
            options={virtueBucketOptions}
            onClick={(event) => handleChange("timeline", event, true)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              className={LayoutStyles.timeline_graph}
              type="timeline"
              xLabel="Timeline"
              yLabel="Average Rating"
              title="AVERAGE PERFORMANCE OVERTIME"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section className={LayoutStyles.feed}>
          <h4>LIVE FEED</h4>
          {liveFeedResults.length > 0 && <LiveFeed results={liveFeedResults} />}
        </section>
      </main>
    </div>
  );
}

export default FeedbackContent;
