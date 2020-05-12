import React from "react";

import "../styles/virtue-list-item.scss";

const VirtueListItem = (props) => {
  return (
    <article
      className="virtue_container"
      onClick={() => props.onClick(props.id)}
    >
      {props.name}
    </article>
  );
};

export default VirtueListItem;
