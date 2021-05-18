import { Fragment } from "react";

import Kor from "../img/korat.png";
import Cha from "../img/Cha.jpg";

import classes from "./Shop.module.css";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <Fragment>
      <div className={classes.card}>
        <div className={classes.cover}>
          <img className={classes.image} src={Kor} alt="" />
          <h1><Link to="/shops/นครราชสีมา">นครราชสีมา</Link></h1>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.cover}>
          <img className={classes.image} src={Cha} alt="" />
          <h1><Link to="/shops/ฉะเชิงเทรา">ฉะเชิงเทรา</Link></h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
