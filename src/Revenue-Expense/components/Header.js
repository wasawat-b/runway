import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <tr>
            <th className={classes.cate}>Categories</th>
            <th className={classes.med}>Date</th>
            <th className={classes.less}>Order</th>
            <th className={classes.med}>Person</th>
            <th className={classes.detail}>Detail</th>
            <th className={classes.less}>Amount</th>
            <th className={classes.less}>Check</th>
            <th className={classes.less}>Edit</th>
        </tr>
    )
}

export default Header;