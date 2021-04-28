import React from "react";
import Table from "../UI/Table";
import Edit from "../Edit/Edit";
import Header from "./Header";
import classes from "./Header.module.css";

// Go to the Body file in the Container folder to map the list out.
const List = (props) => {
  return (
    <Table>
      <Header />
      {props.list.map((list) => (
        <tr className={classes.row} key={list.order}>
          <td>{list.category}</td>
          <td>{list.date}</td>
          <td>{list.order}</td>
          <td>{list.person}</td>
          <td>{list.detail}</td>
          <td>{list.amount}</td>
          <td><input className={classes.trick} type="checkbox" /></td>
          <td>
            <Edit id={list.order} onEdit={props.onEditItem} onDelete={props.onDeleteItem} />
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default List;
