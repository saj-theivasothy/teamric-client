import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";

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
