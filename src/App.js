import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Survey from "./Components/survey/Survey";
import Nav from "./Components/Nav";
import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";

const getEmployeePage = (id) => {
  // This is where the axios request will go to get the employees feedback summary page
  console.log("hello", id);
};

function App() {
  const [page, setPage] = useState("profile");

  return (
    <div>
      <Sidebar onClick={getEmployeePage} onNavClick={setPage} />
      <div class="main">
        {page === "profile" && (
          <>
            <Nav />
            <FeedbackSummary />
            <FeedbackContent />
          </>
        )}
        {page === "add dot" && <Survey />}
      </div>
    </div>
  );
}

export default App;
