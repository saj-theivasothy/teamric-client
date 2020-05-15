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
        Recent Items
      </section>
      <section
        className={LayoutStyles.effect2}
        className={LayoutStyles.main_header}
        className={LayoutStyles.chart}
      >
        Recent Items
      </section>
      <section
        className={LayoutStyles.effect2}
        className={LayoutStyles.main_header}
        className={LayoutStyles.addchart}
      >
        Recent Items
      </section>
    </main>
  );
}

export default FeedbackContent;
