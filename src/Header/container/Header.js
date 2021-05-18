import React from "react";

import Logo from "../image/LOGO completed.png";
import Modal from "../UI/Modal";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Modal>
      <div className={classes.pic}>
        <img className={classes.image} src={Logo} alt="" />
        <h1 className={classes.text}>
          Runway<br />
          <span className={classes.textSmall}>
            Drink for your health.
            <br />
            เพราะอกไก่ต้อง <span className={classes.runway}>"RUNWAY"</span>
          </span>
        </h1>
        <p className={classes.info}>
          Line: @runwaydrink <br />
          IG: runway_healthy_drink
        </p>
      </div>
    </Modal>
  );
};

export default Header;
