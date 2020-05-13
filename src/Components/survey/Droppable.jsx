import React from "react";
import PropTypes from "prop-types";

function Droppable(props) {
  const drop = (event) => {
    event.preventDefault();
    const virtue_id = event.dataTransfer.getData("virtue_id");

    // event.target.appendChild(document.getElementById(virtue_id));
    props.handleSetColumn(virtue_id);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div id={props.id} onDrop={drop} onDragOver={allowDrop}>
      {props.children}
    </div>
  );
}

Droppable.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};
export default Droppable;
