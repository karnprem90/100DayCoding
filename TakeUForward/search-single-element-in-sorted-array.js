function searchSingleElementInSortedArray(array) {
    let length = array.length;
    if (length === 0) {
        return;
    }

    if (length === 1) {
        return array[0];
    }

    if (array[0] !== array[1]) {
        return array[0];
    }

    let low = 1;
    let high = length - 2;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] !== array[mid + 1] && array[mid - 1] !== array[mid]) {
            return array[mid];
        }

        if ((mid % 2 === 1) && array[mid] === array[mid - 1] || (mid % 2 === 0) && array[mid] === array[mid + 1] && array[mid] === array[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}