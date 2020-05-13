import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
<<<<<<< HEAD
import Survey from "./Components/survey/Survey";
import Nav from "./Components/Nav";
import FeedbackSummary from "./Components/FeedbackSummary";
import FeedbackContent from "./Components/FeedbackContent";
import Profile from "./Components/Profile/Profile";

const getEmployeePage = (id) => {
  // This is where the axios request will go to get the employees feedback summary page
  console.log("hello", id);
};
=======
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Profile from "./Components/Profile/Profile";
import FeedbackSummary from "./Components/FeedbackSummary";
>>>>>>> 76bddf03f280bdf4811050a0f12843c3f1ec1fff

function App() {
  const [page, setPage] = useState("profile");

  return (
<<<<<<< HEAD
    <>
    <div>
      <Sidebar onClick={getEmployeePage} onNavClick={setPage} />
      </div>
      <div class="main">
        {page === "profile" && (
          <>
            <Nav />
            <FeedbackSummary />
            <FeedbackContent />
            <Profile />
          </>
          
          )}
          {page === "add dot" && <Survey />}
        </div>
        </>
  )
        }


=======

    <section>
      <Header />
      <Sidebar />
      <FeedbackSummary />
      <FeedbackContent />
      <Footer />
    </section>
 );
}
>>>>>>> 76bddf03f280bdf4811050a0f12843c3f1ec1fff

export default App;
