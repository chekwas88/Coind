import React from 'react'

function TableBody(props) {
    
    const {children} = props;
    return (
        <tbody className={"table__body"}>
            {children}
        </tbody>
    )
}



export default TableBody

