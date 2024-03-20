// Get second largest element in array

function getSecondLargest(arr) {
    let largestArr = Array(2);
    for (let item of arr) {
        if (!largestArr[1]) {
            largestArr[1] = item;
        } else {
            if (item > largestArr[1]) {
                largestArr[0] = largestArr[1];
                largestArr[1] = item;
            } else if (!largestArr[0] || item > largestArr[0]) {
                largestArr[0] = item;
            }
        }
    }
    return largestArr[0];
}

console.log('----- Second Largest -----');
console.log(getSecondLargest([5,10,2,51,25,1,50,51]));          // 51
console.log(getSecondLargest([5,10,20,500,100,25,1,50]));       // 100
console.log(getSecondLargest([1,10,25,12,25,5,50,4]));          // 25

// Get largest nth
function getNthLargest(arr, highest) {
    let x = 0;
    let swapped = false;
    while (x < arr.length) {
        for (let y = x + 1; y < arr.length; y = y + 1) {
            if (arr[x] < arr[y]) {
                [arr[x], arr[y]] = [arr[y], arr[x]];
                swapped = true;
            }
        }
        if (!swapped) {
            x = x + 1;
            if (x === highest) {
                break;
            }
        }
        swapped = false;
    }
    return arr[highest - 1] ? arr[highest - 1] : null;
}

console.log('----- Kth Largest -----');
console.log(getNthLargest([40, 50, 20, 70, 80, 90, 99, 500], 4));   // 80
console.log(getNthLargest([50, 50, 20, 70, 80, 90, 100, 500], 8));  // 20
console.log(getNthLargest([5,10,2,51,25,1,50,51], 3));              // 50
console.log(getNthLargest([5,10,50,500,500,25,1,50], 6));           // 10
console.log(getNthLargest([1,10,25,12,25,5,50,4], 2));              // 25
