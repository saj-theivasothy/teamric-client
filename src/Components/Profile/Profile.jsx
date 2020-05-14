import React from "react";
import styles from "./styles/Profile.module.scss";
import headshotPhoto from "../../data/steve_jobs.png";
import Graphics from "./Graphics";

const Profile = (props) => {
  const {
    container,
    left_container,
    right_container,
    headshot,
    about,
    spends_time_on,
    border_box,
    profile,
    desc,
    responsibilities,
    skill,
    skill_list,
    section,
  } = styles;
  return (
    <div className={container}>
      <div className={left_container}>
        <div className={[profile, section].join(" ")}>
          <img alt="yo" src={headshotPhoto} className={headshot} />
          <div className={about}>
            <div style={{ textAlign: "center" }}>
              <p>Steve Jobs</p>
              <p>Tech Lead @Security</p>
            </div>
            <br />
            <p>
              “My name is Steve Jobs. I’m a tech lead with a decade of
              experience working in technology. Outside of work, I enjoy hiking
              with friends and family.”
            </p>
          </div>

          <div className={responsibilities}>
            <p className={desc}>Direct responsibilities</p>
            <div className={skill_list}>
              <div className={skill}>Network Security</div>
              <div className={skill}>Google Cloud</div>
              <div className={skill}>PM</div>
            </div>
          </div>
        </div>
      </div>
      <div className={right_container}>
        <div className={[spends_time_on, border_box].join(" ")}>
          <Graphics />
        </div>
      </div>
    </div>
  );
};

export default Profile;
