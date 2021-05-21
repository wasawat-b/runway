import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useValid from "../hook/use-valid";

import { uiActions } from "../store/ui-slice";
import { listActions } from "../store/list-slice";

import Modal from "../UI/Modal";
import Check from "../Image/check.jpg";
import Edit from "../Image/edit_pencil.png";
import Delete from "../Image/deleteIcon.png";

import classes from "../AddNewList/AddNewList.module.css";

// Pop-out when click the Edit button at the end of the List.
const EditForm = () => {
  const dispatch = useDispatch();
  const allLists = useSelector((state) => state.lists.lists);
  const editOrder = useSelector((state) => state.lists.editOrder);

  const foundEditList = allLists.filter((state) => state.order === editOrder);

  const getDate = new Date(foundEditList[0].date).toISOString().slice(0, 10);

  const [category, setCategory] = useState(foundEditList[0].category);
  const [date, setDate] = useState(getDate);
  const [order, setOrder] = useState(foundEditList[0].order);
  const [person, setPerson] = useState(foundEditList[0].person);
  const [detail, setDetail] = useState(foundEditList[0].detail);
  const [amount, setAmount] = useState(foundEditList[0].amount);

  const [stawBig, setStawBig] = useState("");
  const [stawSmall, setStawSmall] = useState("");
  const [banaBig, setBanaBig] = useState("");
  const [banaSmall, setBanaSmall] = useState("");
  const [chocBig, setChocBig] = useState("");
  const [chocSmall, setChocSmall] = useState("");

  const [categorySellShow, setCategorySellShow] = useState(false);
  const [categorySummaryShow, setCategorySummaryShow] = useState(false);
  const [categoryOtherShow, setCategoryOtherShow] = useState(false);
  const [personOtherShow, setPersonOtherShow] = useState(false);

  const {
    isValid: categoryIsValid,
    errorOccur: categoryError,
    inputBlur: categoryBlur,
    inputFocus: categoryFocus,
    reset: restCategory,
  } = useValid(category);
  const {
    isValid: dateIsValid,
    errorOccur: dateError,
    inputBlur: dateBlur,
    inputFocus: dateFocus,
    reset: resetDate,
  } = useValid(parseInt(date));
  const {
    isValid: orderIsValid,
    errorOccur: orderError,
    inputBlur: orderBlur,
    inputFocus: orderFocus,
    reset: resetOrder,
  } = useValid(order);
  const {
    isValid: personIsValid,
    errorOccur: personError,
    inputBlur: personBlur,
    inputFocus: personFocus,
    reset: resetPerson,
  } = useValid(person);
  const {
    isValid: amountIsValid,
    errorOccur: amountError,
    inputBlur: amountBlur,
    inputFocus: amountFocus,
    reset: resetAmount,
  } = useValid(amount);

  // Changing Category !!!!
  const categoryChange = (event) => {
    if (event.target.value === "Other...") {
      setCategoryOtherShow(true);
      setCategorySellShow(false);
      setCategorySummaryShow(false);
      setCategory("");
      return;
    }
    if (event.target.value === "ยอดขาย") {
      setCategorySellShow(true);
      setCategoryOtherShow(false);
      setCategory(event.target.value);
      return;
    }
    setCategory(event.target.value);
    setCategoryOtherShow(false);
    setCategorySellShow(false);
  };

  const categoryChangeForOther = (event) => {
    setCategory(event.target.value);
  };

  // จำนวนขวดที่ขายได้
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
  // sum จาก จำนวนขวดที่ขายได้
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
    setCategory("");
  };
  const edited = () => {
    setCategorySellShow(true);
    setCategorySummaryShow(false);
  };

  // Changing Date
  const dateChange = (event) => {
    setDate(event.target.value);
  };

  // Changing Person
  const personChange = (event) => {
    if (event.target.value === "Other...") {
      setPersonOtherShow(true);
      setPerson("");
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

  // Changing Order
  const orderChange = (event) => {
    setOrder(event.target.value);
    return;
  };

  // Changing Amount
  const amountChange = (event) => {
    setAmount(parseFloat(event.target.value));
    return;
  };

  // close Edit page
  const showEditTable = () => {
    dispatch(uiActions.showingEdit());
  };

  let formIsValid = false;
  if (
    categoryIsValid &&
    dateIsValid &&
    orderIsValid &&
    personIsValid &&
    amountIsValid
  ) {
    formIsValid = true;
  }

  // Sending all received data to the Body in Container.
  const submitHandler = (event) => {
    event.preventDefault();

    const theDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(date));

    const gatheringSell = {
      stawBig: stawBig,
      stawSmall: stawSmall,
      banaBig: banaBig,
      banaSmall: banaSmall,
      chocBig: chocBig,
      chocSmall: chocSmall,
    };

    //gather all data
    const gatheringList = {
      category: category,
      date: theDate,
      order: order,
      person: person,
      detail: detail,
      amount: amount,
      sell: gatheringSell,
    };

    //send data
    dispatch(listActions.editList(gatheringList));
    dispatch(uiActions.showingEdit());

    restCategory();
    resetDate();
    resetOrder();
    resetPerson();
    resetAmount();
  };

  const categoryClasses = categoryError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;
  const dateClasses = dateError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;
  const orderClasses = orderError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;
  const personClasses = personError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;
  const amountClasses = amountError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  return (
    <Modal onClose={showEditTable}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1 className={classes.addForm}>Edit Form</h1>
        <div className={categoryClasses}>
          <label>Category: </label>
          <select
            value={category}
            onChange={categoryChange}
            onBlur={categoryBlur}
            onFocus={categoryFocus}
          >
            <option value="">--Please Select--</option>
            <option value="งบซื้อไก่">งบซื้อไก่</option>
            <option value="ค่าจ้างทำไก่">ค่าจ้างทำไก่</option>
            <option value="งบซื้ออุปกรณ์สิ่งของ">งบซื้ออุปกรณ์สิ่งของ</option>
            <option value="โฆษณา">โฆษณา</option>
            <option value="ยอดขาย">ยอดขาย</option>
            <option value="ซื้อคืนราคาทุน">ซื้อคืนราคาทุน</option>
            <option value="จ่ายส่วนแบ่ง">จ่ายส่วนแบ่ง</option>
            <option value="Other...">Other...</option>
          </select>

          <div className={classes.inputBlock}>
            {categorySellShow === true || categorySummaryShow === true ? (
              <div className={classes.sellList}>
                สตรอ {stawBig ? stawBig : 0}ขวดใหญ่ {stawSmall ? stawSmall : 0}
                ขวดเล็ก <br />
                กล้วย {banaBig ? banaBig : 0}ขวดใหญ่ {banaSmall ? banaSmall : 0}
                ขวดเล็ก <br />
                ช็อค {chocBig ? chocBig : 0}ขวดใหญ่ {chocSmall ? chocSmall : 0}
                ขวดเล็ก
              </div>
            ) : null}
            {categorySellShow === true ? (
              <div>
                <div>
                  <label className={classes.textSell}>สตรอขวดใหญ่</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    min="0"
                    value={stawBig}
                    onChange={stawBigChange}
                  />
                  <div className={classes.hide}></div>
                  <label className={classes.textSell}>สตรอขวดเล็ก</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    min="0"
                    value={stawSmall}
                    onChange={stawSmallChange}
                  />
                </div>
                <div>
                  <label className={classes.textSell}>กล้วยขวดใหญ่</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    min="0"
                    value={banaBig}
                    onChange={banaBigChange}
                  />
                  <div className={classes.hide}></div>
                  <label className={classes.textSell}>กล้วยขวดเล็ก</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    min="0"
                    value={banaSmall}
                    onChange={banaSmallChange}
                  />
                </div>
                <div>
                  <label className={classes.textSell}>ช็อคขวดใหญ่</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    min="0"
                    value={chocBig}
                    onChange={chocBigChange}
                  />
                  <div className={classes.hide}></div>
                  <label className={classes.textSell}>ช๊อคขวดเล็ก</label>
                  <input
                    className={classes.inputSell}
                    type="number"
                    min="0"
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
            // input สำหรับ Other...
            <input
              className={classes.inputOther}
              type="text"
              value={category}
              onChange={categoryChangeForOther}
              placeholder="Other..."
            />
          ) : null}
        </div>
        {categoryError && (
          <p className={classes.error}>Please select a category!</p>
        )}

        <div className={dateClasses}>
          <label>
            Date <span>(m/d/y)</span>:{" "}
          </label>
          <input
            type="date"
            className={classes.dateInputClasses}
            value={date}
            onChange={dateChange}
            onBlur={dateBlur}
            onFocus={dateFocus}
          />
        </div>
        {dateError && <p className={classes.error}>Please select a date!</p>}

        <div className={orderClasses}>
          <label>Order: </label>
          <input
            type="number"
            value={order}
            onChange={orderChange}
            onBlur={orderBlur}
            onFocus={orderFocus}
          />
        </div>
        {orderError && <p className={classes.error}>Please enter a order!</p>}

        <div className={personClasses}>
          <label>Person: </label>
          <select
            value={person}
            onChange={personChange}
            onBlur={personBlur}
            onFocus={personFocus}
          >
            <option>--Please Select--</option>
            <option value="Runway">Runway</option>
            <option value="Pee">Pee</option>
            <option value="Sun">Sun</option>
            <option value="Other...">Other...</option>
          </select>
          {personOtherShow === true ? (
            // input สำหรับ Other...
            <input
              className={classes.inputOther}
              type="text"
              value={person}
              onChange={personChangeForOther}
              onBlur={personBlur}
              onFocus={personFocus}
              placeholder="Other..."
            />
          ) : null}
        </div>
        {personError && <p className={classes.error}>Please enter a person!</p>}

        <div className={classes.formControl}>
          <label>Detail: </label>
          <input type="text" value={detail} onChange={detailChange} />
        </div>

        <div className={amountClasses}>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={amountChange}
            onBlur={amountBlur}
            onFocus={amountFocus}
          />
        </div>
        {amountError && <p className={classes.error}>Please enter a amount!</p>}

        <button
          className={classes.buttonAdd}
          type="submit"
          disabled={!formIsValid}
        >
          Add
        </button>
        <button className={classes.buttonClose} onClick={showEditTable}>
          Close
        </button>
      </form>
    </Modal>
  );
};

export default EditForm;
