import React from "react";
import ProfileStyles from "./styles/profile.module.css";
import Graphic from "./Profile/Graphic";
import Cloud from "./WordCloud/Cloud";
import Dropdown from "./Dropdown";
import ProfileImage from "./images/profile.jpg";

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
    <div className={ProfileStyles.main_heading}>
      <h3 className={ProfileStyles.tagname}>PROFILE</h3>
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
              title="Feedback"
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
              <li className={ProfileStyles.l2}>Amanda Bernard</li>
              <li className={ProfileStyles.l3}>James Clark</li>
            </ul>
          </div>
        </section>

        <section className={ProfileStyles.box2}>
          {/* Box 1 orange color */}
          <img src={ProfileImage} alt="John Doe" />
          <div className={ProfileStyles.bio}>
            <h3>Amanda Bernard</h3>
            <hr></hr>
            <h4>Software Developer</h4>
            <p>"An avid reader with a deep passion in photography!"</p>
          </div>
        </section>

        <section className={ProfileStyles.box3}>
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("bar", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="bar"
              xLabel="x"
              yLabel="y"
              title="Feedback"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section className={ProfileStyles.box4}>
          <h4>Box4</h4>
        </section>
        <section className={ProfileStyles.box5}>
          {/* <h1>box5</h1> */}
          {/* <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("candle", event)}
          />
          <Dropdown
            title="Select Virtue Bucket"
            options={virtueBucketOptions}
            onClick={(event) => handleChange("candle", event, true)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="candle"
              title="Title"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )} */}
        </section>
        <section className={ProfileStyles.box6}>
          <div className={ProfileStyles.bio}>
            <h3>John Doe Says: </h3>
            <p>
              "Excellent Research Skills and always upfront to achieve required
              results, I love her passion for learning!"
            </p>
          </div>
        </section>

        <section className={ProfileStyles.box8}>
          <h5>Word Cloud</h5>
          <Cloud />
        </section>
        <section className={ProfileStyles.box9}></section>
      </main>
    </div>
  );
}

export default Profile;
