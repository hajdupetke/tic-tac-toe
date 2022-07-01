export const checkWin = (table) => {
    //check rows
    let win = false;
    let row = 0;
    while (!win && row < 3) {
        if (
            (table[row][0] === "x" || table[row][0] === "o") &&
            table[row][0] === table[row][1] &&
            table[row][1] === table[row][2]
        ) {
            win = true;
        }
        row++;
    }

    //check col
    let col = 0;
    while (!win && col < 3) {
        if (
            (table[0][col] === "x" || table[0][col] === "o") &&
            table[0][col] === table[1][col] &&
            table[1][col] === table[2][col]
        ) {
            win = true;
        }
        col++;
    }

    //check diagonals
    if (
        !win &&
        (table[1][1] === "x" || table[1][1] === "o") &&
        ((table[0][0] === table[1][1] && table[1][1] === table[2][2]) ||
            (table[0][2] === table[1][1] && table[1][1] === table[2][0]))
    ) {
        win = true;
    }

    return win
};
