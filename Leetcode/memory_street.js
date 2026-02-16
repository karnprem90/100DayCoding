
// ANSI Color Codes
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

// Visualize Computer Memory as a "Street"
// Each house (address) stores specific data
let memoryStreet = [
    { address: 100, data: "EMPTY" },
    { address: 101, data: "EMPTY" },
    { address: 102, data: "EMPTY" },
    { address: 103, data: "EMPTY" },
    { address: 104, data: "EMPTY" }
];

function printMemory(title) {
    console.log(`\n${c.cyan}--- ${title} ---${c.reset}`);
    memoryStreet.forEach(slot => {
        let content = typeof slot.data === 'object' 
            ? `{ val: ${slot.data.val}, next: ${slot.data.next} }` 
            : slot.data;
            
        let color = slot.data === "EMPTY" ? c.dim : c.green;
        console.log(`${c.yellow}Address ${slot.address}:${c.reset} ${color}${content}${c.reset}`);
    });
}

// 1. VARIABLE DECLARATION
// When you say 'let node1', you are creating a label.
// Initially it points to nothing (undefined).
let node1_Label = undefined;
let node2_Label = undefined;
console.log(`${c.bright}1. We have two labels (variables) 'node1' and 'node2' pointing to nothing.${c.reset}`);


// 2. ALLOCATION (new ListNode(1))
// The computer finds an empty spot on Memory Street (say Address 100)
// It builds the "House" there.
memoryStreet[0].data = { val: 1, next: null };
node1_Label = 100; // The variable 'node1' stores the ADDRESS (100)

printMemory("After: let node1 = new ListNode(1)");
console.log(`Variable 'node1' = ${c.magenta}${node1_Label}${c.reset} (It points to Address 100)`);


// 3. ALLOCATION (new ListNode(2))
// Computer finds next empty spot (Address 101)
memoryStreet[1].data = { val: 2, next: null };
node2_Label = 101; // The variable 'node2' stores ADDRESS (101)

printMemory("After: let node2 = new ListNode(2)");
console.log(`Variable 'node2' = ${c.magenta}${node2_Label}${c.reset} (It points to Address 101)`);


// 4. THE LINKING (node1.next = node2)
console.log(`\n${c.bright}${c.red}=== THE CRITICAL MOMENT ===${c.reset}`);
console.log(`Executing: node1.next = node2`);

// Step 4a: Look at 'node1' variable. It says "100".
// Step 4b: Go to Memory Address 100.
// Step 4c: Look at 'node2' variable. It says "101".
// Step 4d: Write "101" inside the 'next' slot of the house at Address 100.

// Performing the operation in our simulated memory...
let addressOfNode1 = node1_Label - 100; // Index 0
memoryStreet[addressOfNode1].data.next = node2_Label; // Write 101

printMemory("After: node1.next = node2");
console.log(`Look closely at Address 100!`);
console.log(`The 'next' value is now ${c.magenta}101${c.reset}.`);
console.log(`This is NOT a copy of Node 2. It is just the NUMBER 101.`);

// 5. TRAVERSAL (The "Chain")
console.log(`\n${c.bright}${c.green}=== HOW WE TRAVEL ===${c.reset}`);
console.log(`Task: Find the value of the 2nd node starting from 'node1'.`);

// Step 5a
console.log(`1. Check 'node1' variable -> It says: Go to ${c.magenta}100${c.reset}.`);

// Step 5b
let house1 = memoryStreet[node1_Label - 100].data;
console.log(`2. Arrived at Address 100. Check 'next' field -> It says: Go to ${c.magenta}${house1.next}${c.reset}.`);

// Step 5c
let nextAddress = house1.next;
let house2 = memoryStreet[nextAddress - 100].data;
console.log(`3. Arrived at Address ${nextAddress}. Check 'val' field -> It is ${c.bright}${house2.val}${c.reset}.`);

console.log(`\n${c.bright}Conclusion:${c.reset}`);
console.log(`Node 1 "leads to" Node 2 because Node 1 literally contains the map coordinates (101) to find Node 2.`);
