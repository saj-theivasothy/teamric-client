import React, { useState, useEffect } from "react";

import Rating from "./Rating";
import Details from "./Details";

function Feedback(props) {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const { handleSetFeedback, id } = props;

  useEffect(() => {
    handleSetFeedback(id, rating, description);
  }, [id, rating, description]);

  return (
    <div>
      <div>{props.name}</div>
      <Rating onRate={setRating} />
      <Details onChange={setDescription} details={description} />
    </div>
  );
}

export default Feedback;

const data = {
  1: [
    { skillId: 1, rating: 2, description: "blahblah" },
    { skillId: 3, rating: 4, description: "blahblahyhyh" },
  ],
};
