import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListData, sendListData } from "../store/list-action";

import { uiActions } from "../store/ui-slice";

import AddButton from "../AddNewList/AddButton";
import AddNewList from "../AddNewList/AddNewList";
import Summary from '../../Summary/container/Summary';
import Notification from "../UI/Notification";
import List from "../components/List";
import EditForm from "../Edit/EditForm";

import classes from "./Expense.module.css";

function Expense() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const showEdit = useSelector((state) => state.ui.showEdit);
  const showAddTable = useSelector((state) => state.ui.showAddTable);
  const showSummary = useSelector((state) => state.ui.showSummary);
  const notification = useSelector(state => state.ui.response);

  useEffect(() => {
    dispatch(fetchListData());
  }, [dispatch]);

  useEffect(() => {
    if (lists.changed) {
      dispatch(sendListData(lists));
    }
  }, [lists, dispatch]);

  const showSummaryHandler = () => {
    dispatch(uiActions.showingSummary());
  };

  return (
    <Fragment>
      {showEdit && <EditForm />}
      {showAddTable && <AddNewList />}
      <button className={classes.summary} onClick={showSummaryHandler}>Summary</button>
      {showSummary && <Summary />}
      <List />
      {notification && (
        <Notification 
          status={notification.status}
          message={notification.message}
        />
      )}
      <div>
        {!showAddTable && <AddButton />}
      </div>
    </Fragment>
  );
}

export default Expense;
