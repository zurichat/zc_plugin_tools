import React, { useState } from 'react'
import styles from "./Tools.module.css"
import Tool from './Tool'


const Tools = (props) => {
    const { list } = props
    return <div className={`${styles.tool_box} ${list && styles.tool_box_b}`}>{props.children}</div>;

}

export default Tools
