import React from "react";
import PropTypes from "prop-types";

function Draggable(props) {
  const drag = (event) => {
    event.dataTransfer.setData("virtue_id", event.target.id);
    event.dataTransfer.dropEffect = "move";
  };

  const noAllowDrop = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      id={props.id}
      draggable="true"
      onDragStart={drag}
      onDragOver={noAllowDrop}
      style={{ width: "fit-content" }}
    >
      {props.children}
    </div>
  );
}

Draggable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Draggable;
