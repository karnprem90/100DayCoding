// Using sorting
function longestConsecutiveSequence(arr) {
    arr.sort((a, b) => a - b);
    let count = 1;
    let finalCount = 0;
    let num = arr[0];
    let seen = new Set();
    seen.add(num);
    for (let i = 1; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            continue;
        }
        if (arr[i] === num + 1 || arr[i] === num) {
            num = arr[i];
            count++;
        } else {
            num = arr[i];
            count = 1;
        }
        seen.add(arr[i]);
        finalCount = Math.max(finalCount, count);
    }
    return finalCount;
}

console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

function longestConsecutive(nums) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, false);
    }
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        let j = 1;
        while (map.has(nums[i] + j)) {
            // map.set(nums[i] + 1, true);
            ++count;
            j++;
        }
        length = Math.max(length, count);
    }
    return length;
}