import { useState } from "react";

import './Total Sale.module.css';

const Form = (props) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [date, setData] = useState("");

  const searchMonth = (event) => {
    setMonth((event.target.value));
  };
  const searchYear = (event) => {
    setYear(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    const theDate = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
    }).format(new Date(year, (month - 1)));

    setData(theDate);
    setMonth("");
    setYear("");
    props.onSendDate((month - 1), year);
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
      <input
        type="number"
        min="1"
        max="12"
        value={month}
        onChange={searchMonth}
        placeholder="type month"
        required
      />
      <input
        type="number"
        min="2021"
        value={year}
        onChange={searchYear}
        placeholder="type year"
        required
      />
      <button type="submit">search</button>
      </form>
      <h4>{date}</h4>
    </div>
  );
};

export default Form;
