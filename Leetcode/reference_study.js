
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

// Mock ListNode with ID for tracking references
let nodeIdCounter = 1;
function ListNode(val) {
    this.id = nodeIdCounter++; // Unique address simulation
    this.val = val;
    this.next = null;
}

// Utility to print list structure with IDs to see connections
function printListState(label, startNode, highlightId = null) {
    if (!startNode) return console.log(`${colors.cyan}${label}${colors.reset}: ${colors.dim}null${colors.reset}`);
    
    let result = [];
    let curr = startNode;
    let limit = 0;
    while (curr && limit < 10) { 
        let nodeStr = `[ID:${curr.id}|Val:${curr.val}]`;
        if (curr.id === highlightId) {
            nodeStr = `${colors.bgBlue}${colors.white}${colors.bright}${nodeStr}${colors.reset}`;
        } else {
            nodeStr = `${colors.yellow}${nodeStr}${colors.reset}`;
        }
        result.push(nodeStr);
        curr = curr.next;
        limit++;
    }
    if (curr) result.push(`${colors.dim}...${colors.reset}`);
    console.log(`${colors.cyan}${label}${colors.reset}: ${result.join(colors.dim + " -> " + colors.reset)}`);
}

function reverseLinkedList(head) {
    console.log(`${colors.magenta}    [FUNCTION START] reverseLinkedList${colors.reset}: processing list starting at ID:${head.id}`);
    let prev = null;
    let curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    console.log(`${colors.magenta}    [FUNCTION END] reverseLinkedList${colors.reset}: finished. New Head is ID:${prev.id}`);
    return prev;
}

// --- Main Simulation ---
console.log(`${colors.bright}${colors.green}=== LINKED LIST REFERENCE VISUALIZER ===${colors.reset}\n`);

console.log(`${colors.white}Creation: 1 -> 2 -> 3 -> 4 -> 5${colors.reset}`);
let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

// Scenerio: k = 2. We want to reverse first 2 nodes.
let dummy = new ListNode(0); // ID: 6
dummy.next = n1;
let prevGroupEnd = dummy; 
let groupStart = n1;
let groupEnd = n2; 

console.log(`\n${colors.bright}--- Initial State ---${colors.reset}`);
printListState("Full List (from dummy)", dummy);
console.log(`Variable ${colors.red}'groupStart'${colors.reset} points to: ${colors.yellow}[ID:${groupStart.id}|Val:${groupStart.val}]${colors.reset}`);
console.log(`Variable ${colors.red}'groupEnd'${colors.reset}   points to: ${colors.yellow}[ID:${groupEnd.id}|Val:${groupEnd.val}]${colors.reset}`);

console.log(`\n${colors.bright}--- Step 1: Identify the Next Group Start ---${colors.reset}`);
let nextGroupStart = groupEnd.next;
console.log(`Variable ${colors.red}'nextGroupStart'${colors.reset} stored: ${colors.yellow}[ID:${nextGroupStart.id}|Val:${nextGroupStart.val}]${colors.reset}`);

console.log(`\n${colors.bright}--- Step 2: The CUT (groupEnd.next = null) ---${colors.reset}`);
groupEnd.next = null;
printListState("List starting at groupStart", groupStart);
printListState("List starting at nextGroupStart", nextGroupStart);
console.log(`${colors.dim}(Notice: The link between 2 and 3 is broken)${colors.reset}`);

console.log(`\n${colors.bright}--- Step 3: Reverse the isolated group ---${colors.reset}`);
// We pass 'groupStart' (Reference to ID:1) to the function.
// The function REWIRES the objects ID:1 and ID:2.
let newGroupHead = reverseLinkedList(groupStart); 

printListState("Reversed Group (newGroupHead)", newGroupHead, newGroupHead.id);
printListState("Variable 'groupStart' is STILL pointing to ID:1", groupStart, groupStart.id);
console.log(`${colors.dim}(Notice: ID:1 is now the TAIL of this small list because 2->1->null)${colors.reset}`);
console.log(`${colors.dim}(Notice: 'groupStart' reference didn't change, but the object it points to (ID:1) has a different .next)${colors.reset}`);

console.log(`\n${colors.bright}--- Step 4: Reconnect ---${colors.reset}`);
// prevGroupEnd.next was pointing to ID:1. We update it to point to ID:2 (new head)
prevGroupEnd.next = newGroupHead;
printListState("After connecting prevGroupEnd -> newHead", dummy);

// groupStart (ID:1) is now the tail. We connect it to the rest of the list (nextGroupStart which is ID:3)
groupStart.next = nextGroupStart;
printListState("After connecting groupStart -> nextGroupStart", dummy);

console.log(`\n${colors.bright}--- Result ---${colors.reset}`);
console.log(`prevGroupEnd needs to move to the end of this group for the next iteration.`);
prevGroupEnd = groupStart; // This is the logic: old start becomes new end
console.log(`Variable ${colors.red}'prevGroupEnd'${colors.reset} now points to: ${colors.yellow}[ID:${prevGroupEnd.id}|Val:${prevGroupEnd.val}]${colors.reset}`);
