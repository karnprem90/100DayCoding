var partition = function (s) {
    const result = [];
    const currentPartition = [];
    let callCount = 0;

    const indent = (depth) => '  '.repeat(depth);

    const isPalindrome = (str) => {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++; right--;
        }
        return true;
    };

    const backtrack = (startIndex, depth) => {
        callCount++;
        const id = callCount;

        console.log(`\n${indent(depth)}▶ backtrack(startIndex=${startIndex}) [Call #${id}]`);
        console.log(`${indent(depth)}  currentPartition = [${currentPartition.map(x => `"${x}"`).join(', ')}]`);

        // Base case
        if (startIndex === s.length) {
            console.log(`${indent(depth)}  ✅ BASE CASE HIT! Saving partition: [${currentPartition.map(x => `"${x}"`).join(', ')}]`);
            result.push([...currentPartition]);
            console.log(`${indent(depth)}◀ RETURN from backtrack [Call #${id}] — back to caller (pop() will now run)`);
            return;
        }

        // Explore all substrings from startIndex
        for (let i = startIndex; i < s.length; i++) {
            const substring = s.substring(startIndex, i + 1);
            const isPalin = isPalindrome(substring);

            console.log(`\n${indent(depth)}  🔍 i=${i} | substring="${substring}" | isPalindrome=${isPalin}`);

            if (isPalin) {
                console.log(`${indent(depth)}  ➕ PUSH "${substring}" → currentPartition=[${[...currentPartition, substring].map(x => `"${x}"`).join(', ')}]`);
                currentPartition.push(substring);

                backtrack(i + 1, depth + 1); // ← RECURSE

                // pop() ALWAYS runs after backtrack returns, regardless of HOW it returned
                console.log(`\n${indent(depth)}  ➖ POP  "${substring}" ← backtrack(${i+1}) just finished`);
                console.log(`${indent(depth)}           currentPartition=[${currentPartition.map(x => `"${x}"`).join(', ')}] → after pop: [${currentPartition.slice(0,-1).map(x => `"${x}"`).join(', ')}]`);
                currentPartition.pop();
            }
        }

        console.log(`${indent(depth)}◀ for-loop exhausted. RETURN from backtrack [Call #${id}]`);
    };

    console.log(`\n${'='.repeat(60)}`);
    console.log(`  Partitioning: "${s}"`);
    console.log(`${'='.repeat(60)}`);

    backtrack(0, 0);

    console.log(`\n${'='.repeat(60)}`);
    console.log(`  FINAL RESULT: ${JSON.stringify(result)}`);
    console.log(`${'='.repeat(60)}\n`);

    return result;
};

partition("aab");
