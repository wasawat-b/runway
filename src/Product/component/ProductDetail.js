import { Link, useParams } from "react-router-dom";

import StawBig from "../img/newnewstaw50.png";
import BanaBig from "../img/newnewbana50.png";
import StawSmall from "../img/newstaw30.png";
import BanaSmall from "../img/newbana30.png";
import ChocSmall from "../img/newchoc30.png";

import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div className="container">
      {params.productId === "bigBottle" && (
        <div className="row">
          <div className={`col-10 ${classes.cardStaw}`}>
            <p className={classes.head}>
              🍓🥛 <span className={classes.staw}>Stawberry</span>
            </p>
            <div className="container">
              <div className="row justify-content-around">
                <img className={`col-4 col-sm-6 ${classes.pic}`} src={StawBig} alt="" />
                <div className="col-8 col-sm-6">
                  <p className={classes.info}><strong>Protien</strong> : 50 กรัม</p>
                  <p className={classes.info}><strong>Calories</strong> : 270 กรัม</p>
                  <p className={classes.info}><strong>Carbohydrate</strong> : 28 กรัม</p>
                  <p className={classes.info}><strong>Sugar</strong> : 15 กรัม</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-10 ${classes.cardBana}`}>
            <p className={classes.head}>
              🍌🥛 <span className={classes.bana}>Banana</span>
            </p>
            <div className="container">
              <div className="row justify-content-around">
                <img className={`col-4 col-sm-6 ${classes.pic}`} src={BanaBig} alt="" />
                <div className="col-8 col-sm-6">
                <p className={classes.info}><strong>Protien</strong> : 50 กรัม</p>
                <p className={classes.info}><strong>Calories</strong> : 260 กรัม</p>
                <p className={classes.info}><strong>Carbohydrate</strong> : 33 กรัม</p>
                <p className={classes.info}><strong>Sugar</strong> : 18 กรัม</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {params.productId === "smallBottle" && (
        <div className="row">
          <div className={`col-10 ${classes.cardStaw}`}>
            <p className={classes.head}>
              🍓🥛 <span className={classes.staw}>Stawberry</span>
            </p>
            <div className="container">
              <div className="row justify-content-around">
                <img
                  className={`col-4 col-sm-6 ${classes.pic}`}
                  src={StawSmall}
                  alt=""
                />
                <div className="col-8 col-sm-6">
                <p className={classes.info}><strong>Protien</strong> : 30 กรัม</p>
                <p className={classes.info}><strong>Calories</strong> : 162 กรัม</p>
                <p className={classes.info}><strong>Carbohydrate</strong> : 17 กรัม</p>
                <p className={classes.info}><strong>Sugar</strong> : 9 กรัม</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-10 ${classes.cardBana}`}>
            <p className={classes.head}>
              🍌🥛 <span className={classes.bana}>Banana</span>
            </p>
            <div className="container">
              <div className="row justify-content-around">
                <img
                  className={`col-4 col-sm-6 ${classes.pic}`}
                  src={BanaSmall}
                  alt=""
                />
                <div className="col-8 col-sm-6">
                <p className={classes.info}><strong>Protien</strong> : 30 กรัม</p>
                  <p className={classes.info}><strong>Calories</strong> : 156 กรัม</p>
                  <p className={classes.info}><strong>Carbohydrate</strong> : 20 กรัม</p>
                  <p className={classes.info}><strong>Sugar</strong> : 11 กรัม</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-10 ${classes.cardChoc}`}>
            <p className={classes.head}>
              🍫🥛 <span className={classes.choc}>Coco Banana</span>
            </p>
            <div className="container">
              <div className="row justify-content-around">
                <img
                  className={`col-4 col-sm-6 ${classes.pic}`}
                  src={ChocSmall}
                  alt=""
                />
                <div className="col-8 col-sm-6">
                <p className={classes.info}><strong>Protien</strong> : 30 กรัม</p>
                <p className={classes.info}><strong>Calories</strong> : 156 กรัม</p>
                <p className={classes.info}><strong>Carbohydrate</strong> : 20 กรัม</p>
                <p className={classes.info}><strong>Sugar</strong> : 11 กรัม</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <p className="my-3 text-start">
        <Link className={classes.link} to="/products">
          ย้อนกลับ
        </Link>
      </p>
    </div>
  );
};

export default ProductDetail;
