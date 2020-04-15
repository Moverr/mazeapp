import React from 'react'
import Cell from './Cell';

const Row = function (props) {
        console.log(props);
        let x = props.columns;
        return <div key={"row_" + props.id} className={'row'}  >
                {Array.from({ length: x }, (v, k) => k + 1).map((number) => <Cell key={number} id={number} />)}
        </div>;
}

export default Row;
