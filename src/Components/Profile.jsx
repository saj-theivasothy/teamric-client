import React from "react";
import ProfileStyles from "./styles/profile.module.css";

import LayoutStyles from "./styles/layout.module.css";
import Graphic from "./styles/Profile/Graphic";

import Cloud from "./WordCloud/Cloud";
import Dropdown from "./Dropdown";
import ProfileImage from "./images/profile.jpg";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Profile(props) {
  const {
    feedbacks,
    graphSettings,
    handleChange,
    yearOptions,
    virtueBucketOptions,
  } = props;

  // Word Cloud Modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  //
  return (
    <div className={LayoutStyles.grid_container}>
      <Header />
      <Sidebar />
      <div className={ProfileStyles.main_heading}>
        <h3 className="center">PROFILE</h3>
        <main className={ProfileStyles.main}>
          <section className={ProfileStyles.box1}>
            <Dropdown
              title="Select Year"
              options={yearOptions}
              onClick={(event) => handleChange("radar", event)}
            />
            {feedbacks.length > 0 && (
              <Graphic
                type="radar"
                xLabel="x"
                yLabel="y"
                title="AVERAGE RATINGS FOR YOUR TEAM"
                feedbacks={feedbacks}
                settings={graphSettings}
              />
            )}
            <div className={ProfileStyles.radar_info}>
              <ul>
                <h4>TEAM</h4>
                <li className={ProfileStyles.l1}>
                  John Doe
                  <span></span>
                </li>
                <li className={ProfileStyles.l2}>Debra Guereca</li>
                <li className={ProfileStyles.l3}>James Clark</li>
              </ul>
            </div>
          </section>

          <section className={ProfileStyles.box2}>
            {/* Box 1 orange color */}
            <img src={ProfileImage} alt="John Doe" />
            <div className={ProfileStyles.bio}>
              <h3>Debra Guereca</h3>
              <hr></hr>
              <h4>Software Developer</h4>
              <p>"An avid reader with a deep passion in photography!"</p>
            </div>
          </section>

          <section className={ProfileStyles.box3}>
            <Dropdown
              title="Select Year"
              options={yearOptions}
              onClick={(event) => handleChange("pie", event)}
            />
            {feedbacks.length > 0 && (
              <Graphic
                type="pie"
                xLabel="x"
                yLabel="y"
                title="YOUR TOP REVIEWERS"
                feedbacks={feedbacks}
                settings={graphSettings}
              />
            )}
          </section>
          {/* <section className={ProfileStyles.box4}>
          <h4>Box4</h4>
        </section> */}
          <section className={ProfileStyles.box5}>
            {/* <h1>box5</h1> */}
            <Dropdown
              title="Select Year"
              options={yearOptions}
              onClick={(event) => handleChange("candle", event)}
            />
            {/* <Dropdown
            title="Select Virtue Bucket"
            options={virtueBucketOptions}
            onClick={(event) => handleChange("candle", event, true)}
          /> */}
            {feedbacks.length > 0 && (
              <Graphic
                type="candle"
                title="YOUR AVERAGE PERFORMANCE OVERTIME"
                feedbacks={feedbacks}
                settings={graphSettings}
              />
            )}
          </section>
          <section className={ProfileStyles.box6}>
            <div className={ProfileStyles.bio}>
              <h3>John Doe Says: </h3>
              <p>
                "Excellent Research Skills and always upfront to achieve
                required results, I love her passion for learning!"
              </p>
            </div>
          </section>

          <section className={ProfileStyles.box8}>
            <h4>WORD CLOUD</h4>
            <Cloud />
          </section>
          <section className={ProfileStyles.box9}>
            <h4>PENDING FEEDBACK</h4>
            <br />
            <div className={ProfileStyles.pending_review}>
              <div>Review Meeting #105064</div>
              <Link to="/add-dot" style={{ textDecoration: "none" }}>
                <div className={ProfileStyles.button}>
                  <AddCircleOutlineIcon />
                  <div className={ProfileStyles.button_title}>ADD DOT</div>
                </div>
              </Link>
            </div>
            <hr />
            <div className={ProfileStyles.pending_review}>
              <div>Review Meeting #122335</div>
              <Link to="/add-dot" style={{ textDecoration: "none" }}>
                <div className={ProfileStyles.button}>
                  <AddCircleOutlineIcon />
                  <div className={ProfileStyles.button_title}>ADD DOT</div>
                </div>
              </Link>
            </div>
            <hr />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Profile;
