import classes from './Notification.module.css';

const Notification = (props) => {
    let typeClasses = "";

    if (props.status === 'error') {
        typeClasses = classes.error;
    }

    if (props.status === 'success') {
        typeClasses = classes.success;
    }

    const statusClasses = `${classes.notificationClasses} ${typeClasses}`

    return (
        <div className={statusClasses}>
            <p>{props.message}</p>
        </div>
    );
};

export default Notification;