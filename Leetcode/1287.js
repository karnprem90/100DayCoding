var findSpecialInteger = function (arr) {
    const n = arr.length;
    const target = Math.floor(n / 4);

    for (let i = 0; i < n; i++) {
        if (arr[i] === arr[i + target]) {
            return arr[i];
        }
    }

    return -1;
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
