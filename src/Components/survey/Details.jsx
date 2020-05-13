import React from "react";

function Details(props) {
  return (
    <label>
      Any Additional feedback on this virtue?
      <input
        type="textarea"
        name="details"
        value={props.description}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
}

export default Details;
