var sumAndMultiply = function(n) {
    let sum = 0;
    let x  = 0;
    let count = 0;
    let prevVal = 0;
    while (n > 0) {
       let val = n % 10;
       n = Math.floor(n / 10);
       sum += val;
       x = val * Math.pow(10, count) + prevVal 
       if (val !== 0) {
         count = count + 1;
       }
       prevVal = x;
    }
    return x * sum;
};
console.log(sumAndMultiply(1567));