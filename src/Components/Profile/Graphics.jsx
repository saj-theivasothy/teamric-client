import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { getTimelineData, getScatterData } from "./utils/dummyData";

const Profile = (props) => {
  // const { container } = styles;
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <div className="App__charts">
        <Bar
          data={data.timeline}
          xAccessor={dateAccessor}
          yAccessor={temperatureAccessor}
          label="Temperature"
        />
      </div>
    </div>
  );
};

export default Profile;
