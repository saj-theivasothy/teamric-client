import React from "react";
import Rater from "react-rater";
import "../survey/styles/rating.scss";
import styles from "./styles/livefeed.module.scss";

const Skill = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <Rater total={5} rating={props.rating} interactive={false} />
      {props.description && <div>{props.description}</div>}
    </div>
  );
};

export default Skill;
