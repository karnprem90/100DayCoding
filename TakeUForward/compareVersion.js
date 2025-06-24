var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    const maxLength = Math.max(v1.length, v2.length);
    if (v1.length > v2.length) {
        v2.push(...Array(v1.length - v2.length).fill(0));
    }
    if (v2.length > v1.length) {
        v1.push(...Array(v2.length - v1.length).fill(0));
    }

    for (let i = 0; i < maxLength; i++) {
        if (v1[i] < v2[i]) return -1;
        if (v1[i] > v2[i]) return 1;
    }
    return 0;
};


console.log(compareVersion('1.0.1', '1'));