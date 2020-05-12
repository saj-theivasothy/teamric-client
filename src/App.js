import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";
import Profile from "./Components/Profile/Profile";

import FeedbackSummary from "./Components/FeedbackSummary";

function App() {
  return (
    <div>
      <Sidebar>
        <Search />
      </Sidebar>
      <div class="main">
        <FeedbackSummary />
        <Profile />
      </div>
    </div>
  );
}

export default App;
