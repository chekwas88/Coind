import React from 'react'

const Table = (props) => {
    const {children} = props;
    return (
        <table className="table">
          
         {children}
        </table>
    )
}

export default Table

