import React from "react";
import styles from "./styles.module.css";

class CircularImage extends React.Component {
  render() {
    return (
      <figure className={styles.circleImage}>
        <img
          className={styles.image_bg}
          src={require("./image/hakan.jpg")}
          alt="Hakan Yildiz"
        />
      </figure>
    );
  }
}

export default CircularImage;
