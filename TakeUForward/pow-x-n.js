function powXN(x, n) {
    let res = 1;
    while (n) {
        res = res * x;
        n--;
    }
    return res;
}


function powYN(x, n) {
    let res = 1;
    let base = x;
    let exp = Math.abs(1);
    while (exp > 0) {
        if (n & 1) {
            res *= base;
        }
        base *= base;
        exp >>= 1;
    }
    return n < 0  ? 1/res : res;
}
console.log(powXN(2, 10));