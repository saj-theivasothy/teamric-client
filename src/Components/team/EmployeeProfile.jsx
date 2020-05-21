import React from "react";

import {
  getUserFeedbacks,
  getAverageRatings,
  getTotalAverage,
} from "../Helpers/getters";
import LiveFeed from "../livefeed/LiveFeed";
// import Rater from "react-rater";
import Skill from "../livefeed/Skill";

import styles from "./styles/employees.module.scss";

const EmployeeProfile = (props) => {
  const { employee, surveys, virtues, employees, virtueBuckets } = props;

  let userFeedbacks = [];
  let averageRatings = [];
  let ratings = [];
  let totalAverage = [];
  if (
    (surveys.length > 0 && virtues.length > 0 && employees.length > 0,
    virtueBuckets.length > 0)
  ) {
    userFeedbacks = getUserFeedbacks(
      employee[0],
      surveys,
      virtues,
      employees,
      virtueBuckets
    );
    averageRatings = getAverageRatings(userFeedbacks);
    ratings = averageRatings.map((rating) => (
      <Skill name={rating.virtueBucket} rating={rating.average} />
    ));
    totalAverage = getTotalAverage(ratings);
  }

  return (
    <div className={styles.popup}>
      {/* main div with white background */}
      <div className={styles.popup_inner}>
        <button className={styles.close} onClick={props.closePopup}>
          X
        </button>
        <div className={styles.box2}>
          {/* Box 1 orange color */}
          <img src={employee[2]} alt={employee[1]} />
          <div className={styles.bio}>
            <h3>{employee[1]}</h3>
            <h4>{employee[3]}</h4>
            <hr></hr>
          </div>
        </div>

        <div className={styles.feedback_flex}>
          <div className={styles.box3}>
            <h3 className="center">Recent Feedbacks</h3>
            <div className={styles.feed_div}>
              <LiveFeed className={styles.live_feed} results={userFeedbacks} />
            </div>
          </div>

          <div className={styles.box4}>
            <h3 className="center">Average Ratings </h3>
            {/* {totalAverage} */}
            <div className={styles.ratings_div}>
              {ratings.length > 0 && <div>{ratings}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
