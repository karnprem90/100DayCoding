/**
 * Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
 */

function sortOfAnArray(arr) {
    let countOf0 = 0;
    let countof1 = 0;
    let countof2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            countOf0++
        } else if (arr[i] === 1) {
            countof1++
        } else {
            countof2++
        }
    }

    for (let i = 0; i < countOf0; i++) {
        arr[i] = 0;
    }
    for (let i = countOf0; i < (countOf0 + countof1); i++) {
        arr[i] = 1;
    }

    for (let i = (countOf0 + countof1); i < (countOf0 + countof1 + countof2); i++) {
        arr[i] = 2;
    }

    return arr;
}

console.log(sortOfAnArray([0]));