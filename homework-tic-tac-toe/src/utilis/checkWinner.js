const checkWinner = (board) => {
    let winner = null;

   const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

   ];

   winningCombinations.forEach((combination) => {
        const [firstIndex, secondIndex, thirdIndex] = combination;

        if(firstIndex == 0 && secondIndex == 4 && thirdIndex == 8) {
            console.log(board[firstIndex], board[secondIndex] === board[thirdIndex]);
        }

        if(board[firstIndex] === board[secondIndex] &&
            board[firstIndex] === board[thirdIndex] &&
            board[secondIndex] === board[thirdIndex]) {
            winner = board[firstIndex];
        }
   });

    return winner;
};

export default checkWinner;