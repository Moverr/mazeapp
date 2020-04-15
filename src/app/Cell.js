import React from 'react'

const Cell = function (props) {
    
    let classname = props.classname;

    return <div key={"cell_"+props.id}  className={classname}  >  &nbsp; </div>
}

export default Cell;
