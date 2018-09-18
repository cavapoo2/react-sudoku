import React, { Component } from 'react';
import './Container.css';
import { solveSudoku } from './sudoku';

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                [0, 0, 0, 2, 6, 0, 7, 0, 1],
                [6, 8, 0, 0, 7, 0, 0, 9, 0],
                [1, 9, 0, 0, 0, 4, 5, 0, 0],
                [8, 2, 0, 1, 0, 0, 0, 4, 0],
                [0, 0, 4, 6, 0, 2, 9, 0, 0],
                [0, 5, 0, 0, 0, 3, 0, 2, 8],
                [0, 0, 9, 3, 0, 0, 0, 7, 4],
                [0, 4, 0, 0, 5, 0, 0, 3, 6],
                [7, 0, 3, 0, 1, 8, 0, 0, 0],
            ],
            solved: false,
            message: '',
        };
        this.handleSolve = this.handleSolve.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //        this.handleDebug = this.handleDebug.bind(this);

    }
    handleChange(row, col, { target }) {
        let n = Object.assign({}, this.state);
        //n.arr[row][col] = parseInt(target.value.toString(),10);
        if (parseInt(target.value, 10).toString() === 'NaN') {
            n.arr[row][col] = '';
        } else {
            n.arr[row][col] = parseInt(target.value.toString(), 10);
        }
        this.setState(n);


    }
    handleReset({ target }) {
        let n = Object.assign({}, this.state);
        for (let i = 0; i < n.arr.length; i++) {
            for (let j = 0; j < n.arr.length; j++) {
                n.arr[i][j] = 0;
            }
        }
        n.solved = false;
        n.message = '';
        this.setState(n);
    }
    /*
    handleDebug() {
        console.log(this.state.arr);
    }*/

    handleSolve() {
        let n = Object.assign({}, this.state);
        console.log(n.arr);
        if (solveSudoku(n.arr)) {
            console.log('solved')
            n.solved = true;
            n.message = '';

        }
        else {
            n.solved = false;
            n.message = 'Not a Valid Sudoku';
            console.log('not valid sudoku');
        }

        this.setState(n);
    }
    render() {
        return (
            <div>
                <div><h1>9 * 9 Sudoku Solver</h1></div>
                <table>
                    <tbody>
                        <tr>
                            <td><input id="cell-0" type="text" value={this.state.arr[0][0]} onChange={(e) => this.handleChange(0, 0, e)} /></td>
                            <td><input id="cell-1" type="text" value={this.state.arr[0][1]} onChange={(e) => this.handleChange(0, 1, e)} /></td>
                            <td><input id="cell-2" type="text" value={this.state.arr[0][2]} onChange={(e) => this.handleChange(0, 2, e)} /></td>

                            <td><input id="cell-3" type="text" value={this.state.arr[0][3]} onChange={(e) => this.handleChange(0, 3, e)} /></td>
                            <td><input id="cell-4" type="text" value={this.state.arr[0][4]} onChange={(e) => this.handleChange(0, 4, e)} /></td>
                            <td><input id="cell-5" type="text" value={this.state.arr[0][5]} onChange={(e) => this.handleChange(0, 5, e)} /></td>

                            <td><input id="cell-6" type="text" value={this.state.arr[0][6]} onChange={(e) => this.handleChange(0, 6, e)} /></td>
                            <td><input id="cell-7" type="text" value={this.state.arr[0][7]} onChange={(e) => this.handleChange(0, 7, e)} /></td>
                            <td><input id="cell-8" type="text" value={this.state.arr[0][8]} onChange={(e) => this.handleChange(0, 8, e)} /></td>
                        </tr>
                        <tr>
                            <td><input id="cell-9" type="text" value={this.state.arr[1][0]} onChange={(e) => this.handleChange(1, 0, e)} /></td>
                            <td><input id="cell-10" type="text" value={this.state.arr[1][1]} onChange={(e) => this.handleChange(1, 1, e)} /></td>
                            <td><input id="cell-11" type="text" value={this.state.arr[1][2]} onChange={(e) => this.handleChange(1, 2, e)} /></td>

                            <td><input id="cell-12" type="text" value={this.state.arr[1][3]} onChange={(e) => this.handleChange(1, 3, e)} /></td>
                            <td><input id="cell-13" type="text" value={this.state.arr[1][4]} onChange={(e) => this.handleChange(1, 4, e)} /></td>
                            <td><input id="cell-14" type="text" value={this.state.arr[1][5]} onChange={(e) => this.handleChange(1, 5, e)} /></td>

                            <td><input id="cell-15" type="text" value={this.state.arr[1][6]} onChange={(e) => this.handleChange(1, 6, e)} /></td>
                            <td><input id="cell-16" type="text" value={this.state.arr[1][7]} onChange={(e) => this.handleChange(1, 7, e)} /></td>
                            <td><input id="cell-17" type="text" value={this.state.arr[1][8]} onChange={(e) => this.handleChange(1, 8, e)} /></td>

                        </tr>
                        <tr>
                            <td><input id="cell-18" type="text" value={this.state.arr[2][0]} onChange={(e) => this.handleChange(2, 0, e)} /></td>
                            <td><input id="cell-19" type="text" value={this.state.arr[2][1]} onChange={(e) => this.handleChange(2, 1, e)} /></td>
                            <td><input id="cell-20" type="text" value={this.state.arr[2][2]} onChange={(e) => this.handleChange(2, 2, e)} /></td>

                            <td><input id="cell-21" type="text" value={this.state.arr[2][3]} onChange={(e) => this.handleChange(2, 3, e)} /></td>
                            <td><input id="cell-22" type="text" value={this.state.arr[2][4]} onChange={(e) => this.handleChange(2, 4, e)} /></td>
                            <td><input id="cell-23" type="text" value={this.state.arr[2][5]} onChange={(e) => this.handleChange(2, 5, e)} /></td>

                            <td><input id="cell-24" type="text" value={this.state.arr[2][6]} onChange={(e) => this.handleChange(2, 6, e)} /></td>
                            <td><input id="cell-25" type="text" value={this.state.arr[2][7]} onChange={(e) => this.handleChange(2, 7, e)} /></td>
                            <td><input id="cell-26" type="text" value={this.state.arr[2][8]} onChange={(e) => this.handleChange(2, 8, e)} /></td>

                        </tr>
                        <tr>
                            <td><input id="cell-27" type="text" value={this.state.arr[3][0]} onChange={(e) => this.handleChange(3, 0, e)} /></td>
                            <td><input id="cell-28" type="text" value={this.state.arr[3][1]} onChange={(e) => this.handleChange(3, 1, e)} /></td>
                            <td><input id="cell-29" type="text" value={this.state.arr[3][2]} onChange={(e) => this.handleChange(3, 2, e)} /></td>
                            <td><input id="cell-30" type="text" value={this.state.arr[3][3]} onChange={(e) => this.handleChange(3, 3, e)} /></td>
                            <td><input id="cell-31" type="text" value={this.state.arr[3][4]} onChange={(e) => this.handleChange(3, 4, e)} /></td>
                            <td><input id="cell-32" type="text" value={this.state.arr[3][5]} onChange={(e) => this.handleChange(3, 5, e)} /></td>
                            <td><input id="cell-33" type="text" value={this.state.arr[3][6]} onChange={(e) => this.handleChange(3, 6, e)} /></td>
                            <td><input id="cell-34" type="text" value={this.state.arr[3][7]} onChange={(e) => this.handleChange(3, 7, e)} /></td>
                            <td><input id="cell-35" type="text" value={this.state.arr[3][8]} onChange={(e) => this.handleChange(3, 8, e)} /></td>

                        </tr>
                        <tr>
                            <td><input id="cell-36" type="text" value={this.state.arr[4][0]} onChange={(e) => this.handleChange(4, 0, e)} /></td>
                            <td><input id="cell-37" type="text" value={this.state.arr[4][1]} onChange={(e) => this.handleChange(4, 1, e)} /></td>
                            <td><input id="cell-38" type="text" value={this.state.arr[4][2]} onChange={(e) => this.handleChange(4, 2, e)} /></td>
                            <td><input id="cell-39" type="text" value={this.state.arr[4][3]} onChange={(e) => this.handleChange(4, 3, e)} /></td>
                            <td><input id="cell-40" type="text" value={this.state.arr[4][4]} onChange={(e) => this.handleChange(4, 4, e)} /></td>
                            <td><input id="cell-41" type="text" value={this.state.arr[4][5]} onChange={(e) => this.handleChange(4, 5, e)} /></td>
                            <td><input id="cell-42" type="text" value={this.state.arr[4][6]} onChange={(e) => this.handleChange(4, 6, e)} /></td>
                            <td><input id="cell-43" type="text" value={this.state.arr[4][7]} onChange={(e) => this.handleChange(4, 7, e)} /></td>
                            <td><input id="cell-44" type="text" value={this.state.arr[4][8]} onChange={(e) => this.handleChange(4, 8, e)} /></td>

                        </tr>
                        <tr>
                            <td><input id="cell-45" type="text" value={this.state.arr[5][0]} onChange={(e) => this.handleChange(5, 0, e)} /></td>
                            <td><input id="cell-46" type="text" value={this.state.arr[5][1]} onChange={(e) => this.handleChange(5, 1, e)} /></td>
                            <td><input id="cell-47" type="text" value={this.state.arr[5][2]} onChange={(e) => this.handleChange(5, 2, e)} /></td>
                            <td><input id="cell-48" type="text" value={this.state.arr[5][3]} onChange={(e) => this.handleChange(5, 3, e)} /></td>
                            <td><input id="cell-49" type="text" value={this.state.arr[5][4]} onChange={(e) => this.handleChange(5, 4, e)} /></td>
                            <td><input id="cell-50" type="text" value={this.state.arr[5][5]} onChange={(e) => this.handleChange(5, 5, e)} /></td>
                            <td><input id="cell-51" type="text" value={this.state.arr[5][6]} onChange={(e) => this.handleChange(5, 6, e)} /></td>
                            <td><input id="cell-52" type="text" value={this.state.arr[5][7]} onChange={(e) => this.handleChange(5, 7, e)} /></td>
                            <td><input id="cell-53" type="text" value={this.state.arr[5][8]} onChange={(e) => this.handleChange(5, 8, e)} /></td>

                        </tr>
                        <tr>
                            <td><input id="cell-54" type="text" value={this.state.arr[6][0]} onChange={(e) => this.handleChange(6, 0, e)} /></td>
                            <td><input id="cell-55" type="text" value={this.state.arr[6][1]} onChange={(e) => this.handleChange(6, 1, e)} /></td>
                            <td><input id="cell-56" type="text" value={this.state.arr[6][2]} onChange={(e) => this.handleChange(6, 2, e)} /></td>
                            <td><input id="cell-57" type="text" value={this.state.arr[6][3]} onChange={(e) => this.handleChange(6, 3, e)} /></td>
                            <td><input id="cell-58" type="text" value={this.state.arr[6][4]} onChange={(e) => this.handleChange(6, 4, e)} /></td>
                            <td><input id="cell-59" type="text" value={this.state.arr[6][5]} onChange={(e) => this.handleChange(6, 5, e)} /></td>
                            <td><input id="cell-60" type="text" value={this.state.arr[6][6]} onChange={(e) => this.handleChange(6, 6, e)} /></td>
                            <td><input id="cell-61" type="text" value={this.state.arr[6][7]} onChange={(e) => this.handleChange(6, 7, e)} /></td>
                            <td><input id="cell-62" type="text" value={this.state.arr[6][8]} onChange={(e) => this.handleChange(6, 8, e)} /></td>

                        </tr>
                        <tr>
                            <td><input id="cell-63" type="text" value={this.state.arr[7][0]} onChange={(e) => this.handleChange(7, 0, e)} /></td>
                            <td><input id="cell-64" type="text" value={this.state.arr[7][1]} onChange={(e) => this.handleChange(7, 1, e)} /></td>
                            <td><input id="cell-65" type="text" value={this.state.arr[7][2]} onChange={(e) => this.handleChange(7, 2, e)} /></td>
                            <td><input id="cell-66" type="text" value={this.state.arr[7][3]} onChange={(e) => this.handleChange(7, 3, e)} /></td>
                            <td><input id="cell-67" type="text" value={this.state.arr[7][4]} onChange={(e) => this.handleChange(7, 4, e)} /></td>
                            <td><input id="cell-68" type="text" value={this.state.arr[7][5]} onChange={(e) => this.handleChange(7, 5, e)} /></td>
                            <td><input id="cell-69" type="text" value={this.state.arr[7][6]} onChange={(e) => this.handleChange(7, 6, e)} /></td>
                            <td><input id="cell-70" type="text" value={this.state.arr[7][7]} onChange={(e) => this.handleChange(7, 7, e)} /></td>
                            <td><input id="cell-71" type="text" value={this.state.arr[7][8]} onChange={(e) => this.handleChange(7, 8, e)} /></td>

                        </tr>
                        <tr>
                            <td><input id="cell-72" type="text" value={this.state.arr[8][0]} onChange={(e) => this.handleChange(8, 0, e)} /></td>
                            <td><input id="cell-73" type="text" value={this.state.arr[8][1]} onChange={(e) => this.handleChange(8, 1, e)} /></td>
                            <td><input id="cell-74" type="text" value={this.state.arr[8][2]} onChange={(e) => this.handleChange(8, 2, e)} /></td>
                            <td><input id="cell-75" type="text" value={this.state.arr[8][3]} onChange={(e) => this.handleChange(8, 3, e)} /></td>
                            <td><input id="cell-76" type="text" value={this.state.arr[8][4]} onChange={(e) => this.handleChange(8, 4, e)} /></td>
                            <td><input id="cell-77" type="text" value={this.state.arr[8][5]} onChange={(e) => this.handleChange(8, 5, e)} /></td>
                            <td><input id="cell-78" type="text" value={this.state.arr[8][6]} onChange={(e) => this.handleChange(8, 6, e)} /></td>
                            <td><input id="cell-79" type="text" value={this.state.arr[8][7]} onChange={(e) => this.handleChange(8, 7, e)} /></td>
                            <td><input id="cell-80" type="text" value={this.state.arr[8][8]} onChange={(e) => this.handleChange(8, 8, e)} /></td>

                        </tr>

                    </tbody>
                </table>
                <span>
                    <button onClick={(e) => this.handleSolve(e)}>
                        Solve
                </button>
                    <button onClick={(e) => this.handleReset(e)}>Reset</button>

                </span>
                <h2>{this.state.solved ? <div>Solved</div> : <div>{this.state.message}</div>}</h2>

            </div>



        );
    }
}

export default Sudoku;