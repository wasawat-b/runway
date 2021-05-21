import { useState } from "react";

import "./Total Sale.module.css";

const Form = (props) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [date, setData] = useState("");

  const searchMonth = (event) => {
    setMonth(event.target.value);
  };
  const searchYear = (event) => {
    setYear(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    const theDate = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
    }).format(new Date(year, month - 1));

    setData(theDate);
    setMonth("");
    setYear("");
    props.onSendDate(month - 1, year);
  };

  return (
    <div>
      <div className="container">
        <form
          className="row d-flex justify-content-center"
          onSubmit={searchHandler}
        >
          <input
          className="col-4"
            type="number"
            min="1"
            max="12"
            value={month}
            onChange={searchMonth}
            placeholder="month..."
            required
          />
          <input
            className="col-4"
            type="number"
            min="2021"
            value={year}
            onChange={searchYear}
            placeholder="year..."
            required
          />
          <button className="col-2 p-0" type="submit">
            search
          </button>
        </form>
      </div>
      <h2>{date}</h2>
    </div>
  );
};

export default Form;
