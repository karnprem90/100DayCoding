var isStrobogrammatic = function(num) {
  if (num.length === 1) {
    
  }
  if (num.includes('6') && num.includes('9')) {
        let count6 = 0;
        let count9 = 0;
        for (let i = 0; i < num.length; i++) {
            if (num[i] === '6') {
                count6++;
            } else if (num[i] === '9') {
                count9++;
            }
        }
        if (count6 !== count9) {
            return false;
        }
        if (count6 === count9 && (count6 + count9) === num.length) {
            return true;
        }
  }
  let startNum = num[0]
  for (let i = 1; i < num.length; i++) {
    if (startNum !== num[i]) {
      return false;
    }
  }
  return true;  
};

console.log(isStrobogrammatic('69'))
console.log(isStrobogrammatic('88'))
console.log(isStrobogrammatic('96'))