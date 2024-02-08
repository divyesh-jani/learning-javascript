// Classic tower of hanoi, move n plates from tower 1 to tower 3
// A plate cannot be placed on top of a smaller plate
// There are 3 towers available to complete moves

function towerOfHanoi(n, sourceTower = 'A',  destinationTower = 'C',  extraTower = 'B') {
    if (n === 0) return;
    towerOfHanoi(n - 1, sourceTower, extraTower, destinationTower); // move all but one plate to extra tower
    console.log("Move plate " + n + " from tower " + sourceTower + " to tower " + destinationTower);
    towerOfHanoi(n - 1, extraTower, destinationTower, sourceTower);
}

towerOfHanoi(2);
towerOfHanoi(3);
towerOfHanoi(5);
towerOfHanoi(3, 'S', 'D', 'E');
towerOfHanoi(4, 'S', 'D', 'E');
towerOfHanoi(6, 'S', 'D', 'E');
