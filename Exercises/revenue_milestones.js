// Find what day an organization hits certain revenue milestones, given its revenues each day

function getMilestoneDays(revenues, milestones) {
    let cumulativeRevenueDays = [];
    let cumulativeRevenue = 0;
    for (let i = 0; i < revenues.length; i = i + 1) {
        cumulativeRevenue = cumulativeRevenue + revenues[i];
        cumulativeRevenueDays[i] = cumulativeRevenue;
    }
    // we have array of cumulative revenue -> cumulativeRevenueDays (sorted as no negative revenue)
    let outputArray = [];
    for (let i = 0; i < milestones.length; i = i + 1) {
        let milestoneToFind = milestones[i];
        let revenueIndex = 0;
        let indexFound;
        while (revenueIndex < cumulativeRevenueDays.length) {
            if (cumulativeRevenueDays[revenueIndex] >= milestoneToFind) {
                outputArray.push(revenueIndex + 1);
                indexFound = true;
                break;
            }
            revenueIndex = revenueIndex + 1;
        }
        if (!indexFound) outputArray.push(-1);
    }
    return outputArray;
};

let revenuesOne = [100, 200, 300, 400, 500];
let milestonesOne = [300, 800, 1000, 1400];
console.log(getMilestoneDays(revenuesOne, milestonesOne));
// [ 2, 4, 4, 5 ]

let revenuesTwo = [700, 800, 600, 400, 600, 700];
let milestonesTwo = [3100, 2200, 800, 2100, 1000];
console.log(getMilestoneDays(revenuesTwo, milestonesTwo));
// [ 5, 4, 2, 3, 2 ]

let revenuesThree = [500, 300, 700, 500, 600, 400];
let milestonesThree = [3100, 800, 2100, 3000, 100, 4000];
console.log(getMilestoneDays(revenuesThree, milestonesThree));
// [ -1, 2, 5, 6, 1, -1 ]
