import { Fragment } from "react";

import AllBig from "../img/all50.jpg";
import AllSmall from "../img/all30.jpg";

import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Fragment>
      <div className={classes.card}>
        <div className={classes.cover}>
          <img className={classes.all} src={AllBig} alt="" />
          <h1>ขวดขนาด 480ml</h1>
          <p>ราคา : 75 บาท</p>
          <h2>📣โปรโมชัน‼️</h2>
          <p>
            ซื้อ 10 ขวด แถมฟรี 1 ขวด (รสใดก็ได้)
            <br />
            หรือ
            <br />
            ซื้อครบ 10 ขวด รับส่วนลดค่าจัดส่ง 75 บาท
            <br />
            <br />
            <span>หมายเหตุ: โปรโมชันไม่รวมค่าขนส่งนะครับ</span>
          </p>
          <p>
            <Link className={classes.link} to="/products/bigBottle">เข้าชมสินค้า</Link>
          </p>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.cover}>
          <img className={classes.all} src={AllSmall} alt="" />
          <h1>ขวดขนาด 300ml</h1>
          <p>ราคา : 50 บาท</p>
          <h2>📣โปรโมชัน‼️</h2>
          <p>
            ซื้อ 10 ขวด แถมฟรี 1 ขวด (รสใดก็ได้)
            <br />
            หรือ
            <br />
            ซื้อครบ 10 ขวด รับส่วนลดค่าจัดส่ง 50 บาท
            <br />
            <br />
            <span>หมายเหตุ: โปรโมชันไม่รวมค่าขนส่งนะครับ</span>
          </p>
          <p>
            <Link className={classes.link} to="/products/smallBottle">เข้าชมสินค้า</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
