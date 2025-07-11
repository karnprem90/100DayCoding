var zeroFilledSubarray = function(nums) {
    let map = {};
    let count = 0;
    let totalNumberOfZeroes = 0;
    let actualNumber = 0;
    let foundNonZero = false;
    for (let num of nums) {
        if (num === 0) {
            totalNumberOfZeroes++;
            actualNumber += totalNumberOfZeroes;
        } else if (num !== 0) {
            count = 0;
            totalNumberOfZeroes = 0;
        }
    }
    return actualNumber;
};

function findSubArrays(arr, n)
{
    // create an empty map
    let map = {};

    // create an empty vector of pairs to store
    // subarray starting and ending index
    let out = [];

    // Maintains sum of elements so far
    let sum = 0;

    for (var i = 0; i < n; i++)
    {
        // add current element to sum
        sum += arr[i];

        // if sum is 0, we found a subarray starting
        // from index 0 and ending at index i
        if (sum == 0)
            out.push([0, i]);

        // If sum already exists in the map there exists
        // at-least one subarray ending at index i with
        // 0 sum
        if (map.hasOwnProperty(sum))
        {
            // map[sum] stores starting index of all subarrays
            let vc = map[sum];
            for (let it of vc)
                out.push([it + 1, i]);
        }
        else
            map[sum] = [];

        // Important - no else
        map[sum].push(i);
    }

    // return output vector
    return out;
}

// console.log(zeroFilledSubarray([0,0,0,2,0,0]));

let arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
let n = arr.length;

let out = findSubArrays(arr, n);
console.log(out);