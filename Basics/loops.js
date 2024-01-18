function useWhile(input) {
    while (input <= 10) {
        console.log(input);
        input = input + 1;
    }
}

useWhile(1);

function useDoWhile(input) {
    // Always executed at least once
    do {
        console.log(input);
        input = input + 1;
    } while (input <= 10);
}

useDoWhile(1);

function useFor(input) {
    for (let i = input; i <= 10; i = i + 1) {
        console.log(i);
    }
}

useFor(1);

function useForInArray(input) {
    for (i in input) {
        console.log("Index is " + i + ", Value is " + input[i]);
    }
}

useForInArray([1,2,3,4,5]);

function useForInObject(input) {
    for (i in input) {
        console.log("Key is " + i + ", Value is " + input[i])
    }
}

useForInObject({a: 1, b: 2, c: 3});