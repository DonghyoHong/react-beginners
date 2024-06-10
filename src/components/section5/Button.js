import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export function Button(props) {
    return (
        <button className={styles.btn}>{props.text}</button>
    );
}