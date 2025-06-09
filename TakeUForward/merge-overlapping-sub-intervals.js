function mergeOverlappingSubIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], interval[1]);
        } else {
            mergedIntervals.push(prev);
            prev = interval;
        }
    }
    mergedIntervals.push(prev);
    return mergedIntervals;
}

console.log(mergeOverlappingSubIntervals([[1,3],[2,6],[8,10],[15,18]]))