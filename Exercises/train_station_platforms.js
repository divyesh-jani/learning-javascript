// Given arrival and departure times of trains at a station, determine the minimum number of platforms needed

function findMaxPlatforms(arrivalTimes, departureTimes) {
    let platformsNeeded = 0;
    let arrivals = arrivalTimes.map((time) => {
        let [hour, mins] = time.split(':');
        let actualTime = (Number(hour) * 60) + Number(mins);
        return actualTime;
    }).sort((a, b) => a - b);
    let departures = departureTimes.map((time) => {
        let [hour, mins] = time.split(':');
        let actualTime = (Number(hour) * 60) + Number(mins);
        return actualTime;
    }).sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    while (i < arrivals.length && j < departures.length) {
        let temp = i;
        let trainsTogether = 0;
        while (arrivals[temp] < departures[j]) {
            trainsTogether = trainsTogether + 1;
            temp = temp + 1;
        }
        if (trainsTogether > platformsNeeded) platformsNeeded = trainsTogether;
        i = i + 1;
        j = j + 1;
    }
    return platformsNeeded;
}

let arrival = ['9:00', '9:40', '9:50', '11:00', '15:00', '18:00'];
let departure = ['9:10', '12:00', '11:20', '11:30', '19:00', '20:00'];
console.log(findMaxPlatforms(arrival, departure));      // 3

arrival = ['9:00', '9:40'];
departure = ['9:10', '12:00'];
console.log(findMaxPlatforms(arrival, departure));      // 1

arrival = ['1:00', '2:00', '3:30', '5:00', '6:00'];
departure = ['6:00', '6:00', '5:00', '6:00', '6:30'];
console.log(findMaxPlatforms(arrival, departure));      // 3

arrival = ['1:00', '2:00', '3:30', '5:00', '6:00', '7:00','7:10','7:20', '7:30'];
departure = ['6:00', '6:00', '5:00', '6:00', '6:30', '8:00', '8:00', '8:00', '7:45'];
console.log(findMaxPlatforms(arrival, departure));      // 4
