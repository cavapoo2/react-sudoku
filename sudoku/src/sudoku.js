 function validToAdd(grid, row, col, val) {
    //check row
    for (let i = 0; i < grid.length; i++) {
        if (val === grid[i][col]) return false;
    }
    //check col
    for (let i = 0; i < grid.length; i++) {
        if (val === grid[row][i]) return false;
    }

    //check region
    let rs = Math.sqrt(grid.length);
    let i = Math.floor(row / rs);
    let j = Math.floor(col / rs);
   // console.log('i=',i,'j=',j);
    for (let a = 0; a < rs; a++) {
        for (let b = 0; b < rs; b++) {
            //let ii = Math.floor(rs*i+a);
            //let jj = Math.floor(rs*j+b);
            let v = grid[rs*i+a][rs*j+b];
            if (val === v) {
                return false;
            }
        }
    }
    return true;
}

function solveHelper(grid, row, col) {
    if (row === grid.length) {
        row = 0;
        if (++col === grid[row].length) return true;
    }

    //skip non empties
    if (grid[row][col] !== 0) {
        return solveHelper(grid, row + 1, col);
    }

    for (let val = 1; val <= grid.length; ++val) {
        if (validToAdd(grid, row, col, val)) {
            grid[row][col] = val;
            if (solveHelper(grid, row + 1, col)) {
                return true;
            }
        }
    }
    grid[row][col] = 0;
    return false;

}
function boolArray(size, val) {
    let res = [];
    for (let i = 0; i < size; i++) {
        res.push(val)
    }
    return res;

}

function isValidSudoku(grid) {
    //check row
    for (let i = 0; i < grid.length; i++) {
        let present = boolArray(grid.length + 1, false);
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] !== 0 && present[grid[i][j]] === true) {
                return false;
            }
            else {
                present[grid[i][j]] = true;
            }
        }
    }
    //check col
    for (let j = 0; j < grid.length; j++) {
        let present = boolArray(grid.length + 1, false);
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][j] !== 0 && present[grid[i][j]] === true) {
                return false;
            }
            else {
                present[grid[i][j]] = true;
            }
        }
    }

    //check region
    let rs = Math.sqrt(grid.size);
    for (let x = 0; x < rs; x++) {
        for (let y = 0; y < rs; y++) {
            let present = boolArray(grid.length + 1, false);
            for (let i = 0; i < rs; i++) {
                for (let j = 0; j < rs; j++) {
                    if (grid[rs * x + i][rs * y + j] !== 0 && present[grid[rs * x + i][rs * y + j]] === true) {
                        return false;
                    }
                    else {
                        grid[rs * x + i][rs * y + j] = true;
                    }
                }
            }
        }
    }
    return true;
}

export function solveSudoku(grid) {
    if (!isValidSudoku(grid)) {
        console.log('Initial configuration is not valid')
        return false;
    }
    if (solveHelper(grid, 0, 0)) {
        return true;
    }
}

