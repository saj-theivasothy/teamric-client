import React from "react";

import VirtueListItem from "./VirtueListItem";

import "../styles/virtue_list.scss";

const VirtueList = (props) => {
  const virtues = props.virtues.map((virtue) => (
    <VirtueListItem key={virtue.id} {...virtue} />
  ));

  return <article className="virtues_container">{virtues}</article>;
};

export default VirtueList;
