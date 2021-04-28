import classes from "./AddButton.module.css";

const AddButton = (props) => {
    return (
        <p className={classes.addButton} onClick={props.onShowAddNewListForm}>Add new table</p>
    );
};

export default AddButton;