import React from "react";
import LayoutStyles from "./styles/layout.module.css";
import Graphic from "./Profile/Graphic";

{
  /* <Graphic type="scatter" xLabel="x" yLabel="y" title="Title" />
<Graphic type="timeline" xLabel="x" yLabel="y" title="Title" />
<Graphic type="pie" title="Title" />
<Graphic type="candle" title="Title" />
<Graphic type="quadrant" title="Title" />
<Graphic type="swarm" title="Title" /> */
}

function FeedbackContent() {
  return (
    <div className={LayoutStyles.main_heading}>
      <h3>DASHBOARD</h3>
      <main className={LayoutStyles.main}>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.heading}
        >
          <Graphic type="bar" xLabel="x" yLabel="y" title="Title" />
        </section>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.updates}
        >
          <Graphic type="scatter" xLabel="x" yLabel="y" title="Title" />
        </section>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.chart}
        >
          <Graphic type="candle" title="Title" />
        </section>

        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.addchart}
        >
          <Graphic type="timeline" xLabel="x" yLabel="y" title="Title" />
        </section>
        <section className={LayoutStyles.feed}>
          <h3>Live Feed</h3>
        </section>
      </main>
    </div>
  );
}

export default FeedbackContent;
