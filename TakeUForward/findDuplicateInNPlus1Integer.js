function findDuplicateInNPlus1Integer(num) {
    let slow = num[0];
    let fast = num[0];
    do {
        slow = num[slow];
        fast = num[num[fast]];
    } while (slow !== fast);

    slow = num[0];
    while (slow !== fast) {
        slow = num[slow];
        fast = num[fast];
    }
    return slow;
}

console.log(findDuplicateInNPlus1Integer([3,1,3,4,2]));