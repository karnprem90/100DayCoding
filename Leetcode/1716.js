var totalMoney = function(n) {
    let totalCountOfDays = 7;
    let totalMoney = 0;
    let count = 0;
    while(n > 7) {
        totalMoney += 28 + (count * totalCountOfDays);
        count++;
        n = n - (7 % n);
    }
    totalMoney += (n * (n + 1)) / 2 + (count * n);
    return totalMoney;
};

console.log(totalMoney(20));

