import React from "react";
import styles from "./About.module.css";
import {useLocation} from "react-router-dom";

function About() {
    const location = useLocation();
    console.log(location.state);
    return (
        <div className={styles.about__container}>
            <span>
                "Freedom is the freedom to say that two plus two make four. If that i granted, all else follows."
            </span>
            <span>
                - George Orwell, 1984
            </span>
        </div>
    );
}

export default About;
