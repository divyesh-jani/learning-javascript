// Given an array of days marked as 'W' for working and 'H' as holidays,
// determine the maximum number of consecutive vacation time that can be achieved
// by taking given 'PTO'
// Eg. days = [W, H, W, H, W, W, W], PTO = 1 => result = 3
// since maximum 3 consecutive days off can be had by taking PTO on days[2]

function maximizeVacation(days, pto) {
    let maxVacation = 0;
    for (let i = 0; i < days.length; i = i + 1) {
        let timeAvailable = pto;
        let j = i;
        let vacation = 0;
        while (j < days.length) {
            if (days[j] === 'W') {
                if (timeAvailable) {
                    vacation = vacation + 1;
                    timeAvailable = timeAvailable - 1;
                } else {
                    maxVacation = vacation > maxVacation ? vacation : maxVacation;
                    break;
                }
            } else {
                vacation = vacation + 1;
            }
            j = j + 1;
        }
    }
    return maxVacation;
}

console.log(maximizeVacation(['W', 'H', 'W', 'H', 'W', 'W', 'W'], 1));                  // 3
console.log(maximizeVacation(['W', 'H', 'W', 'H', 'W', 'W', 'W'], 2));                  // 4
console.log(maximizeVacation(['W', 'H', 'W', 'H', 'H', 'W', 'W', 'W', 'W', 'H'], 2));   // 5
console.log(maximizeVacation(['W', 'H', 'W', 'H', 'W', 'W', 'W'], 0));                  // 1
