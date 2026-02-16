
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

console.log(`${c.bright}${c.green}=== THE TRAIN ANALOGY ===${c.reset}\n`);

// Concept: A Train
// The Engine (Head) pulling Carriages (Nodes).
// Each carriage has a hook (next) connected to the carriage behind it.

let train = [
    { name: "Engine (Node 1)", hookConnectedTo: "Carriage 2" },
    { name: "Carriage 2",      hookConnectedTo: "Carriage 3" },
    { name: "Carriage 3",      hookConnectedTo: "End of Train" }
];

// Visualizing the Train
function lookAtTrain(observerName, startCarriageIndex) {
    console.log(`\n${c.yellow}${observerName} is looking at the train starting from ${train[startCarriageIndex].name}:${c.reset}`);
    
    let currentIndex = startCarriageIndex;
    let description = "";
    
    while (currentIndex !== null) {
        let currentCarriage = train[currentIndex];
        description += `[ ${currentCarriage.name} ]`;
        
        if (currentCarriage.hookConnectedTo === "End of Train" || currentCarriage.hookConnectedTo === "Nothing") {
            description += " --> END";
            break;
        } else {
             description += " --hook--> ";
             // Find next carriage based on name to simulate pointer
             // (Simple logic for analogy: index + 1)
             currentIndex++; 
             if (currentIndex >= train.length) break;
        }
    }
    console.log(description);
}

// 1. Initial State
console.log(`${c.bright}1. We have a train: Engine -> Carriage 2 -> Carriage 3${c.reset}`);
// You are standing at the Engine (groupStart)
lookAtTrain("You (groupStart)", 0);

// My friend is standing at Carriage 2 (groupEnd)
lookAtTrain("Friend (groupEnd)", 1);


// 2. The Action
console.log(`\n${c.bright}${c.red}2. ACTION: Your friend unhooks Carriage 2 from Carriage 3!${c.reset}`);
console.log(`(Friend does: Carriage2.hookConnectedTo = "Nothing")`);

train[1].hookConnectedTo = "Nothing"; // The physical unhooking


// 3. The Result
console.log(`\n${c.bright}3. What do YOU see now?${c.reset}`);
console.log(`You are still standing at the Engine.`);
console.log(`You look back... Engine is connected to Carriage 2.`);
console.log(`But Carriage 2 is connected to... NOTHING.`);

lookAtTrain("You (groupStart)", 0);

console.log(`\n${c.cyan}Conclusion:${c.reset}`);
console.log(`You didn't move. The Engine didn't change.`);
console.log(`But because the carriage BEHIND you got unhooked, your whole train got shorter.`);
