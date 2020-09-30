import React from 'react'

const TableHead = (props) => {
    const {children} = props;
    return (
        <thead className={"table__header"}>
            
            <tr className={"table__header-row"}>
              {children}
            </tr>
          </thead>
    )
}



export default TableHead

