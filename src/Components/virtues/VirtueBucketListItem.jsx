import React from "react";

import styles from "../styles/virtue.module.scss";

const VirtueBucketListItem = (props) => {
  return (
    <article className={styles.bucket_item_container}>
      <img
        className={styles.icon}
        src={props.img}
        alt="virtue bucket icon"
        onClick={props.onClick}
      />
      <p>{props.name}</p>
    </article>
  );
};

export default VirtueBucketListItem;
