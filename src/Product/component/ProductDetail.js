import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import StawBig from "../img/staw50.png";
import BanaBig from "../img/bana50.png";
import StawSmall from "../img/staw30.png";
import BanaSmall from "../img/bana30.png";
import ChocSmall from "../img/choc30.png";

import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      {params.productId === "bigBottle" && (
        <Fragment>
          <div className={classes.cardStaw}>
            <p className={classes.head}>
              🍓🥛 <span className={classes.staw}>Stawberry</span>
            </p>
            <div className={classes.cover}>
              <img className={classes.pic} src={StawBig} alt="" />
              <p>
                <strong>Protien</strong> : 50 กรัม <br />
                <br />
                <strong>Calories</strong> : 270 กรัม
                <br />
                <br />
                <strong>Carbohydrate</strong> : 28 กรัม
                <br />
                <br />
                <strong>Sugar</strong> : 15 กรัม
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className={classes.cardBana}>
            <p className={classes.head}>
              🍌🥛 <span className={classes.bana}>Banana</span>
            </p>
            <div className={classes.cover}>
              <img className={classes.pic} src={BanaBig} alt="" />
              <p>
                <strong>Protien</strong> : 50 กรัม <br />
                <br />
                <strong>Calories</strong> : 260 กรัม
                <br />
                <br />
                <strong>Carbohydrate</strong> : 33 กรัม
                <br />
                <br />
                <strong>Sugar</strong> : 18 กรัม
                <br />
                <br />
              </p>
            </div>
          </div>
          <p>
            <Link className={classes.link} to="/products">ย้อนกลับ</Link>
          </p>
        </Fragment>
      )}
      {params.productId === "smallBottle" && (
        <Fragment>
        <div className={classes.cardStaw}>
          <p className={classes.head}>
            🍓🥛 <span className={classes.staw}>Stawberry</span>
          </p>
          <div className={classes.cover}>
            <img className={classes.pic} src={StawSmall} alt="" />
            <p>
              <strong>Protien</strong> : 30 กรัม <br />
              <br />
              <strong>Calories</strong> : 162 กรัม
              <br />
              <br />
              <strong>Carbohydrate</strong> : 17 กรัม
              <br />
              <br />
              <strong>Sugar</strong> : 9 กรัม
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className={classes.cardBana}>
          <p className={classes.head}>
            🍌🥛 <span className={classes.bana}>Banana</span>
          </p>
          <div className={classes.cover}>
            <img className={classes.pic} src={BanaSmall} alt="" />
            <p>
              <strong>Protien</strong> : 30 กรัม <br />
              <br />
              <strong>Calories</strong> : 156 กรัม
              <br />
              <br />
              <strong>Carbohydrate</strong> : 20 กรัม
              <br />
              <br />
              <strong>Sugar</strong> : 11 กรัม
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className={classes.cardChoc}>
          <p className={classes.head}>
          🍫🥛 <span className={classes.choc}>Coco Banana</span>
          </p>
          <div className={classes.cover}>
            <img className={classes.picChoc} src={ChocSmall} alt="" />
            <p>
              <strong>Protien</strong> : 30 กรัม <br />
              <br />
              <strong>Calories</strong> : 156 กรัม
              <br />
              <br />
              <strong>Carbohydrate</strong> : 20 กรัม
              <br />
              <br />
              <strong>Sugar</strong> : 11 กรัม
              <br />
              <br />
            </p>
          </div>
        </div>
        <p>
          <Link className={classes.link} to="/products">ย้อนกลับ</Link>
        </p>
      </Fragment>
      )}
    </div>
  );
};

export default ProductDetail;
