import React from "react";
import Rater from "react-rater";
import "../styles/rating.scss";

const Rating = (props) => {
  return (
    <Rater total={5} rating={0} onRate={({ rating }) => props.onRate(rating)} />
  );
};

export default Rating;
