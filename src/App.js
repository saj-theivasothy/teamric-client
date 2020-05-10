import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";
// import Nav from "./Components/Nav";
// import FeedbackSummary from "./Components/FeedbackSummary";
// import FeedbackContent from "./Components/FeedbackContent";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div>
      <Sidebar>
        <Search />
      </Sidebar>
      <div className="main">
        <Profile />
        {/* <Nav />
        <FeedbackSummary />
        <FeedbackContent /> */}
      </div>
    </div>
  );
}

export default App;
