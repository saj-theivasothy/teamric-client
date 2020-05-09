import React from "react";

import "./styles/employee.css"

const Employee = (props) => {
  return (
    <article class="employee">
      <img class="employee_avatar" src={props.avatar} alt="employee-avatar" onClick={() => props.onClick(props.id)}/>
      <div class="employee_name">
        {props.name}
      </div>
    </article>
  )
}

export default Employee;