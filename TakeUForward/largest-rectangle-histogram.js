function largestRectangleHistogram(arr) {
    let maxArea = 0;
    const stack = [];
    arr.push(0); // Add a sentinel value to flush the stack at the end

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            const height = arr[stack.pop()];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}

console.log(largestRectangleHistogram([2, 1, 5, 6, 2, 3]));