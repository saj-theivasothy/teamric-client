import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";
import Profile from "./Components/Profile/Profile";

import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div class="gridContainer">
      <Header class="header" />
      <Sidebar class="sidebar">
        <Search />
      </Sidebar>
      <div class="main">
        <FeedbackContent />
        {/* <Profile /> */}
      </div>
      <Footer class="footer" />
    </div>
  );
}

export default App;
