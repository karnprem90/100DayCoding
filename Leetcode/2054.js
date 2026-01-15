/**
 * You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.

Return this maximum sum.

Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1.
 */

var maxTwoEvents = function(events) {
    // Sort by end time
    events.sort((a, b) => a[1] - b[1]);
    
    const n = events.length;
    const dp = new Array(n); // dp[i] = max value of single event from 0 to i
    let maxSum = 0;
    
    for (let i = 0; i < n; i++) {
        const [start, end, value] = events[i];
        
        // Update max single event value up to index i
        dp[i] = i === 0 ? value : Math.max(dp[i - 1], value);
        
        // Option 1: Take only current event
        maxSum = Math.max(maxSum, value);
        
        // Option 2: Take current + best non-overlapping previous event
        // Binary search for last event that ends before current starts
        let left = 0, right = i - 1, best = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][1] < start) {
                best = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        if (best !== -1) {
            maxSum = Math.max(maxSum, dp[best] + value);
        }
    }
    
    return maxSum;
};