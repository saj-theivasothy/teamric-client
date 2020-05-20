import React from "react";

import Employee from "../search/Employee";
import Skill from "./Skill";
import styles from "./styles/livefeed.module.scss";

const Review = (props) => {
  const skills = props.feedbacks.map((data) => {
    return <Skill {...data} />;
  });

  const date = new Date(props.date).toDateString();
  return (
    <section>
      <div className={styles.review}>
        <div className={styles.date}>{date}</div>
        <p>Reviewer:</p>
        <Employee {...props.reviewer} />
        {props.receiver && (
          <>
            <p>Receiver:</p>
            <Employee {...props.receiver} />
          </>
        )}
      </div>
      <div>{skills}</div>
    </section>
  );
};

export default Review;
