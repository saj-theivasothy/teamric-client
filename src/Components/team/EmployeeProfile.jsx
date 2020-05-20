import React from "react";

import styles from "./styles/employees.module.scss";

import { getUserFeedbacks, getAverageRatings } from "../Helpers/getters";
import LiveFeed from "../livefeed/LiveFeed";

const EmployeeProfile = (props) => {
  const { employee, surveys, virtues, employees, virtueBuckets } = props;

  let userFeedbacks = [];
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
    const averageFeedbacks = getAverageRatings(userFeedbacks);
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
          <h3>Ratings</h3>
        </section>
        <button onClick={props.closePopup}>X</button>
      </div>
    </div>
  );
};

export default EmployeeProfile;
