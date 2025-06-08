/**
 * Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.
 *
 * If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).
 */
function next_permutation_find_lexicographically_gereater_permutation(arr) {
    let permutations = [];
    function dfs(path, visited) {
        if (path.length === arr.length) {
            permutations.push([...path]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            path.push(arr[i]);
            dfs(path, visited);
            path.pop();
            visited[i] = false;
        }
    }
    dfs([], []);
    console.log(permutations);
    return permutations;
}

console.log(next_permutation_find_lexicographically_gereater_permutation([3,2,1]));