// Given non-overlapping intervals, insert a new interval and merge if necessary

function insertInterval(intervals, newInterval) {
    if (!intervals || !intervals.length) return [newInterval];
    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval);
        return intervals;
    }
    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        intervals.push(newInterval);
        return intervals;
    }
    let mergedIntervals = [];
    let merged = false;
    for (let i = 0; i < intervals.length; i = i + 1) {
        if (!merged) {
            if (intervals[i][1] >= newInterval[0]) {
                if (intervals[i][0] <= newInterval[1]) {
                    mergedIntervals.push([
                        Math.min(intervals[i][0], newInterval[0]),
                        Math.max(intervals[i][1], newInterval[1])
                    ]);
                } else {
                    mergedIntervals.push(newInterval);
                    mergedIntervals.push(intervals[i]);
                }
                merged = true;
            } else {
                mergedIntervals.push(intervals[i]);
            }
        } else {
            if (mergedIntervals[mergedIntervals.length - 1][1] >= intervals[i][0]) {
                mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
                    mergedIntervals[mergedIntervals.length - 1][1],
                    intervals[i][1]
                )
            } else {
                mergedIntervals.push(intervals[i]);
            }
        }
    }
    return mergedIntervals;
}

let intervals = [[1,3],[6,9]];
let toInsert = [2,5];
console.log(insertInterval(intervals, toInsert));
// [ [ 1, 5 ], [ 6, 9 ] ]

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
toInsert = [4,8];
console.log(insertInterval(intervals, toInsert));
// [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]

intervals = [[3,5],[6,7]];
toInsert = [1,2];
console.log(insertInterval(intervals, toInsert));
// [ [ 1, 2 ], [ 3, 5 ], [ 6, 7 ] ]

intervals = [[3,5],[6,7]];
toInsert = [8,10];
console.log(insertInterval(intervals, toInsert));
// [ [ 3, 5 ], [ 6, 7 ], [ 8, 10 ] ]

intervals = [[1,2],[8,10]];
toInsert = [4,6];
console.log(insertInterval(intervals, toInsert));
// [ [ 1, 2 ], [ 4, 6 ], [ 8, 10 ] ]

intervals = [];
toInsert = [4,6];
console.log(insertInterval(intervals, toInsert));
// [ [ 4, 6 ] ]
