// Iterate
function useForInArray(input) {
    for (i in input) {
        console.log("Index is " + i + ", Value is " + input[i]);
    }
}

useForInArray([1,2,3,4,5]);