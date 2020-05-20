import React from "react";

import VirtueBucketListItem from "./VirtueBucketListItem";

import styles from "./styles/virtue.module.scss";

const VirtueBucketList = (props) => {
  const virtueBuckets = props.virtue_buckets.map((virtueBucket) => (
    <VirtueBucketListItem
      key={virtueBucket.id}
      {...virtueBucket}
      onClick={props.onClick}
      bucketState={props.bucketState}
    />
  ));

  return (
    <article className={styles.virtue_buckets_container}>
      {virtueBuckets}
    </article>
  );
};

export default VirtueBucketList;
