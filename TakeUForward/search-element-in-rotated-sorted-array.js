function searchElementInRotatedSortedArray(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let pivot = left;
    if (arr[pivot] === k) {
        return pivot;
    }
    let resultedIndex = -1;
    if (k > arr[pivot] && k > arr[arr.length - 1]) {
        let right = pivot;
        let left = 0;
        resultedIndex =  binarySearch(arr, left, right, k);
    }
    if (arr[pivot] <= k && k < arr[0]) {
        let left = pivot;
        let right = arr.length - 1;
        resultedIndex =  binarySearch(arr, left, right, k);
    }
    return resultedIndex >=0 ?  resultedIndex: -1;

}

function binarySearch(arr, left, right, k) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === k) {
            return mid;
        }
        if (arr[mid] < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return -1;
}
const arr =  [4,5,6,7,8,9,0,1,2,3];
const k = 3;
console.log(searchElementInRotatedSortedArray(arr, k));