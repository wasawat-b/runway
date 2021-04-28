import classes from './Table.module.css';
import React from 'react';

const Table = (props) => {
    return(
        <table className={classes.table}>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default Table;