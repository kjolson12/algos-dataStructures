const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

const isValidSudoku = function (board) {
    // variables for the 9 sub boxes
    const box1 = board[0].slice(0, 3).concat(board[1].slice(0, 3), board[2].slice(0, 3));

    const box2 = board[0].slice(3, 6).concat(board[1].slice(3, 6), board[2].slice(3, 6));

    const box3 = board[0].slice(6).concat(board[1].slice(6), board[2].slice(6));

    const box4 = board[3].slice(0, 3).concat(board[4].slice(0, 3), board[5].slice(0, 3));

    const box5 = board[3].slice(3, 6).concat(board[4].slice(3, 6), board[5].slice(3, 6));

    const box6 = board[3].slice(6).concat(board[4].slice(6), board[5].slice(6));

    const box7 = board[6].slice(0, 3).concat(board[7].slice(0, 3), board[8].slice(0, 3));

    const box8 = board[6].slice(3, 6).concat(board[7].slice(3, 6), board[8].slice(3, 6));

    const box9 = board[6].slice(6).concat(board[7].slice(6), board[8].slice(6));

    const filteredBoxFunc = (box, element) => {
        const filteredBoxArray = box.filter(el => el === element);

        console.log(filteredBoxArray.length);
        if (filteredBoxArray.length > 1) {
            return false;
        };

        return true;
    };

    console.log(box1);
    console.log(box2);
    console.log(box3);
    console.log(box4);
    console.log(box5);
    console.log(box6);
    console.log(box7);
    console.log(box8);
    console.log(box9);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== '.') {
                console.log(`i: ${i}, j: ${j}`);
                // first we check the row
                const filteredArray = board[i].filter(el => el === board[i][j]);
                if (filteredArray.length > 1) return false;

                // then we check the column
                let colCount = 0;
                for (let k = 0; k < board.length; k++) {
                    if (board[k][j] === board[i][j]) colCount++;
                }
                if (colCount > 1) return false;

                // last we check the sub box
                if (i < 3 && j < 3) {
                    console.log('box1');
                    if (!filteredBoxFunc(box1, board[i][j])) return false;
                } else if (i < 3 && 2 < j && j < 6) {
                    console.log('box2');
                    if (!filteredBoxFunc(box2, board[i][j])) return false;
                } else if (i < 3 && 5 < j) {
                    console.log('box3');
                    if (!filteredBoxFunc(box3, board[i][j])) return false;
                } else if (2 < i && i < 6 && j < 3) {
                    console.log('box4');
                    if (!filteredBoxFunc(box4, board[i][j])) return false;
                } else if (2 < i && i < 6 && 2 < j && j < 6) {
                    console.log('box5');
                    if (!filteredBoxFunc(box5, board[i][j])) return false;
                } else if (2 < i && i < 6 && 5 < j) {
                    console.log('box6');
                    if (!filteredBoxFunc(box6, board[i][j])) return false;
                } else if (5 < i && j < 3) {
                    console.log('box7');
                    if (!filteredBoxFunc(box7, board[i][j])) return false;
                } else if (5 < i && 2 < j && j < 6) {
                    console.log('box8');
                    if (!filteredBoxFunc(box8, board[i][j])) return false;
                } else if (5 < i && 5 < j) {
                    console.log('box9');
                    if (!filteredBoxFunc(box9, board[i][j])) return false;
                }
            }
        }
    };

    return true;
};

isValidSudoku(board);