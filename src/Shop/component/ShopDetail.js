import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import Passion from "../img/passion.png";
import Overload from "../img/overload.png";
import Fitness69 from "../img/fitness69.jpg";
import FitnessLife from "../img/fitness lifestyle.jpg";
import Human from "../img/human strong.jpg";

import classes from "./ShopDetail.module.css";

const ShopDetail = () => {
  const params = useParams();

  return (
    <div className="my-4">
      {params.productId === "นครราชสีมา" && (
        <Fragment>
          <div className="container mb-5 col-8">
            <p className={classes.head}>Passion Gym</p>
            <div className="row">
              <img className={`col-sm-3 ${classes.pic}`} src={Passion} alt="" />
              <p className="col-sm-9">
                <strong>Location</strong>  : ตำบลในเมือง อำเภอเมืองนครราชสีมา นครราชสีมา 30000<br />
                <br />
                <strong>Call</strong> : 095 251 5065
                <br />
                <br />
                <strong>Operating time</strong> : 07:00 - 23:00
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="container mb-5 col-8">
            <p className={classes.head}>Overload Gym</p>
            <div className="row">
              <img className={`col-sm-3 ${classes.pic}`} src={Overload} alt="" />
              <p className="col-sm-9">
                <strong>Location</strong>  : 514 ถนน มิตรภาพ ตำบลในเมือง อำเภอเมืองนครราชสีมา นครราชสีมา 30000<br />
                <br />
                <strong>Call</strong> : 088 969 3476
                <br />
                <br />
                <strong>Operating time</strong> : จันทร์-เสาร์ 06:00 - 23:00 // อาทิตย์ 10:00 - 23:00
                <br />
                <br />
              </p>
            </div>
          </div>
        </Fragment>
      )}
      {params.productId === "ฉะเชิงเทรา" && (
        <Fragment>
          <div className="container mb-5 col-8">
            <p className={classes.head}>Fitness69 Gym</p>
            <div className="row">
              <img className={`col-sm-3 ${classes.pic}`} src={Fitness69} alt="" />
              <p className="col-sm-9">
                <strong>Location</strong>  : 87, ตำบลท่าสะอ้าน อำเภอบางปะกง ฉะเชิงเทรา 24130<br />
                <br />
                <strong>Call</strong> : 084 638 8852
                <br />
                <br />
                <strong>Operating time</strong> : 10:00 - 23:00
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="container mb-5 col-8">
            <p className={classes.head}>FitnessLife Gym</p>
            <div className="row">
              <img className={`col-sm-3 ${classes.pic}`} src={FitnessLife} alt="" />
              <p className="col-sm-9">
                <strong>Location</strong>  : ซอย หมู่บ้านดอนทองธานี ตำบล บางตีนเป็ด อำเภอเมืองฉะเชิงเทรา ฉะเชิงเทรา 24000<br />
                <br />
                <strong>Call</strong> : 097 079 2168
                <br />
                <br />
                <strong>Operating time</strong> : เสาร์-อาทิตย์ 10:00 - 21:00 // จันทร์-ศุกร์ 09:00 - 22:00
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="container mb-5 col-8">
            <p className={classes.head}>Human Strong Gym</p>
            <div className="row">
              <img className={`col-sm-3 ${classes.pic}`} src={Human} alt="" />
              <p className="col-sm-9">
                <strong>Location</strong>  : 99/10 ม.1 ต.บ้านเก่า อ.พานทอง ชลบุรี 20160<br />
                <br />
                <strong>Call</strong> : 097 923 2721
                <br />
                <br />
                <strong>Operating time</strong> : 07:00 - 23:00
                <br />
                <br />
              </p>
            </div>
          </div>
        </Fragment>
      )}
      <p className="my-3 text-start">
            <Link to="/shops">ย้อนกลับ</Link>
          </p>
    </div>
  );
};

export default ShopDetail;
