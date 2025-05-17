import React from 'react'
import './ButtonFloatingAction.css';

const ButtonFloatingAction = ({ text, style, action, title }) => {
    return (
        <button onClick={action} className={`${style} btn-fixed`} title={title}>
            {text}
        </button>
    )
}

export default ButtonFloatingAction