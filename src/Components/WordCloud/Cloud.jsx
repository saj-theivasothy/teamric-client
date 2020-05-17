import React from "react";
import ReactWordcloud from "react-wordcloud";
import "./cloud.css";

import words from "./words";

function Cloud() {
  return (
    <div className="word-cloud">
      <ReactWordcloud words={words} />
    </div>
  );
}

export default Cloud;
