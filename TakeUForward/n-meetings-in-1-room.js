function nMeetingsIn(N, start, end) {
    let meetings = [];
    for (let i = 0; i < N; i++) {
        meetings.push({ index: i + 1, start: start[i], end: end[i]});
    }
    let result = [];
    let lastTime = 0;
    meetings.sort((a, b) => {
        if (a.end === b.end) return a.index - b.index;
        return a.end - b.end;
    });
    for (let i = 0; i < meetings.length; i++) {
        const [index, start, end] = meetings[i];
        if (start > lastTime) {
            result.push(index);
            lastTime = end;
        }
    }
    return result;
}

console.log(nMeetingsIn);