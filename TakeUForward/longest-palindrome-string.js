function longestPalindromeString(s) {
    let n = s.length;
    if (n === 0) return "";

    let start = 0;
    let maxLength = 1;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }


    for (let i = 2; i <= len; i++) {
        for (let j = 0; j <= n - length; j++) {
            const k = j + i - 1;
            if (s[j] === s[k]) {
                if (i === 2) {
                    dp[j][k] = true;
                } else {
                    dp[j][k] = dp[j + 1][k - 1];
                }

                if (dp[j][k] &&  i > maxLength) {
                    start = j;
                    maxLength = i;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
}