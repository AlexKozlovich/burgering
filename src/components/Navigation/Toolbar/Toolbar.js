import React from "react";
import Logo from "./../../Logo/Logo";
import Aux from "./../../../hoc/Auxillary";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./Toolbar.module.css";
import DrawToggle from "../SideDraw/DrawToggle/DrawToggle";

const toolbar = props => (
  <Aux>
    <header className={styles.Toolbar}>
      <DrawToggle clicked={props.open}>Menu</DrawToggle>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  </Aux>
);

export default toolbar;
// {
//   /* <button onClick={props.open}>Menu</button> */
// }
