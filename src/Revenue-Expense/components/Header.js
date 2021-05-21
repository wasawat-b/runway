import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <tr className="row">
            <th className={`col-2 ${classes.cate}`}>Categories</th>
            <th className="col-2">Date</th>
            <th className="col-1">Order</th>
            <th className="col-1">Person</th>
            <th className="col-3">Detail</th>
            <th className="col-1">Amount</th>
            <th className="col-1">Check</th>
            <th className={`col-1 ${classes.edit}`}>Edit</th>
        </tr>
    )
}

export default Header;