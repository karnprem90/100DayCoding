var stringShift = function(s, shift) {
    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0] === 0) {
            s = s.slice(shift[i][1]) + s.slice(0, shift[i][1]);
        } else {
            s = s.slice(s.length - shift[i][1]) + s.slice(0, s.length - shift[i][1]);
        }
    }
    return s;
};

console.log(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]]));