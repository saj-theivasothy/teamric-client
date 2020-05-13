import React from "react";
import "./styles/feedback.scss";
import Profile from "./Profile/Profile";

function FeedbackContent() {
  return (
    <section>
      <div class="container-one">
        <div class="card"></div>

        <div class="card card__ig"></div>
        <div class="card card__yt"></div>
      </div>
      <div className="big_card"></div>
    </section>
  );
}

export default FeedbackContent;
