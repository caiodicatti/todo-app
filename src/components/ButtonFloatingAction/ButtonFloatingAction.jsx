import React from 'react'
import './ButtonFloatingAction.css';

const ButtonFloatingAction = ({ text, style, action }) => {
    return (
        <button onClick={action} className={`${style} btn-fixed`}>
            {text}
        </button>
    )
}

export default ButtonFloatingAction