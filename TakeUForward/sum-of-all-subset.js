function sumOfAllSubset(arr) {
    let subsets = [];

    function helper(index, currentSum) {
        if (index === arr.length) {
            subsets.push(currentSum);
            return;
        }

        helper(index + 1, currentSum + arr[index]);
        helper( index + 1, currentSum);

    }
    helper(0, 0);
    return subsets;
}

const arr = [5,2,1];
console.log(sumOfAllSubset(arr));
