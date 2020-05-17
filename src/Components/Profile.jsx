import React from "react";
import ProfileStyles from "./styles/profile.module.css";
import Graphic from "./Profile/Graphic";
import axios from "axios";
import Cloud from "./WordCloud/Cloud";

function Profile() {
  return (
    <div className={ProfileStyles.main_heading}>
      <h3>PROFILE</h3>
      <main className={ProfileStyles.main}>
        <section className={ProfileStyles.box1}>
          {/* <Graphic type="pie" title="Title" /> */}
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
          {/* <Graphic type="quadrant" title="Title" /> */}
        </section>
      </main>
    </div>
  );
}

export default Profile;
