/* 
A cafeteria table consists of a row of N seats, numbered from 1 to N from left to right.
Social distancing guidelines require that every diner be seated such that K seats to their left
and K seats to their right (or all the remaining seats to that side if there are fewer than K) remain empty.

There are currently M diners seated at the table, the ith of whom is in seat S[i].
No two diners are sitting in the same seat, and the social distancing guidelines are satisfied.

Determine the maximum number of additional diners who can potentially sit at the table
without social distancing guidelines being violated for any new or existing diners,
assuming that the existing diners cannot move and that the additional diners will cooperate to maximize how many of them can sit down.

Example: For inputs
    N = 10
    K = 1
    M = 2
    S = [2, 6]

Expected Output = 3
*/

function getMaxAdditionalDinersCount(N, K, M, S) {
    if (!S.length) return 1 + Math.floor((N - 1)/(K + 1));
    S.sort((a, b) => a - b);
    let totalNewSeatingAvailable = 0;
    let initialPosition = 0;
    let remainingPlaces = 0;
    let maintainSpace = K + 1;
    for (let dinerSeat of S) {
        remainingPlaces = dinerSeat - initialPosition - 1;
        totalNewSeatingAvailable = totalNewSeatingAvailable + Math.floor(remainingPlaces / maintainSpace);
        initialPosition = dinerSeat + K;
    }
    remainingPlaces = N - S[M - 1];
    totalNewSeatingAvailable = totalNewSeatingAvailable + Math.floor(remainingPlaces / maintainSpace);

    return totalNewSeatingAvailable;
}

console.log(getMaxAdditionalDinersCount(10, 1, 2, [2, 6]));
// 3

console.log(getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]));
// 1

console.log(getMaxAdditionalDinersCount(10, 2, 0, []));
// 4

console.log(getMaxAdditionalDinersCount(10, 1, 0, []));
// 5

console.log(getMaxAdditionalDinersCount(1, 5, 0, []));
// 1

console.log(getMaxAdditionalDinersCount(0, 2, 0, []));
// 0
