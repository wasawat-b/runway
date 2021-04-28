import React, { useState } from "react";

import Modal from "../UI/Modal";
import Check from "../Image/check.jpg";
import Delete from "../Image/delete";
import Edit from "../Image/edit_pencil.png";

import classes from "./EditForm.module.css";

// Pop-out when click the Edit button at the end of the List.
const EditForm = (props) => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [order, setOrder] = useState("");
  const [person, setPerson] = useState("");
  const [detail, setDetail] = useState("");
  const [amount, setAmount] = useState("");

  const [stawBig, setStawBig] = useState("0");
  const [stawSmall, setStawSmall] = useState("0");
  const [banaBig, setBanaBig] = useState("0");
  const [banaSmall, setBanaSmall] = useState("0");
  const [chocBig, setChocBig] = useState("0");
  const [chocSmall, setChocSmall] = useState("0");

  const [categorySellShow, setCategorySellShow] = useState(false);
  const [categorySummaryShow, setCategorySummaryShow] = useState(false);
  const [categoryOtherShow, setCategoryOtherShow] = useState(false);
  const [personOtherShow, setPersonOtherShow] = useState(false);

  // Changing Category
  const categoryChange = (event) => {
    if (event.target.value === "Other...") {
      setCategoryOtherShow(true);
      return;
    }
    if (event.target.value === "ยอดขาย") {
      setCategorySellShow(true);
      setCategory(event.target.value);
      return;
    }
    setCategory(event.target.value);
    setCategorySellShow(false);
  };
  const categoryChangeForOther = (event) => {
    setCategory(parseInt(event.target.value));
  };

  const stawBigChange = (event) => {
    setStawBig(parseInt(event.target.value));
  };
  const stawSmallChange = (event) => {
    setStawSmall(parseInt(event.target.value));
  };
  const banaBigChange = (event) => {
    setBanaBig(parseInt(event.target.value));
  };
  const banaSmallChange = (event) => {
    setBanaSmall(parseInt(event.target.value));
  };
  const chocBigChange = (event) => {
    setChocBig(parseInt(event.target.value));
  };
  const chocSmallChange = (event) => {
    setChocSmall(parseInt(event.target.value));
  };
  const accepted = () => {
    const price =
      (stawBig + banaBig + chocBig) * 75 +
      (stawSmall + banaSmall + chocSmall) * 50;
    setAmount(price);
    setCategorySellShow(false);
    setCategorySummaryShow(true);
  };
  const declined = () => {
    setCategorySellShow(false);
  };
  const edited = () => {
    setCategorySellShow(true);
    setCategorySummaryShow(false);
  };

  // Changing Date
  const dateChange = (event) => {
    setDate(event.target.value);
  };

  // Changing Order
  const orderChange = (event) => {
    setOrder(event.target.value);
  };

  // Changing Person
  const personChange = (event) => {
    if (event.target.value === "Other...") {
      setPersonOtherShow(true);
      return;
    }
    setPersonOtherShow(false);
    setPerson(event.target.value);
  };
  const personChangeForOther = (event) => {
    setPerson(event.target.value);
  };

  // Changing Detail
  const detailChange = (event) => {
    setDetail(event.target.value);
  };

  // Changing Amount
  const amountChange = (event) => {
    setAmount(event.target.value);
  };

  // Sending all received data to the Body in Container.
  const submitHandler = (event) => {
    event.preventDefault();

    const theDate = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(date));

    const enteredTableData = {
      category: category,
      order: order,
      date: theDate,
      person: person,
      detail: detail,
      amount: amount,
    };
    const enteredSellBottle = {
      stawBig: stawBig,
      stawSmall: stawSmall,
      banaBig: banaBig,
      banaSmall: banaSmall,
      chocBig: chocBig,
      chocSmall: chocSmall,
    };

    const tableData = {
      ...enteredTableData,
    };
    const sellBottleData = {
      ...enteredSellBottle,
    };

    props.editData(tableData);
    props.editSellBottle(sellBottleData);
    props.onShowEditTable();
  };

  return (
    <Modal onClose={props.onShow}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <label>Category: </label>
          <select value={category} onChange={categoryChange}>
            <option>--Please Select--</option>
            <option value="งบซื้อไก่">งบซื้อไก่</option>
            <option value="ค่าจ้างทำไก่">ค่าจ้างทำไก่</option>
            <option value="งบซื้ออุปกรณ์สิ่งของ">งบซื้ออุปกรณ์สิ่งของ</option>
            <option value="โฆษณา">โฆษณา</option>
            <option value="ยอดขาย">ยอดขาย</option>
            <option value="ยอดขายรวมส่ง">ยอดขายรวมส่ง</option>
            <option value="ซื้อคืนราคาทุน">ซื้อคืนราคาทุน</option>
            <option value="จ่ายส่วนแบ่ง">จ่ายส่วนแบ่ง</option>
            <option value="Other...">Other...</option>
          </select>

          <div className={classes.inputBlock}>
            {categorySellShow === true || categorySummaryShow === true ? (
              <div className={classes.sellList}>
                สตรอ {stawBig}ขวดใหญ่ {stawSmall}ขวดเล็ก <br />
                กล้วย {banaBig}ขวดใหญ่ {banaSmall}ขวดเล็ก <br />
                ช็อค {chocBig}ขวดใหญ่ {chocSmall}ขวดเล็ก
              </div>
            ) : null}
            {categorySellShow === true ? (
              <div>
                <div>
                  <label className={classes.textSell}>สตรอขวดใหญ่</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    value={stawBig}
                    onChange={stawBigChange}
                  />
                  <label className={classes.textSell}>สตรอขวดเล็ก</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    value={stawSmall}
                    onChange={stawSmallChange}
                  />
                </div>
                <div>
                  <label className={classes.textSell}>กล้วยขวดใหญ่</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    value={banaBig}
                    onChange={banaBigChange}
                  />
                  <label className={classes.textSell}>กล้วยขวดเล็ก</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    value={banaSmall}
                    onChange={banaSmallChange}
                  />
                </div>
                <div>
                  <label className={classes.textSell}>ช็อคขวดใหญ่</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    value={chocBig}
                    onChange={chocBigChange}
                  />
                  <label className={classes.textSell}>ช๊อคขวดเล็ก</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    value={chocSmall}
                    onChange={chocSmallChange}
                  />
                </div>
                <img
                  className={classes.check}
                  src={Check}
                  alt=""
                  onClick={accepted}
                />
                <img
                  className={classes.check}
                  src={Delete}
                  alt=""
                  onClick={declined}
                />
              </div>
            ) : null}
            {categorySummaryShow === true ? (
              <img
                className={classes.check}
                src={Edit}
                alt=""
                onClick={edited}
              />
            ) : null}
          </div>

          {categoryOtherShow === true ? (
            <input
              className={classes.inputOther}
              type="text"
              value={category}
              onChange={categoryChangeForOther}
            />
          ) : null}
        </div>

        <div className={classes.formControl}>
          <label>Date (m/d/y): </label>
          <input type="date" value={date} onChange={dateChange} />
        </div>

        <div className={classes.formControl}>
          <label>Order: </label>
          <input type="number" value={order} onChange={orderChange} />
        </div>

        <div className={classes.formControl}>
          <label>Person: </label>
          <select value={person} onChange={personChange}>
            <option>--Please Select--</option>
            <option value="Runway">Runway</option>
            <option value="Pee">Pee</option>
            <option value="Sun">Sun</option>
            <option value="Other...">Other...</option>
          </select>
          {personOtherShow === true ? (
            <input
              className={classes.inputOther}
              type="text"
              value={person}
              onChange={personChangeForOther}
            />
          ) : null}
        </div>

        <div className={classes.formControl}>
          <label>Detail: </label>
          <input type="text" value={detail} onChange={detailChange} />
        </div>

        <div className={classes.formControl}>
          <label>Amount: </label>
          <input type="number" value={amount} onChange={amountChange} />
        </div>

        <button className={classes.buttonAdd} type="submit">
          Add
        </button>
        <button className={classes.buttonClose} onClick={props.onShowAddTable}>
          Close
        </button>
      </form>
    </Modal>
  );
};

export default EditForm;