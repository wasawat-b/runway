import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <li className={classes.list}>
          <NavLink activeClassName={classes.active} to="/expense">
            Expense
          </NavLink>
        </li>
        <li className={classes.list}>
          <NavLink activeClassName={classes.active} to="/products">
            Product
          </NavLink>
        </li>
        <li className={classes.list}>
          <NavLink activeClassName={classes.active} to="/shops">
            Shop
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
