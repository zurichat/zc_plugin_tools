import React from 'react'

import styles from './Button.module.css'

const Button = ({
    text,
    type,
    size,
    autoResize,
    className,
    icon,
    placement,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${styles.button} ${
                type === 'secondary'
                    ? `bg-white text-rose-500`
                    : `bg-rose-500 text-white`
            } transition_all border-2 border-rose-500 hover:bg-rose-500 hover:text-white ${
                size && size === 2
                    ? `px-4 py-2 text-sm`
                    : `px-2 py-1 text-base sm:px-6 sm:py-2 sm:text-lg`
            } ${
                autoResize && `px-4 py-2 text-sm sm:px-6 sm:text-lg`
            }  rounded-3xl flex items-center`}
        >
            {icon && placement === 'left' && icon}
            <span className={`px-2`}>{text}</span>
            {icon && placement === 'right' && icon}
        </button>
    )
}

export default Button
