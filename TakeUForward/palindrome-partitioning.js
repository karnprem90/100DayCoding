function palindromePartitioning(string) {
    let result = [];
    let res = [];
    function getSets(index) {
        if (index  === string.length) {
            result.push([...res]);
            return;
        }
        for (let i = index; i < string.length; i++) {
            if (isPalindrome(string, index, i)) {
                res.push(string.substring(index, i + 1));
                getSets(i + 1);
                res.pop();
            }
        }

    }

    getSets(0, res);
    return result;
}

function isPalindrome(str, start, end) {
    while (start <= end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(palindromePartitioning('aab'));