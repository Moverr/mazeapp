import React, { Component } from 'react'; 
import Row from './Row';
import InputField from './InputField';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfColumns: 0,
            numberOfRows: 0,
            board: null
        }
    }
    
    renderRow(numberOfRows, numberOfColumns) {
        let x = numberOfRows
        return Array.from({ length: x }, (v, k) => k + 1).map((number) => <Row id={number} columns={numberOfColumns} />);
    }
    initPlay() {
        let result = this.renderRow(this.state.numberOfRows, this.state.numberOfColumns);
        this.setState({ board: result })
        //todo: place the perosno randomly :
        
        

    }

    getMiddleArray(rows,columns){
        if(rows !== undefined && columns !== undefined){
            return ((rows * columns) /2 ) -1;
        }
        return null
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