import React, { Component } from 'react';
import Row from './Row';
import InputField from './InputField';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfColumns: 0,
            numberOfRows: 0,
            board: null,
            count: 0
        }
    }
      starpoints = [];
      greenPoints = new Array();
    addup(_count,_redPoints,_greenPoints) {
        // this.greenPoints.push(_greenPoints);
        // this.starpoints = redPoints;
        console.log("--LLLLL----------------")
        console.log(_greenPoints);
    }
    renderRow(numberOfRows, numberOfColumns, middleIndex,averageNumOfPlayers) {
        let rows = numberOfRows
        let players_per_row = Math.floor(averageNumOfPlayers);
        console.log("average per row "+averageNumOfPlayers);
        return Array.from({ length: rows }, (v, k) => k + 1).map((number) => {
          return  <Row key={number} id={number} columns={numberOfColumns} middleIndex={middleIndex} count={this.state.count} playersperrow = {players_per_row} callback={this.addup} />

        }

        );
    }
    initPlay() {
        let middleIndex = this.getPossibleMiddleCell(this.state.numberOfRows, this.state.numberOfColumns)
        let averageNumOfPlayers = this.getAverageNumberOfPlayers(this.state.numberOfRows, this.state.numberOfColumns);
        let result = this.renderRow(this.state.numberOfRows, this.state.numberOfColumns, middleIndex, averageNumOfPlayers);
        this.setState({ board: result })
        //todo: place the perosno randomly :


    }

    getPossibleMiddleCell(rows, columns) {
        let result = 1;
        if (rows !== undefined && columns !== undefined) {
            result = Math.floor((rows * columns) / 2);
        }
        console.log("REALLY-----------------------------");
        console.log(result);
       
        return result
    }

    getAverageNumberOfPlayers(rows, columns) {
        let result = 0;
        if (rows !== undefined && columns !== undefined) {
            result = Math.floor((rows ) / 2);
        }
        console.log(result);
        return result
    }


    render() {

        const board = this.state.board;
        return (
            <div>
                <h1>Play Game </h1>
                Columns : &nbsp;
                <InputField name={this.state.numberOfColumns} value={this.state.numberOfColumns} callback={(e) => this.setState({ numberOfColumns: e.target.value })} type="number" />

                <br />
                <br />
                Rows : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <InputField name={this.state.numberOfRows} value={this.state.numberOfRows} callback={(e) => this.setState({ numberOfRows: e.target.value })} type="number" />

                <br />
                <button onClick={() => this.initPlay()}>Play</button>
                {board}
            </div>
        );
    }
}

export default Board;