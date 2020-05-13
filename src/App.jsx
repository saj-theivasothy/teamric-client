import React, { useState, Fragment } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Survey from "./Components/survey/Survey";
import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const getEmployeePage = (id) => {
  // This is where the axios request will go to get the employees feedback summary page
  console.log("hello", id);
};

function App() {
  const [page, setPage] = useState("profile");

  return (
    <Fragment>
      <div class="main">{page === "add dot" && <Survey />}</div>
      <section>
        <Header />
        <Sidebar onClick={getEmployeePage} onNavClick={setPage} />
        {/* <FeedbackSummary /> */}
        <FeedbackContent />
        {/* <Profile /> */}
        <Footer />
      </section>
    </Fragment>
  );
}

export default App;
