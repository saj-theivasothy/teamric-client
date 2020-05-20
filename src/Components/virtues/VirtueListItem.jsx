import React, { useState, useEffect } from "react";

import styles from "./styles/virtue.module.scss";

const VirtueListItem = (props) => {
  const [toggle, setToggle] = useState({ open: true });

  const handleToggle = (id, virtueBuckets) => {
    const found = virtueBuckets.some((current) => current.id === id);
    if (!found) {
      setToggle({ open: true });
    } else {
      setToggle({ open: false });
    }
  };

  useEffect(() => {
    handleToggle(props.id, props.selectedVirtues);
  }, [props.id, props.selectedVirtues]);

  const getStyle = (toggle) => {
    return toggle.open
      ? styles.virtue_container
      : styles.virtue_container_selected;
  };

  const style = getStyle(toggle);
  return (
    <article className={style} onClick={() => props.onClick(props.id)}>
      {props.name}
    </article>
  );
};

export default VirtueListItem;
