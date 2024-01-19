// Iterate
function useForInArray(input) {
    for (i in input) {
        console.log("Index is " + i + ", Value is " + input[i]);
    }
}

useForInArray([1,2,3,4,5]);


// Arrays can be used as object (keys can be aplhanumeric)
let objectLikeArray = [];
objectLikeArray[5.6] = 20;
objectLikeArray[1] = 10;
objectLikeArray['a'] = 50;
console.log(objectLikeArray); // [ undefined, 10, '5.6': 20, a: 50 ]

let allValues = [];
for (let i = 0; i < objectLikeArray.length; i = i + 1) {
    allValues.push(objectLikeArray[i]);
}
console.log(allValues); // [ undefined, 10 ]

let keys = Object.keys(objectLikeArray);
console.log(keys); // [ '1', '5.6', 'a' ]

let keyValues = [];
for (let i = 0; i < keys.length; i = i + 1) {
    keyValues.push(objectLikeArray[keys[i]]);
}
console.log(keyValues); // [ 10, 20, 50 ]