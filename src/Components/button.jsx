import React from "react";
import "./styles/button.css";

function Button(prop) {
  return (
    <div class="col-md-3 col-sm-3 col-xs-6">
      {" "}
      <a href="#" class="btn btn-sm animated-button thar-three">
        Word Cloud
      </a>{" "}
      <a href="#" class="btn btn-sm animated-button thar-three">
        Button
      </a>{" "}
    </div>
  );
}

export default Button;
