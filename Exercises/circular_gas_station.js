// Circular gas station, figure out where to start to end up at same gas station without running out of gas

function gasStationPath(gasArray, costArray) {
    let availableGas = 0;
    let previousAvailableGas = 0;
    let startStation = 0;
    for (let i = 0; i < gasArray.length; i = i + 1) {
        availableGas = availableGas + gasArray[i] - costArray[i];
        if (availableGas < 0) {
            previousAvailableGas = previousAvailableGas + availableGas;
            availableGas = 0;
            startStation = i + 1;
        }
    }
    if (startStation === gasArray.length || (availableGas + previousAvailableGas) < 0) {
        return -1;
    }
    return startStation;
};

let gasStations = [1,2,3,4,5];
let costAtStations = [3,4,5,1,2];
console.log(gasStationPath(gasStations, costAtStations));   // 3

let availableGas = [1, 5, 3, 3, 5, 3, 1, 3, 4, 5];
let costToGoToNext = [5, 2, 2, 8, 2, 4, 2, 5, 1, 2];
console.log(gasStationPath(availableGas, costToGoToNext));  // 8
