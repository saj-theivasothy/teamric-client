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
import "react-dynamic-charts/dist/index.css";

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
      <div className={styles.popup_inner}>
        <section className={styles.box2}>
          {/* Box 1 orange color */}
          <img src={employee[2]} alt={employee[1]} />
          <div className={styles.bio}>
            <h3>{employee[1]}</h3>
            <hr></hr>
            <h4>{employee[3]}</h4>
          </div>
        </section>
        <section className={styles.box3}>
          <h3>Recent Feedbacks</h3>
          <div>
            <LiveFeed results={userFeedbacks} />
          </div>
        </section>
        <section className={styles.box4}>
          {totalAverage}
          <h3>Average Ratings</h3>
          {ratings.length > 0 && <div>{ratings}</div>}
        </section>
        <button onClick={props.closePopup}>X</button>
      </div>
    </div>
  );
};

export default EmployeeProfile;
