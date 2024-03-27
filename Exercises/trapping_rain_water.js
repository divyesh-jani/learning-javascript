/* Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it is able to trap after raining.
 */

function trappedWater(elevationArr) {
    let left = 1;
    let right = elevationArr.length - 2;
    let leftMax = elevationArr[0];
    let rightMax = elevationArr[elevationArr.length - 1];
    let accumulatedWater = 0;
    while (left <= right) {
        if (rightMax < leftMax) {
            accumulatedWater = accumulatedWater + Math.max(0, rightMax - elevationArr[right]);
            rightMax = Math.max(rightMax, elevationArr[right]);
            right = right - 1;
        } else {
            accumulatedWater = accumulatedWater + Math.max(0, leftMax - elevationArr[left]);
            leftMax = Math.max(leftMax, elevationArr[left]);
            left = left + 1;
        }
    }
    return accumulatedWater;
}

let elevationMap = [2, 0, 2];
console.log(trappedWater(elevationMap));        // 2

elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trappedWater(elevationMap));        // 6

elevationMap = [0, 1, 0, 0, 2, 3, 2];
console.log(trappedWater(elevationMap));        // 2

elevationMap = [2, 1, 0, 2, 2, 0, 2];
console.log(trappedWater(elevationMap));        // 5

elevationMap = [3, 0, 2, 0, 4];
console.log(trappedWater(elevationMap));        // 7
