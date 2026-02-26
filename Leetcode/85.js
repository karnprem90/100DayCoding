var maximalRectangle = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maximumArea = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }

        maximumArea = Math.max(maximumArea, largestRectangle(heights));
    }

    return maximumArea;
};

var largestRectangle = function(heights) {
    const stack = [];
    let maximumArea = 0;
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            const height = heights[stack.pop()];
            const left = stack.length ? stack[stack.length - 1] : -1;
            const width = i - left - 1;
            maximumArea = Math.max(maximumArea, height * width);
        }
        stack.push(i);
    }
    heights.pop();
    return maximumArea;
}