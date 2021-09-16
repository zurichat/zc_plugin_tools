import React, {useState} from 'react'
import styles from "./Tools.module.css"
import Tool from './Tool'


const Tools = (props) => {

    return (
        <div className={styles.tool_box}>
            {props.children}
        </div>
    )
}

export default Tools
