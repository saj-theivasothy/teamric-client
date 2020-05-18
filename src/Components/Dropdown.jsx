import React, { useState } from "react";
var FontAwesome = require("react-fontawesome");

const Dropdown = (props) => {
  const [state, setState] = useState({
    listOpen: false,
  });

  const handleClickOutside = () => {
    setState({ listOpen: false });
  };

  const toggleList = () => {
    setState((prevState) => ({ listOpen: !prevState.listOpen }));
  };

  return (
    <div className="dd-wrapper" onClickOutside={handleClickOutside}>
      <div className="dd-header" onClick={() => toggleList()}>
        <div className="dd-header-title">{props.title}</div>
        {state.listOpen ? (
          <FontAwesome name="angle-up" size="2x" />
        ) : (
          <FontAwesome name="angle-down" size="2x" />
        )}
      </div>
      {state.listOpen && (
        <ul className="dd-list">
          {props.options.map((option) => (
            <li
              className="dd-list-item"
              key={option.id}
              onClick={props.onClick}
              value={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
