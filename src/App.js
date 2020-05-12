import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";

import FeedbackSummary from "./Components/FeedbackSummary";

function App() {
  return (
    <div>
      <Sidebar>
        <Search />
      </Sidebar>
      <div class="main">
        <FeedbackSummary />
      </div>
    </div>
  );
}

export default App;
