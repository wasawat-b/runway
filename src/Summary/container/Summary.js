import { Fragment } from "react";
import Person from "../Component/Person/Person";
import TotalSale from "../Component/Total/Total Sale";
import classes from "./Summary.module.css";

const Summary = () => {
  return (
    <Fragment>
      <div className={classes.card}>

          <div className={classes.cardLeft}>
            <div className={classes.cover}>
              <TotalSale />
            </div>
          </div>

          <div className={classes.cardRight}>
            <div className={classes.cover}>
              <Person />
            </div>
          </div>

      </div>
    </Fragment>
  );
};

export default Summary;
