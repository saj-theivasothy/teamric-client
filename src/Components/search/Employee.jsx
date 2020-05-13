import React from "react";

import "../styles/employee.css";

const Employee = (props) => {
  return (
    <article class="employee">
      <img
        class="employee_avatar"
        src={props.avatar}
        alt="employee-avatar"
        onClick={props.onClick}
      />
      <div class="employee_name" onClick={props.onClick}>
        {props.name}
      </div>
    </article>
  );
};

export default Employee;
