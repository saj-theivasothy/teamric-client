import React from "react";

import VirtueBucketListItem from "./VirtueBucketListItem";

import "./styles/virtue-bucket-list.scss";

const VirtueBucketList = (props) => {
  const virtueBuckets = props.virtue_buckets.map((virtueBucket) => (
    <VirtueBucketListItem {...virtueBucket} />
  ));

  return (
    <article className="virtue_buckets_container">
      <h6>Select a Virtue Category</h6>
      <div>{virtueBuckets}</div>
    </article>
  );
};

export default VirtueBucketList;
