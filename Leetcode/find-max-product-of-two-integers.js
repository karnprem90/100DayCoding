function findMaxProductOfTwoIntegers(arr) {
    arr = arr.sort((a, b) => a - b);
    let p1 = arr[0] * arr[1];
    let p2 = arr[arr.length - 1] * arr[arr.length - 2];
    return Math.max(p1, p2);
}

function findMaxProductOfTwoIntegersOptimized(arr) {
    let max1 = arr[0];
    let max2 = -Infinity;

    let min1 = arr[0];
    let min2 = Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }

        if (arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        } else if (arr[i] > min2) {
            min2 = arr[i];
        }
    }

    return Math.max(max1 * max2, min1 * min2);


}


console.log(findMaxProductOfTwoIntegersOptimized([-10, -3, 5, 6, -2]));