import React from "react";
import Profile from "./Profile/Profile";
import LayoutStyles from "./styles/layout.module.css";

function FeedbackContent() {
  return (
    <main className={LayoutStyles.main}>
      <div
        className={LayoutStyles.effect2}
        className={LayoutStyles.main_header}
        className={LayoutStyles.heading}
      >
        Hello User
      </div>
      <div
        className={LayoutStyles.effect2}
        className={LayoutStyles.main_header}
        className={LayoutStyles.updates}
      >
        Recent Items
      </div>
      <div
        className={LayoutStyles.effect2}
        className={LayoutStyles.main_header}
        className={LayoutStyles.chart}
      >
        Recent Items
      </div>
      <div
        className={LayoutStyles.effect2}
        className={LayoutStyles.main_header}
        className={LayoutStyles.addchart}
      >
        Recent Items
      </div>
    </main>
  );
}

export default FeedbackContent;
