import React from 'react';

const Button = ({ onClick, classname, children,  ...props}) => {
    return (
        <button {...props} onClick={onClick} className={classname}>
            {children}
        </button>
    )
}

export default Button 
