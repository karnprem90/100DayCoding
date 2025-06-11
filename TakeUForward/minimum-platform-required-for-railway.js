function minimumPlatformRequired(arr, dep) {
    arr.sort((a, b) =>  a - b);
    dep.sort((a, b) => a - b);

    let ans = 1;
    let count = 1;
    let i = 1;
    let j = 0;
    while (i < arr.length && j < dep.length) {
        if (arr[i] <= dep[j]) {
            count++;
            i++;
        } else {
            count--;
            j++;
        }
        ans = Math.max(ans, count);
    }
    return ans;
}

const arr = [900, 945, 955, 1100, 1500, 1800];
const dep = [920, 1200, 1130, 1150, 1900, 2000];
console.log(minimumPlatformRequired(arr, dep));