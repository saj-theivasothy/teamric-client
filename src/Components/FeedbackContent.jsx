import React from "react";
import "./styles/feedback.scss";

function FeedbackContent() {
  return (
    <section className="wrapper flex-row">
      <div className="flex-column">
        {/* <div class='content'>
      <h4>Feedback Summary</h4> */}
        {/* <h6>Personal Skills and competences</h6> */}
        {/* </div> */}
        <div>
          <dl>
            <dt>Personal Skills and competences</dt>
            <dd className="percentage percentage-11">
              <span className="text">Communication</span>
            </dd>
            <dd className="percentage percentage-49">
              <span className="text">Skill2</span>
            </dd>
            <dd className="percentage percentage-16">
              <span className="text">Skill3</span>
            </dd>
            <dd className="percentage percentage-5">
              <span className="text">Skill4</span>
            </dd>
            <dd className="percentage percentage-2">
              <span className="text">Skill5</span>
            </dd>
            <dd className="percentage percentage-2">
              <span className="text">Skill6</span>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default FeedbackContent;
