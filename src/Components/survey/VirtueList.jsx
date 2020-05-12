import React, { useState } from "react";

import VirtueListItem from "./VirtueListItem";

import Droppable from "./Droppable";

import "../styles/virtue_list.scss";

const VirtueList = (props) => {
  const virtues = props.virtues.map((virtue) => (
    <VirtueListItem key={virtue.id} {...virtue} />
  ));

  return (
    <Droppable id="dr1">
      <article className="virtues_container">{virtues}</article>
    </Droppable>
  );
};

export default VirtueList;
