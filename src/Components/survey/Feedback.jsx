import React, { useState, useEffect } from "react";

import Rating from "./Rating";
import Details from "./Details";
import styles from "./styles/survey.module.scss";

function Feedback(props) {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const { handleSetFeedback, id } = props;

  useEffect(() => {
    handleSetFeedback(id, rating, description);
  }, [id, rating, description]);

  return (
    <>
      <div>{props.name}</div>
      <div className={styles.feedback}>
        <p>Rating:</p>
        <Rating onRate={setRating} className={rating} />
        <Details onChange={setDescription} details={description} />
      </div>
    </>
  );
}

export default Feedback;

const data = {
  1: [
    { skillId: 1, rating: 2, description: "blahblah" },
    { skillId: 3, rating: 4, description: "blahblahyhyh" },
  ],
};
