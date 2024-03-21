// Given an array of days marked as 'W' for working and 'H' as holidays,
// determine the maximum number of consecutive vacation time that can be achieved
// by taking given 'PTO'
// Eg. days = [W, H, W, H, W, W, W], PTO = 1 => result = 3
// since maximum 3 consecutive days off can be had by taking PTO on days[2]

function maximizeVacation(days, pto) {
    let maxCount = 0;
    let i = 0;
    while (i < days.length) {
        let j = i;
        let timeAvailable = pto;
        let count = 0;
        let keepCounting = true;
        while (j < days.length && keepCounting) {
            if (days[j] === 'W') {
                if (timeAvailable > 0) {
                    timeAvailable = timeAvailable - 1;
                    count = count + 1;
                } else {
                    keepCounting = false;
                }
            } else {
                count = count + 1;
            }
            j = j + 1
        }
        if (count > maxCount) maxCount = count;
        i = i + 1;
    }
    return maxCount;
}

console.log(maximizeVacation(['W', 'H', 'W', 'H', 'W', 'W', 'W'], 1));                  // 3
console.log(maximizeVacation(['W', 'H', 'W', 'H', 'W', 'W', 'W'], 2));                  // 4
console.log(maximizeVacation(['W', 'H', 'W', 'H', 'H', 'W', 'W', 'W', 'W', 'H'], 2));   // 5
