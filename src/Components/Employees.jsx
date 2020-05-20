import React from "react";
import "./styles/employees.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LayoutStyles from "./styles/layout.module.css";

function EmployeeCard(props) {
  return (
    <section class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-back">
          <h1>{props.name}</h1>
        </div>
      </div>
    </section>
  );
}

function Employees() {
  return (
    <div className={LayoutStyles.grid_container}>
      <Header />
      <Sidebar />
      <div className="main_heading">
        <h3>PROFILE</h3>
        <main className="main">
          <section className="box1"></section>
          <section className="box2">
            {/* Box 1 orange color */}
            <h1>Box2</h1>
          </section>

          {/* <h1>Box3</h1> */}

          <EmployeeCard name="John Doe" />
          <EmployeeCard name="John Doe" />
          <EmployeeCard name="John Doe" />
          <EmployeeCard name="John Doe" />
          <EmployeeCard name="John Doe" />
          <EmployeeCard name="John Doe" />
          <EmployeeCard name="John Doe" />
          <EmployeeCard name="John Doe" />
        </main>
      </div>
    </div>
  );
}

export default Employees;
