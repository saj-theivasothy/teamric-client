import React from "react";
import Profile from "./Profile/Profile";
import LayoutStyles from "./styles/layout.module.css";

function FeedbackContent() {
  return (
    <main className={LayoutStyles.main}>
      <section
        className={LayoutStyles.effect2}
        className={LayoutStyles.main_header}
        className={LayoutStyles.heading}
      >
        Hello User
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
