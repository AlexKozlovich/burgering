import React from "react";
import styles from "./DrawToggle.module.css";

const drawToggle = props => {
  return (
    <div className={styles.DrawToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default drawToggle;
