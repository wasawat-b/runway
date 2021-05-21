import React from "react";

import Logo from "../image/LOGO completed.png";
import Modal from "../UI/Modal";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Modal>
      <div className={classes.pic}>
        <div className="row m-0 align-items-center">
          <img className="col-6 col-md-3" src={Logo} alt="" />
          <div className="row col-6 col-md-9 d-flex align-items-center">
            <div className="col-sm-12 col-md-7 ps-3 justify-content-start">
              <h1 className={classes.text}>
                Runway
                <br />
                <span className={classes.textSmall}>
                  Drink for your health.
                  <br />
                  เพราะอกไก่ต้อง{" "}
                  <span className={classes.runway}>"RUNWAY"</span>
                </span>
              </h1>
            </div>
            <div className="col-sm-12 col-md-5 d-flex justify-content-center">
              <p>
                Line: @runwaydrink <br />
                IG: runway_healthy_drink
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Header;
