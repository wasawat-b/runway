import React from "react";
import editPencil from "../Image/edit_pencil.png";
import deleteIcon from "../Image/deleteIcon.jpg";
import classes from "./Edit.module.css";

// Be icons in the List file in the Component folder.
const Edit = (props) => {
  const editHandler = () => {
    props.onEdit(props.id);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
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
    </div>
  );
};

export default Edit;
