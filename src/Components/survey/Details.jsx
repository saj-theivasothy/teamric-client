import React from "react";

import styles from "./styles/survey.module.scss";

function Details(props) {
  return (
    <label>
      Any Additional feedback on this virtue?
      <textarea
        cols={40}
        rows={5}
        name="details"
        value={props.description}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
}

export default Details;
