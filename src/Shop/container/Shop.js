import Kor from "../img/korat.png";
import Cha from "../img/Cha.jpg";

import classes from "./Shop.module.css";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="container my-4">

      <div className="row justify-content-around">

        <div className={`col-5 ${classes.cover}`}>
          <img className={classes.image} src={Kor} alt="" />
          <h1>
            <Link to="/shops/นครราชสีมา">นครราชสีมา</Link>
          </h1>
        </div>
      
        <div className={`col-5 ${classes.cover}`}>
          <img className={classes.image} src={Cha} alt="" />
          <h1>
            <Link to="/shops/ฉะเชิงเทรา">ฉะเชิงเทรา</Link>
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Shop;
