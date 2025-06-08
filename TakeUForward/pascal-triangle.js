function pascalTriangle(n, r, c) {
    let arr = [];
    arr.push([1]);
    for (let i = 2; i < n + 1; i++) {
        const lastEle = arr[arr.length - 1];
        let auxArr = [1];
        for (let j = 0; j < lastEle.length - 1; j++) {
            auxArr.push(lastEle[j] + lastEle[j + 1]);
        }
        auxArr.push(1);
        arr.push(auxArr);
    }
    console.log(arr[r - 1][c - 1])
    console.log(arr[r - 1].join(','));
    console.log(arr);
}

console.log(pascalTriangle(5,5,3));