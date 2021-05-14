import { useDispatch } from "react-redux";

import { uiActions } from "../store/ui-slice";
import { listActions } from "../store/list-slice";

import editPencil from '../Image/edit_pencil.jpg';
import deleteIcon from '../Image/deleteIcon.jpg';

import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const dispatch = useDispatch();

  const { category, date, order, person, detail, amount } = props.list;

  const editHandler = () => {
    dispatch(uiActions.showingEdit());
    dispatch(listActions.receiveEditOrder(order));
  };

  const deleteHandler = () => {
    dispatch(listActions.removeList(order));
  };

  return (
    <tr className={classes.row}>
      <td>{category}</td>
      <td>{date}</td>
      <td>{order}</td>
      <td>{person}</td>
      <td>{detail}</td>
      <td>{amount}</td>
      <td>
        <input className={classes.trick} type="checkbox" />
      </td>
      <td>
        <img
          className={classes.editPencil}
          src={editPencil}
          alt="Edit Pencil"
          onClick={editHandler}
        />

        <img
          className={classes.deleteIcon}
          src={deleteIcon}
          alt="Delete Icon"
          onClick={deleteHandler}
        />
      </td>
    </tr>
  );
};

export default ListItem;
