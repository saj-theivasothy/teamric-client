import React, { useState } from "react";

import VirtueListItem from "./VirtueListItem";

const VirtueList = (props) => {
  const virtues = props.virtues.map((virtue) => (
    <VirtueListItem key={virtue.id} {...virtue} />
  ));

  return <article>{virtues}</article>;
};

export default VirtueList;
