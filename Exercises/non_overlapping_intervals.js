// Given an array of intervals, determine the minimum number of intervals to remove
// so that the remaining intervals become non-overlapping

function removeIntervals(intervals) {
    if (intervals.length < 2) return 0;
    intervals.sort((a, b) => a[0] - b[0]);
    let toRemove = 0;
    let lastInterval = intervals[0];
    for (let i = 1; i < intervals.length; i = i + 1) {
        if (intervals[i][0] < lastInterval[1]) {
            toRemove = toRemove + 1;
            lastInterval[1] = Math.min(lastInterval[1], intervals[i][1]);
        } else {
            lastInterval = intervals[i];
        }
    }
    return toRemove;
}

let intervals = [[1,2],[2,3],[3,4],[1,3]];
console.log(removeIntervals(intervals));    // 1

intervals = [[1,2],[1,2],[1,2]];
console.log(removeIntervals(intervals));    // 2

intervals = [[1,3],[2,3],[2,6],[5,8],[8,10],[8,11]];
console.log(removeIntervals(intervals));    // 3

intervals = [[1,2],[2,3]];
console.log(removeIntervals(intervals));    // 0
