import React, { useState } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxillary";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDraw from "./../Navigation/SideDraw/SideDraw";
import styles from "./Layout.module.css";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  // state = {
  //   showSideDrawer: false
  // };
  const handleSideDrawerClosed = () => {
    setShowSideDrawer(false);
  };
  const handleSideDrawerOpen = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Toolbar isAuth={props.isAuthenticated} open={handleSideDrawerOpen} />
      <SideDraw
        isAuth={props.isAuthenticated}
        open={showSideDrawer}
        closed={handleSideDrawerClosed}
      />
      <main className={styles["Content"]}>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
