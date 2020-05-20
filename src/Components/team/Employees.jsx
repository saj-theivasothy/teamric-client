import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../search/SearchBar";
import EmployeeCard from "./EmployeeCard";
import styles from "./styles/employees.module.scss";
import EmployeeProfile from "./EmployeeProfile";

function Employees(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(props.employees);
  const [searchResults, setSearchResults] = useState(props.employees);
  const [popup, setPopup] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState([]);

  useEffect(() => {
    setResults(props.employees);
    setSearchResults(props.employees);
  });

  useEffect(() => {
    const liveResults = results.filter(
      (result) => result.name.toLowerCase().includes(term) && result
    );
    setSearchResults(liveResults);
  }, [term, results]);

  const togglePopup = (employee = []) => {
    setSelectedEmployee(employee);
    setPopup((prev) => !prev);
  };

  const employeeCards = searchResults.map((result) => {
    return <EmployeeCard {...result} togglePopup={togglePopup} />;
  });

  return (
    <div className={styles.main_heading}>
      <h3>PROFILE</h3>
      <main className={styles.main}>
        <section className={styles.box1}>
          <SearchBar
            id={styles.search}
            onSearch={(term) => setTerm(term)}
            term={term}
          />
        </section>
        <section className={styles.box2}>
          <h1>Box2</h1>
        </section>
        {employeeCards}
        {popup ? (
          <EmployeeProfile
            closePopup={(event) => togglePopup()}
            employee={selectedEmployee}
            virtues={props.virtues}
            surveys={props.surveys}
            employees={props.employees}
            virtueBuckets={props.virtueBuckets}
          />
        ) : null}
      </main>
    </div>
  );
}

export default Employees;
