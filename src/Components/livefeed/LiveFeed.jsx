import React from "react";
import Review from "./Review";
import styles from "./styles/livefeed.module.scss";

const LiveFeed = (props) => {
  const results = props.results.map((result) => {
    return (
      <Review
        reviewer={result.reviewer}
        receiver={result.receiver}
        feedbacks={result.feedback}
        date={result.createdAt}
      />
    );
  });
  return <div className={styles.livefeed}>{results}</div>;
};

export default LiveFeed;
