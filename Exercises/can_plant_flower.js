// Given a one dimentional pot represented by an array, determine if there is space to plant a flower
// 1 denotes a flower is planted there, 0 denotes open space
// Flowers cannot be planted next to another flower, they need a seperation of at least 1 space between them
// eg: [1, 0, 0] means a flower is planted in first available spot, and the two remaining spots are empty

function canPlantFlower(potSpaces) {
    if (potSpaces.length === 0) return false;
    let lastOccupiedSpot = -1;
    for (let i = 0; i < potSpaces.length; i = i + 1) {
        if (potSpaces[i] === 1) {
            if (lastOccupiedSpot === -1) {
                // before first: 1-0, 2-1, 3-1, 4-2, 5-2, 6-3 (available-can pot)
                if (i >= 2) return true;
            } else {
                // between first and last: 1-0, 2-0, 3-1, 4-1, 5-2, 6-2, 7-3
                let openSlots = i - lastOccupiedSpot - 1;
                if (openSlots >= 3) return true;
            }
            lastOccupiedSpot = i;
        }
    }
    if (lastOccupiedSpot === -1) {
        return true;
    } else {
        // after last: 1-0, 2-1, 3-1, 4-2, 5-2, 6-3
        let openSlots = potSpaces.length - 1 - lastOccupiedSpot;
        if (openSlots >= 2) return true;
    }
    return false;
}

console.log(canPlantFlower([0]));                             // true
console.log(canPlantFlower([0, 0]));                          // true
console.log(canPlantFlower([0, 1, 0]));                       // false
console.log(canPlantFlower([1, 0, 0]));                       // true
console.log(canPlantFlower([0, 1, 0, 1, 0, 1, 0]));           // false
console.log('----- For readability in console -----');
console.log(canPlantFlower([1, 0, 1, 0, 0, 1, 0, 0]));        // true
console.log(canPlantFlower([1, 0, 0, 1, 0, 0, 1, 0, 0, 1]));  // false
console.log(canPlantFlower([0, 0, 1, 0, 1, 0, 1, 0, 0, 1]));  // true
console.log(canPlantFlower([0, 0, 0, 0, 1, 0, 1, 0, 0, 0]));  // true
console.log(canPlantFlower([1, 0, 1, 0, 1, 0, 0]));           // true

function getAvailableSpaces(potSpaces) {
    let lastOccupiedSpot = -1;
    let availableSpaces = 0;
    let maintainSpace = 2;
    for (let i = 0; i < potSpaces.length; i = i + 1) {
        if (potSpaces[i] === 1) {
            let openSlots;
            if (lastOccupiedSpot === -1) {
                // before first: 1-0, 2-1, 3-1, 4-2, 5-2, 6-3 (available-can pot)
                openSlots = i;
                availableSpaces = availableSpaces + Math.floor(openSlots / maintainSpace);
            } else {
                // between first and last: 1-0, 2-0, 3-1, 4-1, 5-2, 6-2, 7-3
                openSlots = i - lastOccupiedSpot - 1;
                availableSpaces = availableSpaces + Math.floor((openSlots - 1) / maintainSpace);
            }
            lastOccupiedSpot = i;
        }
    }
    if (lastOccupiedSpot === -1) {
        // no elem: 1-1, 2-1, 3-2, 4-2, 5-3, 6-3, 7-4
        availableSpaces = Math.ceil(potSpaces.length / maintainSpace);
    } else {
        // after last: 1-0, 2-1, 3-1, 4-2, 5-2, 6-3
        let openSlots = potSpaces.length - 1 - lastOccupiedSpot;
        availableSpaces = availableSpaces + Math.floor(openSlots / maintainSpace);
    }
    return availableSpaces;
}

console.log(getAvailableSpaces([0]));                             // 1
console.log(getAvailableSpaces([0, 0]));                          // 1
console.log(getAvailableSpaces([0, 1, 0]));                       // 0
console.log(getAvailableSpaces([1, 0, 0]));                       // 1
console.log(getAvailableSpaces([0, 1, 0, 1, 0, 1, 0]));           // 0
console.log(getAvailableSpaces([1, 0, 1, 0, 0, 1, 0, 0]));        // 1
console.log(getAvailableSpaces([1, 0, 0, 1, 0, 0, 1, 0, 0, 1]));  // 0
console.log('----- For readability in console -----');
console.log(getAvailableSpaces([0, 0, 1, 0, 1, 0, 1, 0, 0, 1]));  // 1
console.log(getAvailableSpaces([0, 0, 0, 0, 1, 0, 1, 0, 0, 1]));  // 2
console.log(getAvailableSpaces([0, 0, 0, 0, 1, 0, 1, 0, 0, 0]));  // 3
console.log(getAvailableSpaces([1, 0, 0, 0, 1, 0, 0, 0, 0, 0]));  // 3
console.log(getAvailableSpaces([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));  // 5
console.log(getAvailableSpaces([0, 0, 0, 0, 0, 0, 0, 0, 0]));     // 5
