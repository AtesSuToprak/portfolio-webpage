import React from "react";
import styles from "./styles.module.css";

class CircularImage extends React.Component {
  render() {
    return (
      <div className={styles.circleImage}>
        <figure>
          <img
            className={styles.image_bg}
            src={require("./image/hakan.jpg")}
            alt="Hakan Yildiz"
          />
        </figure>
      </div>
    );
  }
}

export default CircularImage;
