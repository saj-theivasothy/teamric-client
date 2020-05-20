import React, { useState, useEffect, Component } from "react";
import Page from "react-page-loading";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import LayoutStyles from "./Components/styles/layout.module.css";
import Dashboard from "./Components/FeedbackContent";
import Survey from "./Components/survey/Survey";
import Profile from "./Components/Profile";
import Employees from "./Components/team/Employees";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getFeedbacks } from "./Components/Helpers/getters";
import axios from "axios";

function App() {
  const [surveys, setSurveys] = useState([]);
  const [virtues, setVirtues] = useState([]);
  const [virtueBuckets, setVirtueBuckets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [graphSettings, setGraphSettings] = useState({
    timeline: [2020, "Courage"],
    pie: [2018, "John Cooley"],
    quadrant: [2020],
    scatter: [2020],
    candle: [2020, "Execution", "John Cooley"],
    bar: [2020],
    swarm: [2020],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/surveys"),
      axios.get("/virtues"),
      axios.get("/virtues/buckets"),
      axios.get("/employees"),
    ]).then((all) => {
      setSurveys(all[0].data);
      setVirtues(all[1].data);
      setVirtueBuckets(all[2].data);
      setEmployees(all[3].data);
    });
  }, []);

  let feedbacks = [];
  if (
    surveys.length > 0 &&
    virtues.length > 0 &&
    virtueBuckets.length > 0 &&
    employees.length > 0
  ) {
    feedbacks = getFeedbacks(surveys, virtues, virtueBuckets, employees);
  }
  console.log(feedbacks);
  const yearOptions = [2017, 2018, 2019, 2020];
  const virtueBucketOptions = [...virtueBuckets].map((data) => data.name);

  const handleChange = (chart, event, bucket = false) => {
    const temp = [...graphSettings[chart]];

    bucket
      ? temp.splice(1, 1, event.target.getAttribute("value"))
      : temp.splice(0, 1, event.target.value);

    setGraphSettings({ ...graphSettings, [chart]: temp });
  };

  return (
    <Router>
      <Page loader={"bubble-spin"} color={"teal"} size={20}>
        {/* <div className={LayoutStyles.grid_container}>
          <Header />
          <Sidebar/> */}
        <Switch>
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard
                {...props}
                {...{
                  virtues,
                  surveys,
                  employees,
                  feedbacks,
                  graphSettings,
                  handleChange,
                  yearOptions,
                  virtueBucketOptions,
                }}
              />
            )}
          />
          <Route
            path="/add-dot"
            render={(props) => (
              <Survey {...props} {...{ virtues, virtueBuckets }} />
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <Profile
                {...props}
                {...{
                  feedbacks,
                  graphSettings,
                  handleChange,
                  yearOptions,
                  virtueBucketOptions,
                }}
              />
            )}
          />
          <Route
            path="/employees"
            render={(props) => (
              <Employees
                {...props}
                {...{ surveys }}
                virtues={virtues}
                employees={employees}
                virtueBuckets={virtueBuckets}
              />
            )}
          />
        </Switch>
        {/* <Footer /> */}
        {/* </div> */}
      </Page>
    </Router>
  );
}

export default App;
