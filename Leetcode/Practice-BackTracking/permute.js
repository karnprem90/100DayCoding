function permute(nums) {
    const result = [];
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            backtrack(current, remaining.filter((_, idx) => idx !== i));
            current.pop();  // UNDO
        }
    }
    backtrack([], nums);
    return result;
}

console.log(permute([1, 2]));