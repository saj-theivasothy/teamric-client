import React from "react";

import styles from "./styles/employees.module.scss";

const EmployeeCard = (props) => {
  const { id, name, avatar, job_title, email } = props;
  return (
    <section class={styles.flip_card}>
      <div class={styles.flip_card_inner}>
        <img src={props.avatar} alt="profile" />
        <div class={styles.flip_card_back}>
          <h1>{props.name}</h1>
          <h1>{props.job_title}</h1>
          <div>
            <button
              onClick={(event) =>
                props.togglePopup([id, name, avatar, job_title, email])
              }
            >
              {" "}
              View Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCard;
