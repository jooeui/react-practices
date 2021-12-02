import React from "react";
import styles from './assets/scss/Task.scss'

export default function({name}) {
    return (
        <li className={styles.Task}>
            <input type='checkbox' checked='true' />
            {name}
            <a href='#' className={styles.TaskList__remove}></a>
        </li>
    )
}