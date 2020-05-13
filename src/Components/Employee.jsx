import React from "react";

import "./styles/employee.css";

const Employee = (props) => {
  return (
    <article className="employee">
      <img
        className="employee_avatar"
        src={props.avatar}
        alt="employee-avatar"
        onClick={() => props.onClick(props.id)}
      />
      <div className="employee_name" onClick={() => props.onClick(props.id)}>
        {props.name}
      </div>
    </article>
  );
};

export default Employee;
