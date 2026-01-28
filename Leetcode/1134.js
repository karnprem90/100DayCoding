var isArmstrong = function(n) {
    let totalDigit = 0;
    let num = n;
    let originalNum = n;
    while (num) {
        num = Math.floor(num/10);
        totalDigit++;
    }
    let sum = 0;
    while (n) {
        let val = n % 10;
        sum += Math.pow(val, totalDigit);
        n = Math.floor(n/10);
    }
    return sum === originalNum;   
};

console.log(isArmstrong(123));