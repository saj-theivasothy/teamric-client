import React from "react";
import buttonStyles from "./styles/button.module.css";

export default function Button(prop) {
  return <button className={buttonStyles.button}>prop</button>;
}
