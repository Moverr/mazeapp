import React from 'react'
import Cell from './Cell';



const RandomGenerator = function (_columns, _playersPerRow, _randomArray) {
        let randomArray = _randomArray
        let columns = _columns;
        let playersPerRow = _playersPerRow;

        let nextRandom = Math.floor(Math.random() * columns)
        if (randomArray.includes(nextRandom)) {
                return RandomGenerator(columns, playersPerRow, randomArray)
        }
        randomArray.push(nextRandom);
        if (randomArray.length == playersPerRow) {
                return randomArray
        }

        return RandomGenerator(columns, playersPerRow, randomArray)


}


const Row = function (props) {
        let starpoints = [];
        let greenPoints = [];

        let columns = props.columns;
        let count = props.count;
        let rowId = props.id;
        let middleIndex = props.middleIndex;

        let playersPerRow = props.playersperrow;
        let x = [];
        let randomNumbers = RandomGenerator(columns, playersPerRow, x);
        greenPoints[rowId] = randomNumbers;

        let numCells = rowId * columns;




        let middleCOunt = 0;

        if (numCells > (middleIndex + 1) && ((middleIndex + 1) > numCells - columns)) {
                middleCOunt = numCells % middleIndex;
                if (middleCOunt === 0) middleCOunt = 1;
                console.log("Beautiful Woman  ::  " + middleCOunt);
        }









        return <div key={"row_" + props.id} className={'row'}  {...props.callback(count, starpoints, greenPoints)} >


                {Array.from({ length: columns }, (v, k) => k + 1).map((number) => {

                        let classname = "cell";
                        if (middleCOunt == number) {
                                starpoints = [rowId, number];
                                classname = "cell RED"
                        }

                        if (randomNumbers.includes(number)) {
                                if (classname !== "cell RED") {
                                        greenPoints.push([rowId, number]);
                                        classname = "cell GREEN"
                                }

                        }
                        let result = <Cell key={number} id={number} classname={classname} />;
                        return result;
                }

                )}
        </div>;
}


export default Row;
