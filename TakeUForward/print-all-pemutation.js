function permuteInPlace(arr, start = 0) {
    if (start === arr.length - 1) {
        console.log([...arr]); // or collect result if needed
        return;
    }

    for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
        permuteInPlace(arr, start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack (swap back)
    }
}

console.log(permuteInPlace([1,2,3]))