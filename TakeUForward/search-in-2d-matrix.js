function searchIn2dMatrix(matrix, target, n, m) {
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] <= target && target <= matrix[i][m-1]) {
            return binarySearch(matrix[i], target);
        }
    }
}

function binarySearch(row, target) {
    let len = row.length;
    let low = 0;
    let high = row.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (row[mid] === target) {
            return true;
        }
        if (target > row[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}