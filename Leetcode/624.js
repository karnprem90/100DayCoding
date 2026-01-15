var maxDistance = function(arrays) {
    // Since arrays are sorted, we only need min (first) and max (last) of each array
    // Track global min and max with their array indices
    let globalMin = arrays[0][0];
    let globalMinIdx = 0;
    let globalMax = arrays[0][arrays[0].length - 1];
    let globalMaxIdx = 0;
    
    // Also track second best min and max in case global min/max are from same array
    let secondMin = Infinity;
    let secondMax = -Infinity;
    
    for (let i = 0; i < arrays.length; i++) {
        const arr = arrays[i];
        const arrMin = arr[0];
        const arrMax = arr[arr.length - 1];
        
        // Update global min
        if (arrMin < globalMin) {
            secondMin = globalMin;
            globalMin = arrMin;
            globalMinIdx = i;
        } else if (arrMin < secondMin && i !== globalMinIdx) {
            secondMin = arrMin;
        }
        
        // Update global max
        if (arrMax > globalMax) {
            secondMax = globalMax;
            globalMax = arrMax;
            globalMaxIdx = i;
        } else if (arrMax > secondMax && i !== globalMaxIdx) {
            secondMax = arrMax;
        }
    }
    
    // If min and max are from different arrays, that's our answer
    if (globalMinIdx !== globalMaxIdx) {
        return globalMax - globalMin;
    }
    
    // Otherwise, find max distance using second best candidates
    return Math.max(
        globalMax - secondMin,
        secondMax - globalMin
    );
}
console.log(maxDistance([[1,2,3], [4,5,6], [7,8,9]]));
console.log(maxDistance([[1,4], [0,5]]));