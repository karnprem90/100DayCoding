var generatePossibleNextMoves = function(currentState) {
    let result = [];
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            let nextState = currentState.slice(0, i) + '--' + currentState.slice(i + 2);
            result.push(nextState);
        }
    }
    return result;
};

console.log(generatePossibleNextMoves("++++"));