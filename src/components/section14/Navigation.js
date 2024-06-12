import {Link} from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <div className={styles.nav}>
            <Link to="/">home</Link>
            <Link to="/about" state={{
                pathname: "/about"
                , state: true
            }}>about</Link>
        </div>
    );
}

export default Navigation;