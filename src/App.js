import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Profile from "./Components/Profile/Profile";
import FeedbackSummary from "./Components/FeedbackSummary";

function App() {
  return (

    <section>
      <Header />
      <Sidebar />
      <FeedbackSummary />
      <FeedbackContent />
      <Footer />
    </section>
 );
}

export default App;
