import React from "react";
import styles from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbar_bg}></div>
        <h1>Welcome To My Portfolio Webpage!</h1>
      </div>
    );
  }
}

export default Header;
