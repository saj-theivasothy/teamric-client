import React from "react";
import ProfileStyles from "./styles/profile.module.css";
import Graphic from "./Profile/Graphic";
import Cloud from "./WordCloud/Cloud";
import Dropdown from "./Dropdown";

function Profile(props) {
  const {
    feedbacks,
    graphSettings,
    handleChange,
    yearOptions,
    virtueBucketOptions,
  } = props;

  return (
    <div className={ProfileStyles.main_heading}>
      <h3>PROFILE</h3>
      <main className={ProfileStyles.main}>
        <section className={ProfileStyles.box1}>
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("bar", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="pie"
              xLabel="x"
              yLabel="y"
              title="Feedback"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section className={ProfileStyles.box2}>
          {/* Box 1 orange color */}
          <h1>Box2</h1>
        </section>
        <section className={ProfileStyles.box3}>
          <h1>Box3</h1>
        </section>
        <section className={ProfileStyles.box4}>
          <h1>Box4</h1>
        </section>
        <section className={ProfileStyles.box5}>
          <h1>box5</h1>
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
          <h1>Box6</h1>
        </section>
        <section className={ProfileStyles.box7}>
          <h1>Box7</h1>
        </section>
        <section className={ProfileStyles.box8}>
          <Cloud />
        </section>
        <section className={ProfileStyles.box9}>
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
        </section>
      </main>
    </div>
  );
}

export default Profile;
