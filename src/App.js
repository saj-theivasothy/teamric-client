import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import LayoutStyles from "./Components/styles/layout.module.css";
import Dashboard from "./Components/FeedbackContent";
import Survey from "./Components/survey/Survey";
import Profile from "./Components/Profile";
import Employees from "./Components/Employees";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RadarChart from "./Components/Profile/Charts/RadarChart";
import { getFeedbacks } from "./Components/Helpers/getters";
import axios from "axios";

import { getRadarData } from "./Components/Profile/utils/generateData";

function App() {
  const [surveys, setSurveys] = useState([]);
  const [virtues, setVirtues] = useState([]);
  const [virtueBuckets, setVirtueBuckets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [graphSettings, setGraphSettings] = useState({
    timeline: [2020, "Courage"],
    pie: [2018, "Stephen Khan"],
    quadrant: [2019],
    scatter: [2019],
    candle: [2019, "Execution", "Stephen Khan"],
    bar: [2020],
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

  return (
    <Router>
      <div className={LayoutStyles.grid_container}>
        <RadarChart data={getRadarData()} />
        <Header />
        <Sidebar />
        <Switch>
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard
                {...props}
                {...{
                  feedbacks,
                  graphSettings,
                  virtueBuckets,
                  setGraphSettings,
                }}
              />
            )}
          />
          <Route path="/add-dot" render={(props) => <Survey />} />
          <Route path="/profile" render={(props) => <Profile />} />
          <Route path="/employees" render={(props) => <Employees />} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
