import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import LayoutStyles from "./Components/styles/layout.module.css";
import Profile from "./Components/Profile/Profile";

import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className={LayoutStyles.grid_container}>
      <Header />
      <Sidebar />
      <FeedbackContent className={LayoutStyles.main} />
      <Footer />
    </div>
  );
}

export default App;
