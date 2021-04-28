import React, { Component } from "react";

import AddButton from "../AddNewList/AddButton";
import AddNewList from "../AddNewList/AddNewList";
import List from "../components/List";
import EditForm from "../Edit/EditForm";

import classes from "./Body.module.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      changedData: [],
      findData: {},
      bottle: [],
      findDataIndex: null,
      showAddTable: false,
      showEditTable: false,
    };
  }

  // AddTable functions
  tableHandler = (data) => {
    const table = [...this.state.tables, data];
    this.setState({ tables: table });
  };

  sellBottleHandle = (data) => {
    const sellBottle = [...this.state.bottle, data];
    this.setState({ bottle : sellBottle});
  };
  
  changedShowAddTable = () => {
    const showAddTable = !this.state.showAddTable;
    this.setState({ showAddTable: showAddTable });
  };

  // EditTable Functions
  editedTable = (data) => {
    const index = this.state.findDataIndex;

    const table = this.state.tables.reduce(
      (prev, cur) =>
        cur === this.state.tables[index] ? [...prev, data] : [...prev, cur],
      []
    );

    this.setState({ tables: table, showEditTable: false });
  };

  editSellBottleHandle = (data) => {
    const index = this.state.findDataIndex;

    const bottle = this.state.bottle.reduce(
      (prev, cur) =>
        cur === this.state.bottle[index] ? [...prev, data] : [...prev, cur],
      []
    );

    this.setState({ bottle: bottle, showEditTable: false });
  };

  changedShowEditTable = () => {
    this.setState({ showEditTable: false });
  };

  // List Function
  editItemHandler = (itemOrder) => {
    let findedData = this.state.tables
      .filter((table) => table.order === itemOrder)
      .reduce((value, curVal) => curVal);

    const findedDataIndex = this.state.tables.findIndex(
      (table) => table.order === itemOrder
    );

    this.setState({
      findDadta: findedData,
      findDataIndex: findedDataIndex,
      showEditTable: true,
    });
  };

  deleteItemHandler = (itemOrder) => {
    const changedTable = this.state.tables.filter(
      (table) => table.order !== itemOrder
    );

    this.setState({ tables: changedTable });
  };

  render() {
    return (
      <div className={classes.div}>
        {this.state.showEditTable && (
          <EditForm
            editData={this.editedTable}
            editSellBottle={this.editSellBottleHandle}
            onShowEditTable={this.changedShowEditTable}
            onShow={this.changedShowEditTable}
          />
        )}
        {this.state.showAddTable ? (
          <AddNewList
            tableLength={(this.state.tables.length+1)}
            addTable={this.tableHandler}
            addSellBottle={this.sellBottleHandle}
            onShowAddTable={this.changedShowAddTable}
            onShow={this.changedShowAddTable}
          />
        ) : null}
        <List
          list={this.state.tables}
          onAddImage={this.addImageHandler}
          onEditItem={this.editItemHandler}
          onDeleteItem={this.deleteItemHandler}
        />
        <div>
          <AddButton 
            onShowAddNewListForm={this.changedShowAddTable} />
        </div>
      </div>
    );
  }
}

export default Body;
