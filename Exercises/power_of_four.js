// Given an integer num, determine if num is a power of 4

function isPowerofFour(num) {
    if (num === 1) return true;
    if (num <= 0) return false;
    while (num > 1) {
        if (num % 4 !== 0) {
            return false;
        }
        num = num / 4;
    }
    return true;
}

console.log([0,1,2,4,6,8,15,16,20,27,30,32,60,64,100,125,128,250,256,512,1024,2048,4096].map(e => isPowerofFour(e)));
// [f, t, f, t, f, f, f, t, f, f, f, f, f, t, f, f, f, f, t, f, t, f, t]
