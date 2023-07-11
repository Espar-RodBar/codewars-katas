var snakesAndLadders = function (board, dice) {
    let position = 0;

    dice.forEach((dice) => {
        // check if the dice roll overshoots
        const tmpNewPos = position + dice;
        if (tmpNewPos < board.length) {
            // add the dice roll to the position
            position = tmpNewPos;
            const square = board[position];

            // modify to position what the square give us, stay, snake or ladder
            position += square;
        }
        // check if we arrive to the end
        if (position === board.length - 1) return position;
    });
    return position;
};
