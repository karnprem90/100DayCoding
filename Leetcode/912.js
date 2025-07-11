function sortArray(nums) {
    function quickSort(left,right) {
        if (left >= right) {
            return;
        }

        let i = left - 1;
        let j = right + 1;

        const pivot = nums[(left + right) >> 1];

        while (i < j) {
            while (nums[++i] < pivot);
            while (nums[--j] > pivot);

            if (i < j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        quickSort(left, j);
        quickSort(j + 1, right);
    }

    const n = nums.length;
    quickSort(0, n - 1);

    return nums;
}

console.log(sortArray([5,2,3,1]));