import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useValid from "../hook/use-valid";

import { uiActions } from "../store/ui-slice";
import { listActions } from "../store/list-slice";

import Modal from "../UI/Modal";
import Check from "../Image/check.jpg";
import Edit from "../Image/edit_pencil.jpg";
import Delete from "../Image/deleteIcon.jpg";

import classes from "./AddNewList.module.css";

// Pop-out when click the Edit button at the end of the List.
const AddNewList = () => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [person, setPerson] = useState("");
  const [amount, setAmount] = useState("");

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

  const orderRef = useRef("");
  const detailRef = useRef("");

  const {
    isValid: categoryIsValid,
    errorOccur: categoryError,
    inputBlur: categoryBlur,
    inputFocus: categoryFocus,
    reset: resetCategory,
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
  } = useValid(orderRef.current.value);
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

  const dispatch = useDispatch();

  // เช็คว่า order เป็น order ใหม่นะ
  const allLists = useSelector((state) => state.lists.lists);
  let orderIsExisted = false;
  const existingOrder = allLists.find(
    (state) => state.order === orderRef.current.value
  );
  if (existingOrder) {
    orderIsExisted = true;
  }

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

  // Changing Amount
  const amountChange = (event) => {
    setAmount(event.target.value);
    return;
  };

  // close Edit page
  const showAddTable = () => {
    dispatch(uiActions.showingAddTable());
  };

  let formIsValid = false;
  if (
    categoryIsValid &&
    dateIsValid &&
    orderIsValid &&
    !orderIsExisted &&
    personIsValid &&
    amountIsValid
  ) {
    formIsValid = true;
  }

  // Sending all received data to the Body in Container.
  const submitHandler = (event) => {
    event.preventDefault();

    const theDate = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(date));

    //gather all data
    const gatheringList = {
      category: category,
      date: theDate,
      order: orderRef.current.value,
      person: person,
      detail: detailRef.current.value,
      amount: amount,
      stawBig: stawBig,
      stawSmall: stawSmall,
      banaBig: banaBig,
      banaSmall: banaSmall,
      chocBig: chocBig,
      chocSmall: chocSmall,
    };

    //send data
    dispatch(listActions.addList(gatheringList));
    dispatch(uiActions.showingAddTable());

    resetCategory();
    resetDate();
    resetOrder();
    resetPerson();
    resetAmount();
  };

  const categoryClasses = categoryError ? "formControl invalid" : "formControl";
  const dateClasses = dateError ? "formControl invalid" : "formControl";
  const orderClasses = orderError ? "formControl invalid" : "formControl";
  const personClasses = personError ? "formControl invalid" : "formControl";
  const amountClasses = amountError ? "formControl invalid" : "formControl";

  return (
    <Modal onClose={showAddTable}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1 className={classes.addForm}>Add Form</h1>
        <div className={categoryClasses}>
          <label className={classes.head}>Category: </label>
          <select
            className={classes.select}
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
            <option value="ยอดขายรวมส่ง">ยอดขายรวมส่ง</option>
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
          <label className={classes.head}>
            Date <span>(m/d/y)</span>:{" "}
          </label>
          <input
            className={classes.input}
            type="date"
            value={date}
            onChange={dateChange}
            onBlur={dateBlur}
            onFocus={dateFocus}
          />
        </div>
        {dateError && <p className={classes.error}>Please select a date!</p>}

        <div className={orderClasses}>
          <label className={classes.head}>Order: </label>
          <input
            className={classes.input}
            type="number"
            ref={orderRef}
            onBlur={orderBlur}
            onFocus={orderFocus}
          />
        </div>
        {orderError && <p className={classes.error}>Please enter a order!</p>}
        {orderIsExisted && (
          <p className={classes.error}>The order number is used!</p>
        )}

        <div className={personClasses}>
          <label className={classes.head}>Person: </label>
          <select
            className={classes.select}
            value={person}
            onChange={personChange}
            onBlur={personBlur}
            onFocus={personFocus}
          >
            <option value="">--Please Select--</option>
            <option value="Runway">Runway</option>
            <option value="Pee">Pee</option>
            <option value="Sun">Sun</option>
            <option value="Other...">Other...</option>
          </select>
          {personOtherShow === true ? (
            // input สำหรับ Other...
            <input
              className={classes.input}
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
          <label className={classes.head}>Detail: </label>
          <input className={classes.input} type="text" ref={detailRef} />
        </div>

        <div className={amountClasses}>
          <label className={classes.head}>Amount: </label>
          <input
            className={classes.input}
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
        <button className={classes.buttonClose} onClick={showAddTable}>
          Close
        </button>
      </form>
    </Modal>
  );
};

export default AddNewList;
