import React, { useState, useEffect } from "react";

import "./styles/employee.css";

const Employee = (props) => {
  const [toggle, setToggle] = useState({ open: true });

  const handleToggle = (id, employee) => {
    if (employee === id) {
      setToggle((prev) => ({ open: !prev.open }));
    } else {
      setToggle({ open: true });
    }
  };

  useEffect(() => {
    handleToggle(props.id, props.employee);
  }, [props.employee, props.id]);

  const getStyle = (toggle, name) => {
    return toggle.open ? `${name}` : `${name}_selected`;
  };

  const style = getStyle(toggle, "employee_avatar");
  const textStyle = getStyle(toggle, "employee_name");

  return (
    <article class="employee">
      <img
        class={style}
        src={props.avatar}
        alt="employee-avatar"
        onClick={() => props.onClick(props.id)}
      />
      <div class={textStyle} onClick={props.onClick}>
        {props.name}
      </div>
    </article>
  );
};

export default Employee;
