import React from "react";

import VirtueBucketListItem from "./VirtueBucketListItem";

import styles from "../styles/virtue.module.scss";

const VirtueBucketList = (props) => {
  const virtueBuckets = props.virtue_buckets.map((virtueBucket) => (
    <VirtueBucketListItem
      key={virtueBucket.id}
      {...virtueBucket}
      onClick={() => props.onClick(virtueBucket.id)}
    />
  ));

  return (
    <article className={styles.virtue_buckets_container}>
      <div>{virtueBuckets}</div>
    </article>
  );
};

export default VirtueBucketList;
