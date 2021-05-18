import { Fragment } from "react";
import { useSelector } from "react-redux";

const Person = () => {
  const lists = useSelector((state) => state.lists.lists);

  // Runway all Profit/Loss
  const profitLoss = lists.reduce((prev, cur) => prev + parseFloat(cur.amount), 0);

  // Pee Cost and balance cost
  const peeList = lists.filter((state) => state.person === "Pee");
  const peeProfitLoss = peeList.reduce((prev, cur) => prev + parseFloat(cur.amount), 0);

  // Sun Cost and balance cost
  const sunList = lists.filter((state) => state.person === "Sun");
  const sunProfitLoss = sunList.reduce((prev, cur) => prev + parseFloat(cur.amount), 0);

  return (
    <Fragment>
      <h2>Total amount of Each Person</h2>
      <h3>
        Runway : <span>{profitLoss} Baht</span>
      </h3>
      <h3>
        Pee : <span>{peeProfitLoss} Baht</span>
      </h3>
      <h3>
        Sun : <span>{sunProfitLoss} Baht</span>
      </h3>
    </Fragment>
  );
};

export default Person;
