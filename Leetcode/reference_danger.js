
const c = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    bgBlue: "\x1b[44m"
};

console.log(`${c.bright}${c.green}=== REFERENCE vs COPY DEMO ===${c.reset}\n`);

// 1. Create the Object (The House)
let originalNode = { 
    val: 1, 
    next: { val: 2, next: null } // The "next" room in the house
};

console.log(`${c.bright}1. We built a house (originalNode)${c.reset}`);
console.log(`   It has instructions to the next room: ${JSON.stringify(originalNode)}`);

// 2. Create a Reference (Another Key to the SAME House)
let copyReference = originalNode;
console.log(`\n${c.bright}2. We made a copy of the KEY (copyReference = originalNode)${c.reset}`);
console.log(`   ${c.yellow}Does 'copyReference' point to the exact same memory? YES.${c.reset}`);

// 3. Modify via the Reference
console.log(`\n${c.bright}3. We use the NEW KEY (copyReference) to enter the house...${c.reset}`);
console.log(`   ...and we BURN the instructions to the next room! (copyReference.next = null)`);

copyReference.next = null; // The destruction happens here

// 4. Check the Original
console.log(`\n${c.bright}4. Now look at the 'originalNode' again:${c.reset}`);
console.log(`   ${c.red}${JSON.stringify(originalNode)}${c.reset}`);

if (originalNode.next === null) {
    console.log(`\n${c.bright}${c.red}!!! THE ORIGINAL WAS AFFECTED !!!${c.reset}`);
    console.log(`   Because 'node' and 'copy' were just two different names for the SAME object.`);
    console.log(`   If you burn the house using one key, it's burnt for the other key too.`);
}
