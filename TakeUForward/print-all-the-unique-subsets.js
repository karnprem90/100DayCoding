function printAllTheUniqueSubsets(nums) {
    const ans = [];
    const ds = [];

    nums.sort((a, b) => a - b); // Sort to handle duplicates

    function findSubsets(ind) {
        ans.push([...ds]);
        for (let i = ind; i < nums.length; i++) {
            if (i !== ind && nums[i] === nums[i - 1]) {
                continue;
            }
            ds.push(nums[i]);
            findSubsets(i + 1);
            ds.pop();
        }
    }

    findSubsets(0);
    return ans;
}

console.log(printAllTheUniqueSubsets([1,2,2]));