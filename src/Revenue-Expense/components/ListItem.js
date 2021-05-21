import { useDispatch } from "react-redux";

import { uiActions } from "../store/ui-slice";
import { listActions } from "../store/list-slice";

import editPencil from "../Image/edit_pencil.png";
import deleteIcon from "../Image/deleteIcon.png";

import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const dispatch = useDispatch();

  const { category, date, order, person, detail, amount } = props.list;

  const editHandler = () => {
    dispatch(uiActions.showingEdit());
    dispatch(listActions.receiveEditOrder(order));
  };

  const deleteHandler = () => {
    if (window.confirm("Do you really want to DELETE!!")) {
      dispatch(listActions.removeList(order));
    } else {
      return;
    }
  };

  return (
    <tr className="row">
      <td className="col-2 justify-content-center">{category}</td>
      <td className="col-2 justify-content-center">{date}</td>
      <td className="col-1 justify-content-center">{order}</td>
      <td className="col-1 justify-content-center">{person}</td>
      <td className={`col-3 text-start ${classes.detail}`}>{detail}</td>
      <td className="col-1 justify-content-center">
        {parseFloat(amount).toFixed(2)}
      </td>
      <td className="col-1 p-2 justify-content-center">
        <input className={classes.trick} type="checkbox" />
      </td>
      <td className={`col-1 p-0 d-flex justify-content-around align-items-center ${classes.iconCover}`}>
          <img
            className={classes.icon}
            src={editPencil}
            alt="Edit Pencil"
            onClick={editHandler}
          />
          <img
            className={classes.icon}
            src={deleteIcon}
            alt="Delete Icon"
            onClick={deleteHandler}
          />
      </td>
    </tr>
  );
};

export default ListItem;
