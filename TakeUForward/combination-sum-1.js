function combinationSum(arr, target) {
    const result = [];
    function subsets(index, ds, total) {
        if (total === target) {
            result.push([...ds]);
            return;
        }
        if (total > target || index >= arr.length) {
            return;
        }

        ds.push(arr[index]);
        subsets(index,ds, total + arr[index]);
        ds.pop();
        subsets(index + 1, ds, total);
    }
    subsets(0, [], 0);
    return result;
}
const arr = [2,3,6,7];
console.log(combinationSum(arr, 7));