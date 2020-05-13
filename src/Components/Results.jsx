import React from "react";

import Employee from "./Employee";

const Results = (props) => {
  const { results } = props;

  return results.map((result) => {
    return <Employee key={result.id} {...result} onClick={props.onClick} />;
  });
};

export default Results;
