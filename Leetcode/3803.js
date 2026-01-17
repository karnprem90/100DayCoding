/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    let set = new Set();
    let residue = 0;
    for (let i = 0; i < s.length; i++) {
       set.add(s[i]);
       if (set.size === (i + 1) % 3) {
           residue++;
       }
    }
    return residue;
};

console.log(residuePrefixes('bbbb'));