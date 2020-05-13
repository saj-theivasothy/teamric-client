import React from "react";

import styles from "../styles/virtue.module.scss";

const VirtueListItem = (props) => {
  return (
    <article
      className={styles.virtue_container}
      onClick={() => props.onClick(props.id)}
    >
      {props.name}
    </article>
  );
};

export default VirtueListItem;
