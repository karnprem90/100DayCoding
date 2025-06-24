function countAndSay(num) {
    let result = '1';
    for (let i = 1; i < num; i++) {
        result = getRLE(result);
    }
    return result;
}

function getRLE(str) {
    let r = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            r += count + str[i];
            count = 1;
        }
    }
    return r;
}


console.log(countAndSay(4));