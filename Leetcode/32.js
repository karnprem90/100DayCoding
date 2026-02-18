var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [-1]; // Boundary index
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
};

console.log(longestValidParentheses("(()"));            // Expected: 2
console.log(longestValidParentheses("((()))"));          // Expected: 6
console.log(longestValidParentheses(")()())(()()())())")); // Expected: 10
console.log(longestValidParentheses(")()())"));          // Expected: 4
console.log(longestValidParentheses(""));                // Expected: 0

// More test cases
console.log(longestValidParentheses("()()"));            // Expected: 4  (two consecutive pairs)
console.log(longestValidParentheses("(())"));            // Expected: 4  (nested)
console.log(longestValidParentheses("()(()"));           // Expected: 2  (unmatched '(' breaks it)
console.log(longestValidParentheses("()(()()"));         // Expected: 4  (inner "()()" is valid, outer '(' unmatched)
console.log(longestValidParentheses("(()()"  ));         // Expected: 4  (leading '(' unmatched, "()()" valid)
console.log(longestValidParentheses("(()))()("  ));      // Expected: 4  ("(())" then break)
console.log(longestValidParentheses(")("));              // Expected: 0  (no valid pair)
console.log(longestValidParentheses("()(())"));          // Expected: 6  (all valid together)
console.log(longestValidParentheses("(())()"  ));        // Expected: 6  (two groups adjacent)
console.log(longestValidParentheses("(()()()"  ));       // Expected: 6  ("()()" valid, leading '(' unmatched)
