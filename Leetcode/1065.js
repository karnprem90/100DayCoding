/**
 * 1065. Index Pairs of a String
 * Learning TRIE from Basic to Advanced, then solving the problem
 */

// ═══════════════════════════════════════════════════════════════════════════
//                         TRIE - COMPLETE TUTORIAL
// ═══════════════════════════════════════════════════════════════════════════

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 1: WHAT IS A TRIE?                          ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   🔹 DEFINITION");
console.log("   ─────────────");
console.log("   Trie (pronounced 'try') = Tree for storing strings efficiently");
console.log("   Also called: Prefix Tree, Digital Tree");
console.log("");
console.log("   🔹 WHY USE A TRIE?");
console.log("   ──────────────────");
console.log("   • Fast prefix searching (autocomplete, spell check)");
console.log("   • Finding all words that start with 'app' → apple, application, app");
console.log("   • Time: O(m) where m = length of word (not dependent on dictionary size!)");
console.log("");
console.log("   🔹 VISUAL STRUCTURE");
console.log("   ───────────────────");
console.log("   Words: ['cat', 'car', 'card', 'care', 'dog']");
console.log("");
console.log("                    (root)");
console.log("                   /      \\");
console.log("                  c        d");
console.log("                  |        |");
console.log("                  a        o");
console.log("                 / \\       |");
console.log("                t   r      g*");
console.log("                *   |");
console.log("                   / \\");
console.log("                  d*  e*");
console.log("");
console.log("   * = end of word marker (isEnd = true)");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 2: TRIE NODE STRUCTURE                      ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Each node contains:");
console.log("");
console.log("   ┌─────────────────────────────────────────────┐");
console.log("   │  TrieNode {                                 │");
console.log("   │      children: {}   // Map of char → node   │");
console.log("   │      isEnd: false   // Is this end of word? │");
console.log("   │  }                                          │");
console.log("   └─────────────────────────────────────────────┘");
console.log("");
console.log("   Example: After inserting 'cat'");
console.log("");
console.log("   root.children = { 'c': node1 }");
console.log("   node1.children = { 'a': node2 }");
console.log("   node2.children = { 't': node3 }");
console.log("   node3.isEnd = true  ← marks 'cat' is a complete word");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 3: BASIC TRIE IMPLEMENTATION                ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");

// ═══════════════════════════════════════════════════════════════════════════
//                         TRIE IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════

class TrieNode {
    constructor() {
        this.children = {};  // char → TrieNode
        this.isEnd = false;  // marks end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    // INSERT a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            // If char doesn't exist, create new node
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            // Move to next node
            node = node.children[char];
        }
        // Mark end of word
        node.isEnd = true;
    }
    
    // SEARCH if exact word exists
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;  // Must be end of word
    }
    
    // Check if any word STARTS WITH prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;  // Prefix exists
    }
}

console.log("   CODE:");
console.log("   ─────");
console.log("   class TrieNode {");
console.log("       constructor() {");
console.log("           this.children = {};");
console.log("           this.isEnd = false;");
console.log("       }");
console.log("   }");
console.log("");
console.log("   class Trie {");
console.log("       constructor() {");
console.log("           this.root = new TrieNode();");
console.log("       }");
console.log("       insert(word) { ... }");
console.log("       search(word) { ... }");
console.log("       startsWith(prefix) { ... }");
console.log("   }");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 4: INSERT OPERATION WALKTHROUGH             ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Inserting 'cat' into empty Trie:");
console.log("");
console.log("   Step 1: char = 'c'");
console.log("   ┌──────┐");
console.log("   │ root │ → children['c'] doesn't exist → CREATE");
console.log("   └──────┘");
console.log("       ↓");
console.log("   ┌──────┐");
console.log("   │  c   │");
console.log("   └──────┘");
console.log("");
console.log("   Step 2: char = 'a'");
console.log("   ┌──────┐");
console.log("   │  c   │ → children['a'] doesn't exist → CREATE");
console.log("   └──────┘");
console.log("       ↓");
console.log("   ┌──────┐");
console.log("   │  a   │");
console.log("   └──────┘");
console.log("");
console.log("   Step 3: char = 't'");
console.log("   ┌──────┐");
console.log("   │  a   │ → children['t'] doesn't exist → CREATE");
console.log("   └──────┘");
console.log("       ↓");
console.log("   ┌──────┐");
console.log("   │ t *  │  ← isEnd = true (marks 'cat' is complete)");
console.log("   └──────┘");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 5: SEARCH OPERATION WALKTHROUGH             ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Trie contains: ['cat', 'car', 'card']");
console.log("");
console.log("   Search 'car': Follow c → a → r → isEnd? YES ✅ Found!");
console.log("   Search 'ca':  Follow c → a → isEnd? NO ❌ Not a complete word");
console.log("   Search 'dog': Follow d → NOT FOUND ❌");
console.log("");

// Demo
let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("card");

console.log("   DEMO OUTPUT:");
console.log("   ─────────────");
console.log("   trie.search('car')  →", trie.search('car'));
console.log("   trie.search('ca')   →", trie.search('ca'));
console.log("   trie.search('card') →", trie.search('card'));
console.log("   trie.startsWith('ca') →", trie.startsWith('ca'));
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 6: TIME & SPACE COMPLEXITY                  ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   ┌────────────────┬─────────────┬──────────────────────────┐");
console.log("   │ Operation      │ Time        │ Explanation              │");
console.log("   ├────────────────┼─────────────┼──────────────────────────┤");
console.log("   │ Insert         │ O(m)        │ m = word length          │");
console.log("   │ Search         │ O(m)        │ m = word length          │");
console.log("   │ StartsWith     │ O(m)        │ m = prefix length        │");
console.log("   └────────────────┴─────────────┴──────────────────────────┘");
console.log("");
console.log("   Space: O(n × m) where n = number of words, m = average length");
console.log("");
console.log("   Compare with Array/Set search:");
console.log("   • Array search: O(n × m) - check each word");
console.log("   • Trie search:  O(m)     - independent of dictionary size!");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 7: WHEN TO USE TRIE?                        ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   ✓ USE Trie when:");
console.log("   • Autocomplete suggestions");
console.log("   • Spell checker");
console.log("   • Finding words with common prefix");
console.log("   • Word search in a grid");
console.log("   • IP routing (longest prefix matching)");
console.log("   • Finding substrings in text (like this problem!)");
console.log("");
console.log("   ✗ DON'T use Trie when:");
console.log("   • Just need to check if ONE word exists (use Set)");
console.log("   • Memory is very limited");
console.log("   • Words have no common prefixes");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 8: SOLVING THE PROBLEM                      ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Problem: Find all [i, j] where text[i...j] is in words");
console.log("");
console.log("   Strategy:");
console.log("   1. Build Trie from words array");
console.log("   2. For each starting position i in text:");
console.log("      - Walk through Trie character by character");
console.log("      - When we hit isEnd = true, we found a word → record [i, j]");
console.log("      - Continue to find longer matches");
console.log("");

// ═══════════════════════════════════════════════════════════════════════════
//                         SOLUTION USING TRIE
// ═══════════════════════════════════════════════════════════════════════════

var indexPairs = function(text, words) {
    // Step 1: Build Trie
    let root = {};
    for (let word of words) {
        let node = root;
        for (let char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.isEnd = true;
    }
    
    // Step 2: Search text using Trie
    let result = [];
    for (let i = 0; i < text.length; i++) {
        let node = root;
        for (let j = i; j < text.length; j++) {
            let char = text[j];
            if (!node[char]) break;  // No match, stop
            node = node[char];
            if (node.isEnd) {
                result.push([i, j]);  // Found a word!
            }
        }
    }
    
    return result;
};

console.log("   SOLUTION CODE:");
console.log("   ───────────────");
console.log("   var indexPairs = function(text, words) {");
console.log("       // Build Trie");
console.log("       let root = {};");
console.log("       for (let word of words) {");
console.log("           let node = root;");
console.log("           for (let char of word) {");
console.log("               if (!node[char]) node[char] = {};");
console.log("               node = node[char];");
console.log("           }");
console.log("           node.isEnd = true;");
console.log("       }");
console.log("");
console.log("       // Search text");
console.log("       let result = [];");
console.log("       for (let i = 0; i < text.length; i++) {");
console.log("           let node = root;");
console.log("           for (let j = i; j < text.length; j++) {");
console.log("               if (!node[text[j]]) break;");
console.log("               node = node[text[j]];");
console.log("               if (node.isEnd) result.push([i, j]);");
console.log("           }");
console.log("       }");
console.log("       return result;");
console.log("   }");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║              PART 9: EXAMPLE WALKTHROUGH                      ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Input: text = 'ababa', words = ['aba', 'ab']");
console.log("");
console.log("   Step 1: Build Trie from words");
console.log("");
console.log("         (root)");
console.log("           |");
console.log("           a");
console.log("           |");
console.log("           b *  ← 'ab' ends here");
console.log("           |");
console.log("           a *  ← 'aba' ends here");
console.log("");
console.log("   Step 2: Search text 'ababa'");
console.log("");
console.log("   i=0: Start at 'a'");
console.log("        j=0: 'a' exists in Trie → continue");
console.log("        j=1: 'ab' exists, isEnd=true → FOUND [0,1]");
console.log("        j=2: 'aba' exists, isEnd=true → FOUND [0,2]");
console.log("        j=3: 'abab' NOT in Trie → stop");
console.log("");
console.log("   i=1: Start at 'b'");
console.log("        j=1: 'b' NOT in Trie (root has only 'a') → stop");
console.log("");
console.log("   i=2: Start at 'a'");
console.log("        j=2: 'a' exists → continue");
console.log("        j=3: 'ab' exists, isEnd=true → FOUND [2,3]");
console.log("        j=4: 'aba' exists, isEnd=true → FOUND [2,4]");
console.log("");
console.log("   i=3: Start at 'b' → NOT in Trie → stop");
console.log("   i=4: Start at 'a' → only 'a', no 'ab' after → stop");
console.log("");
console.log("   Result: [[0,1], [0,2], [2,3], [2,4]] ✅");
console.log("");

console.log("╔═══════════════════════════════════════════════════════════════╗");
console.log("║                      TEST RESULTS                             ║");
console.log("╚═══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("   Example 1:");
console.log("   Input: text = 'thestoryofleetcodeandme'");
console.log("          words = ['story','fleet','leetcode']");
console.log("   Output:", JSON.stringify(indexPairs("thestoryofleetcodeandme", ["story","fleet","leetcode"])));
console.log("   Expected: [[3,7],[9,13],[10,17]]");
console.log("");
console.log("   Example 2:");
console.log("   Input: text = 'ababa', words = ['aba','ab']");
console.log("   Output:", JSON.stringify(indexPairs("ababa", ["aba","ab"])));
console.log("   Expected: [[0,1],[0,2],[2,3],[2,4]]");
console.log("");