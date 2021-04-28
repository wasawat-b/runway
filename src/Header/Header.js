import React from "react";

import Logo from "./image/LOGO.jpg";
import Modal from "./UI/Modal";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Modal>
      <div className={classes.cover}>
        <img className={classes.image} src={Logo} alt="" />
        <h1 className={classes.text}>
          Runway Healthy Drink <br />
          <span className={classes.textSmall}>
            Drink for your health.
            <br />
            เพราะอกไก่ต้อง <span className={classes.runway}>"RUNWAY"</span>
          </span>
        </h1>
        <div className={classes.info}>
          <p>Line: @runwaydrink</p>
          <p>IG: runway_healthy_drink</p>
        </div>
      </div>
    </Modal>
  );
};

export default Header;
