import React from "react";

import "../styles/virtue-list-item.scss";

const VirtueListItem = (props) => {
  return (
    <article className="virtue_container">
      <div>{props.name}</div>
    </article>
  );
};

export default VirtueListItem;
