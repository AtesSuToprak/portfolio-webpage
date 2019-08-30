import React from "react";
import styles from "./styles.module.css";

class CircularImage extends React.Component {
  render() {
    return (
      <div className={styles.circleImage}>
        <img
          className={styles.image_bg}
          src={require("./image/hakan.jpg")}
          alt="Hakan Yildiz"
        />
        <div className={styles.innerDiv}></div>
      </div>
    );
  }
}

export default CircularImage;
