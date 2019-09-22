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
        <div className={styles.middle}>
          <div className={styles.text}>
            <h3>Hello!</h3>
            <p>
              My history starts here with Food Engineering department in
              Turkey,Gaziantep.
            </p>
            <p>
              This guy "NEVER,EVER" wanted to be an "Engineer" who would work in
              a factory. But the family issues did not let him choose any other
              departments for his own future. And I actually worked as an
              Engineer for two years.
            </p>
            <p>
              Recently, I have found Re:coded company and had a great chance to
              join the team for my future for the Front-End Development and
              UI&UX Designing, worked hard on it and now I speak outloud with a
              great honor that, I am a developer!
            </p>
            <p>
              My professions are HTML5, CSS3, JavaScript, React, Firebase, Git,
              GitHub. (Only for now...)
            </p>
            <p>
              Right now, I am available for different kind of projects, either
              to help you and to improve myself on different kind of coding!
            </p>
            <p>So, if you want to Hire Me;</p>
            <br />
            <a className={styles.email} href="mailto:hakanyildiz248@gmail.com">
              EMAIL ME!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CircularImage;
