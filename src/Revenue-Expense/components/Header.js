import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <tr>
            <th className={classes.cate}>Categories</th>
            <th>Date</th>
            <th>Order</th>
            <th>Person</th>
            <th className={classes.detail}>Detail</th>
            <th>Amount</th>
            <th>Check</th>
            <th className={classes.edit}>Edit</th>
        </tr>
    )
}

export default Header;