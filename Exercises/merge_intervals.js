// Given a collection of intervals, merge the overlapping intervals

function mergeIntervals(intervalsArray) {
    if (intervalsArray.length < 2) return intervalsArray;
    intervalsArray.sort((a, b) => a[0] - b[0]);
    let mergedIntervals = [];
    for (let interval of intervalsArray) {
        if (!mergedIntervals.length || mergedIntervals[mergedIntervals.length - 1][1] < interval[0]) {
            mergedIntervals.push(interval);
        } else {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], interval[1]);
        }
    }
    return mergedIntervals;
};

const allIntervals = [[5,8], [7,9], [10,13], [1,5], [20,30], [13,14], [12,14]];
console.log(mergeIntervals(allIntervals));
// [ [1,9], [10,14], [20,30] ];
