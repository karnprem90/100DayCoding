var zeroFilledSubarray = function(nums) {
    let map = {};
    let count = 0;
    let totalNumberOfZeroes = 0;
    let actualNumber = 0;
    let foundNonZero = false;
    for (let num of nums) {
        if (num === 0) {
            totalNumberOfZeroes++;
            actualNumber += totalNumberOfZeroes;
        } else if (num !== 0) {
            count = 0;
            totalNumberOfZeroes = 0;
        }
    }
    return actualNumber;
};

console.log(zeroFilledSubarray([0,0,0,2,0,0]));