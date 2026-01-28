var relativeSortArray = function(arr1, arr2) {
    let count = new Array(1001).fill(0);
    for (let num of arr1) {
        count[num]++;
    }
    
    let result = [];
    
    for (let num of arr2) {
        while (count[num] > 0) {
            result.push(num);
            count[num]--;
        }
    }
    
    for (let i = 0; i <= 1000; i++) {
        while (count[i] > 0) {
            result.push(i);
            count[i]--;
        }
    }
    
    return result;
};
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));