import React, { Component, Fragment } from "react";
import Header from "./Header/Header";
import Body from "./Revenue-Expense/container/Body";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className={classes.body}>
          <Body />
        </div>
      </Fragment>
    );
  }
}

export default App;
