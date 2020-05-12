import React from "react";

import "../styles/virtue-bucket-list-item.scss";

const VirtueBucketListItem = (props) => {
  return (
    <article className="bucket_item_container">
      <img
        className="icon"
        src={props.img}
        alt="virtue bucket icon"
        onClick={props.onClick}
      />
      <p>{props.name}</p>
    </article>
  );
};

export default VirtueBucketListItem;
