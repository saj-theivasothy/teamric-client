import React from "react";
import "./styles/feedback.scss";
import Profile from "./Profile/Profile";

function FeedbackContent() {
  return (
    <section className="flex-column">
      <div className="container-one flex-row">
        <div className="card"></div>

        <div className="card card__ig"></div>
        <div className="card card__yt"></div>
      </div>
      <div className="big_card"></div>
    </section>
  );
}

export default FeedbackContent;
