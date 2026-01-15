var repeatedStringMatch = function(a, b) {
      let string = '';
        while (string.length < b.length + a.length) {
            string += a;
            if (string.includes(b)) {
                return string.length / a.length;
            }
            if (string.length > b.length + a.length) {
                return -1;
            }
        }
        return -1;
};
console.log(repeatedStringMatch('abc', 'cabcabca'))
