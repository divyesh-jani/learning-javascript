/*
You're trying to open a lock. The lock comes with a wheel which has the integers from 1 to N 
arranged in a circle in order around it (with integers 1 and N adjacent to one another).
The wheel is initially pointing at 1.

It takes 1 second to rotate the wheel by 1 unit to an adjacent integer in either direction,
and it takes no time to select an integer once the wheel is pointing at it.

The lock will open if you enter a certain code. The code consists of a sequence of M integers, the ith of which is C[i].
Determine the minimum number of seconds required to select all M of the code's integers in order.
*/

function getMinCodeEntryTime(N, M, C) {
    let totalTime = 0;
    let initialLockInteger = 1;
    for (let nextCode of C) {
        let oneWayDistance = Math.abs(initialLockInteger - nextCode);
        let shortestDistance = Math.min(oneWayDistance, (N - oneWayDistance));
        totalTime = totalTime + shortestDistance;
        initialLockInteger = nextCode;
    }
    return totalTime;
}

console.log(getMinCodeEntryTime(3, 3, [1, 2, 3]));      // 2

console.log(getMinCodeEntryTime(10, 4, [9, 4, 4, 8]));  // 11
