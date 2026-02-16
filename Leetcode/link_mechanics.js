// ANSI Color Codes
const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    bgBlue: "\x1b[44m"
};

// Mock ListNode
let nodeIdCounter = 1;
function ListNode(val) {
    this.id = nodeIdCounter++; 
    this.val = val;
    this.next = null;
}

// Global Variables to Simulate Memory
let memory = {}; // Maps ID to Node Object

console.log(`${colors.bright}${colors.green}=== HOW NODE 1 LEADS TO NODE 2 ===${colors.reset}\n`);

// 1. Create Node 1
let node1 = new ListNode(1);
memory[node1.id] = node1;
console.log(`1. Created Node 1 at Address ID:${node1.id}`);
console.log(`   Node 1 currently looks like: { val: 1, next: ${node1.next} }`);

// 2. Create Node 2
let node2 = new ListNode(2);
memory[node2.id] = node2;
console.log(`\n2. Created Node 2 at Address ID:${node2.id}`);
console.log(`   Node 2 currently looks like: { val: 2, next: ${node2.next} }`);

// 3. The LINKING Step
console.log(`\n3. ${colors.cyan}Linking Node 1 to Node 2...${colors.reset}`);
node1.next = node2; // THIS IS THE KEY MOMENT
console.log(`   Executed: ${colors.yellow}node1.next = node2;${colors.reset}`);

console.log(`\n4. Now let's inspect Node 1 again:`);
// Manually inspecting object properties
console.log(`   Node 1 is an object at ID:${node1.id}`);
console.log(`   It has a property called '.next'`);
console.log(`   The value of '.next' is a REFERENCE to Node 2 (ID:${node1.next.id})`);

// 5. Traversing
console.log(`\n5. ${colors.cyan}Simulating Traversal (How computer follows the path)${colors.reset}`);
let currentNode = node1; // We start holding Node 1
console.log(`   [Step A] I am holding Node ${currentNode.val} (ID:${currentNode.id})`);

console.log(`   [Step B] I ask: "Who is your neighbor?" (i.e. access .next)`);
let neighbor = currentNode.next; // This retrieves the REFERENCE to Node 2

if (neighbor) {
    console.log(`   [Step C] The answer is: Node ${neighbor.val} (ID:${neighbor.id})`);
    console.log(`   Success! I followed the wire from Node 1 to find Node 2.`);
} else {
    console.log(`   The answer is: Nobody (null).`);
}

