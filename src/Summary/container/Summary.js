import { Fragment } from "react";
import Person from "../Component/Person/Person";
import TotalSale from "../Component/Total/Total Sale";
import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <Fragment>
      <div className={`container ${classes.card}`}>
        <div className="row justify-content-around">
          <div className={`col-12 col-md-5 ${classes.cover}`}>
            <TotalSale />
          </div>

          <div className={`col-12 col-md-5 ${classes.cover}`}>
            <Person />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Summary;
