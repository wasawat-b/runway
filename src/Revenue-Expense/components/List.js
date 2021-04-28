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
        <tr key={list.order}>
          <td className={classes.category}>{list.category}</td>
          <td className={classes.date}>{list.date}</td>
          <td className={classes.lessSpace}>{list.order}</td>
          <td className={classes.person}>{list.person}</td>
          <td className={classes.detail}>{list.detail}</td>
          <td className={classes.lessSpace}>{list.amount}</td>
          <td className={classes.lessSpace}><input type="checkbox" /></td>
          <td className={classes.lessSpace}>
            <Edit id={list.order} onEdit={props.onEditItem} onDelete={props.onDeleteItem} />
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default List;
