import React from 'react'
import Cell from './Cell';

const Row = function (props) {
 console.log(props);
    let x = props.columns;
    return <div key={x} className={'row'}  >
         {Array.from({length:x},(v,k)=>k+1).map( (number)=> <Cell id={props.id}/> )} 
        </div>;
}

export default Row;
