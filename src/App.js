import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./Header/container/Header";
import Expense from "./Revenue-Expense/container/Expense";
import Nav from "./Nav/Nav";
import Product from "./Product/container/Product";

import classes from "./App.module.css";
import ProductDetail from "./Product/component/ProductDetail";
import Shop from "./Shop/container/Shop";
import ShopDetail from "./Shop/component/ShopDetail";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/expense" />
          </Route>
          <Route path="/expense" >
            <div className={classes.body}>
              <Expense />
            </div>
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/shops" exact>
            <Shop />
          </Route>
          <Route path="/shops/:productId">
            <ShopDetail />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
