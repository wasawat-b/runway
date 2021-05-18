import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import Form from "./form";

import "./Total Sale.module.css";

const TotalSale = () => {
  const [totalSearch, setTotalSearch] = useState("");
  const [profitLoss, setProfitLoss] = useState("");
  const [cost, setCost] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  const lists = useSelector((state) => state.lists.lists);

  //All bottles sold
  const totalBig = lists.reduce(
    (prev, cur) =>
      prev +
      (cur.sell.stawBig +
        cur.sell.banaBig +
        cur.sell.chocBig),
    0
  );
  const totalSmall = lists.reduce(
    (prev, cur) =>
      prev +
      (cur.sell.stawSmall +
        cur.sell.banaSmall +
        cur.sell.chocSmall),
    0
  );

  const receiveDateHandler = (month, year) => {
    const findList = lists.filter(
      (state) =>
        new Date(state.date).getMonth() === month &&
        new Intl.DateTimeFormat("en-GB", { year: "numeric" }).format(
          new Date(state.date)
        ) === year
    );

    //Sold Bottle
    const total = findList.reduce(
      (prev, cur) =>
        prev +
        (parseInt(cur.sell.stawBig) +
          parseInt(cur.sell.stawSmall) +
          parseInt(cur.sell.banaBig) +
          parseInt(cur.sell.banaSmall) +
          parseInt(cur.sell.chocBig) +
          parseInt(cur.sell.chocSmall)),
      0
    );

    //Profit / Loss
    const profitLoss = findList.reduce(
      (prev, cur) => prev + parseFloat(cur.amount),
      0
    );

    //Cost : count only amounts which are minus.
    const findCost = findList.filter((state) => parseFloat(state.amount) < 0);
    const cost = findCost.reduce(
      (prev, cur) => prev + parseFloat(cur.amount),
      0
    );

    setTotalSearch(total);
    setProfitLoss(profitLoss);
    setCost(cost);
    setShowDetail(true);
  };

  return (
    <Fragment>
      <h2>Total Sold Bottle</h2>
      <p>Big bottles : {totalBig}</p>
      <p>Small bottles : {totalSmall}</p>
      <Form onSendDate={receiveDateHandler} />
      {showDetail && (
        <div>
          <p>sold bottle : {totalSearch}</p>
          <p>Profit / Loss : {profitLoss}</p>
          <p>Cost : {cost}</p>
        </div>
      )}
    </Fragment>
  );
};

export default TotalSale;
