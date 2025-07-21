function partitionArray(arr) {
    let total = arr.reduce((a, b) => a + b, 0);
    let prefix = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (i > 0) prefix += arr[i - 1];
        let suffix = total - prefix;
        if (prefix === suffix) {
            // Partition: arr[0...i-1], arr[i...end]
            return [
                arr.slice(0, i),
                arr.slice(i)
            ];
        }
    }
    // No partition found
    return null;
}