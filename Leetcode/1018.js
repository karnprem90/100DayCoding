var prefixesDivBy5 = function(nums) {
    let answers = [];
    let currentMod = 0; 
    
    for (let i = 0; i < nums.length; i++) {
        currentMod = (currentMod * 2 + nums[i]) % 5;
        answers.push(currentMod === 0); 
    }
    return answers;
};

console.log(prefixesDivBy5([0, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1]));
console.log(prefixesDivBy5([0, 1, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1, 0]));
console.log(prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1]));
