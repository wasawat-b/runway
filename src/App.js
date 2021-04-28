import React, { Component } from "react";
import Header from "./Header/Header";
import Body from "./Revenue-Expense/container/Body";

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Body />
      </div>
    );
  }
};

export default App;

/* เปลี่ยนไปใส่ใน Body ใน Container ใน Revenue-Expense

import AddButton from "./Revenue-Expense/AddNewList/AddButton";
import AddNewList from "./Revenue-Expense/AddNewList/AddNewList";
import List from "./Revenue-Expense/components/List";
import EditForm from "./Revenue-Expense/Edit/EditForm";

import classes from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      changedData: [],
      findData: {},
      findDataIndex: null,
      showAddTable: false,
      showEditTable: false,
    };
  }

  tableHandler = (data) => {
    const table = [...this.state.tables, data];
    this.setState({ tables: table });
  };

  changedShowEditTable = () => {
    this.setState({ showEditTable: false });
  };

  changedShowAddTable = () => {
    const showAddTable = !this.state.showAddTable;
    this.setState({ showAddTable: showAddTable });
  };

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

  editedTable = (data) => {
    const index = this.state.findDataIndex;

    const table = this.state.tables.reduce(
      (prev, cur) =>
        cur === this.state.tables[index] ? [...prev, data] : [...prev, cur],
      []
    );

    this.setState({ tables: table, showEditTable: false });
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
            onShow={this.changedShowEditTable}
          />
        )}
        {this.state.showAddTable ? (
          <AddNewList
            tableLength={(this.state.tables.length+1)}
            addTable={this.tableHandler}
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

export default App;
*/

