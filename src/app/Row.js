import React from 'react'
import Cell from './Cell';

//todo: cellcount : 
//todo: cells * rows : 
//todo: cell * 
const Row = function (props) {
         
        let columns = props.columns;
        let count = props.count;
        let rowId = props.id;
        let middleIndex = props.middleIndex;

        
        let numCells = rowId* columns;
        console.log("Middle Index ");
        console.log(middleIndex);

        console.log("Columns ");
        console.log(columns);

        let middleCOunt = 0;

        if(numCells > (middleIndex +1)  && ((middleIndex +1) > numCells- columns ) ){
                middleCOunt =    numCells % middleIndex;
                console.log("Beautiful Woman  ::  " + middleCOunt); 
        }

        console.log("numCells ");
        console.log(numCells);

        

        
        


        return <div key={"row_" + props.id} className={'row'}  {...props.callback(count)} >

                
                {Array.from({ length: columns }, (v, k) => k + 1).map((number) => {

                        let classname = "cell";
                        if(middleCOunt == number){
                                classname ="cell RED"  
                        }
                      let result = <Cell key={number} id={number} classname={classname}  />;
                        return result;
                }

                )}
        </div>;
}


export  default Row;
