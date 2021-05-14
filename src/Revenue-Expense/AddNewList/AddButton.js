import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import classes from "./AddButton.module.css";

const AddButton = () => {
  const dispatch = useDispatch();

  const showAddTable = () => {
    dispatch(uiActions.showingAddTable());
  };

  return (
    <button className={classes.addButton} onClick={showAddTable}>
      Add new table
    </button>
  );
};

export default AddButton;
