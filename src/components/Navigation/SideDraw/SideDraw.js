import React from "react";
import Logo from "./../../Logo/Logo";
import Backdrop from "./../../UI/Backdrop/Backdrop";
import Aux from "./../../../hoc/Auxillary";
import NavigationItems from "./../NavigationItems/NavigationItems";
import styles from "./SideDraw.module.css";

const sideDraw = props => {
  let attachedClasses = [styles.SideDraw, styles.Closed];
  if (props.open) {
    attachedClasses = [styles.SideDraw, styles.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDraw;
