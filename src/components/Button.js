import React from 'react';

const Button = ({id, onClick, classname, children}, ...props) => {
    return (
        <button id={id} onClick={onClick} className={classname}>
            {children}
        </button>
    )
}

export default Button 
