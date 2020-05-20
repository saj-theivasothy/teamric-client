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
    <>
      <div className={styles.review}>
        <div className={styles.date}>{date}</div>
        <div className={styles.flex_row_begin}>
          <div className={styles.flex_row}>
            <p>Reviewer:</p>
            <Employee {...props.reviewer} />
          </div>
          <div className={styles.flex_row}>
            {props.receiver && (
              <>
                <p>Receiver:</p>
                <Employee {...props.receiver} />
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.skills}>{skills}</div>
      <hr />
    </>
  );
};

export default Review;
