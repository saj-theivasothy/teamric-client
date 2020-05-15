import React, { useState, Fragment } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Survey from "./Components/survey/Survey";
import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Graphic from "./Components/Profile/Graphic";

const getEmployeePage = (id) => {
  // This is where the axios request will go to get the employees feedback summary page
  console.log("hello", id);
};

function App() {
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
        <Graphic type="scatter" xLabel="x" yLabel="y" title="Title" />
        <Graphic type="timeline" xLabel="x" yLabel="y" title="Title" />
        <Graphic type="pie" title="Title" />
        <Graphic type="candle" title="Title" />
        <Graphic type="quadrant" title="Title" />
        <Graphic type="swarm" title="Title" />
        <Footer />
      </section>
    </Fragment>
  );
}

export default App;
