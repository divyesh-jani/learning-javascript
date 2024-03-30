// Using Promises

let testPromise = new Promise((resolve, reject) => {
    let num = Math.random() * 100;
    num = parseInt(num);
    if (num % 2 === 0) {
        resolve({ message: 'Found an even number', value: num });
    } else {
        reject(['Found an odd number', num]);
    }
});

testPromise.then((result) => {
    console.log(result.message + ' : ' + result.value);
}).catch((result) => {
    console.log(result[0] + ' : ' + result[1]);
});

// Promise.all and Promise.race
let promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000);
    }, 1000);
});

let promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(500);
    }, 500);
});

let promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2000);
    }, 2000);
});

Promise.race([promiseA, promiseB, promiseC]).then((result) => console.log(result));     // 500
Promise.all([promiseA, promiseB, promiseC]).then((results) => console.log(results));    // [ 1000, 500, 2000 ]

// Chaining then
let promiseX = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userId: 1001, fName: 'Adam' });
    }, 1000);
});

promiseX.then((result) => {
    return result.userId * 2;
}).then((result) => {
    console.log(result);        // 2002
}).finally(() => {
    console.log('Finally will run, whether the promise was resolved or rejected.')
});

// Using Async Await to replace then chain
let promiseZ = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userId: 1001, fName: 'Adam' });
    }, 1000);
});

async function useAsyncAwait() {
    try {
        let response = await promiseZ;
        console.log(response);
        let finalResponse = await response.userId * 2;
        console.log(finalResponse);
    } catch (error) {
        console.log(error);
    }
}

useAsyncAwait();
// { userId: 1001, fName: 'Adam' }
// 2002
