function balancedParenthese(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') {
            stack.push('}');
        } else if (str[i] === '[') {
            stack.push(']');
        } else if (str[i] === '(') {
            stack.push(')');
        } else if (stack.pop() !== str[i]) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(balancedParenthese('()[{}]'));