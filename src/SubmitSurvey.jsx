import React, { useState, Fragment } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Survey from "./Components/survey/Survey";
import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LayoutStyles from "./Components/styles/layout.module.css";

const getEmployeePage = (id) => {
  // This is where the axios request will go to get the employees feedback summary page
  console.log("hello", id);
};

function SubmitSurvey() {
  const [page, setPage] = useState("profile");

  return (
    <Fragment>
      <div className="main">{page === "add dot" && <Survey />}</div>
      <section>
        <Header />
        <Sidebar onClick={getEmployeePage} onNavClick={setPage} />
        {/* <FeedbackSummary /> */}
        {/* <FeedbackContent /> */}
        <Graphic type="bar" xLabel="x" yLabel="y" title="Title" />
        <Footer />
      </section>
    </Fragment>
  );
}

export default SubmitSurvey;
