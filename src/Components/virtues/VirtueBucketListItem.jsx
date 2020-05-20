import React, { useState, useEffect } from "react";

import styles from "./styles/virtue.module.scss";

const VirtueBucketListItem = (props) => {
  const [toggle, setToggle] = useState({ open: true });

  const handleToggle = (id, bucketId) => {
    if (bucketId === id) {
      setToggle((prev) => ({ open: !prev.open }));
    } else {
      setToggle({ open: true });
    }
  };

  useEffect(() => {
    handleToggle(props.id, props.bucketState);
  }, [props.id, props.bucketState]);

  const getStyle = (toggle) =>
    toggle.open ? styles.icon : styles.icon_selected;

  const style = getStyle(toggle);

  return (
    <article className={styles.bucket_item_container}>
      <img
        className={style}
        src={props.img}
        alt="virtue bucket icon"
        onClick={() => props.onClick(props.id)}
      />
      <p>{props.name}</p>
    </article>
  );
};

export default VirtueBucketListItem;
