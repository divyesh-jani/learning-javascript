/*
Imagine you work in a robotic automation factory, and your objective is to write a function
for one of its robotic arms that will dispatch the packages to the correct stack
according to their volume and mass.

Sort the packages using the following criteria:
- A package is bulky if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
- A package is heavy when its mass is greater or equal to 20 kg.

Dispatch the packages in the following stacks:
- STANDARD: standard packages (those that are not bulky or heavy) can be handled normally.
- SPECIAL: packages that are either heavy or bulky can't be handled automatically.
- REJECTED: packages that are both heavy and bulky are rejected.

Implement the function sort(width, height, length, mass) - units are centimeters for the dimensions and kilogram for the mass.
This function must return a string: the name of the stack where the package should go.
*/

const bulkyVolume = 1000000;
const bulkyLength = 150;
const heavyMass = 20;
const stacks = {
    standard: 'STANDARD',
    special: 'SPECIAL',
    rejected: 'REJECTED'
};

// Assumptions: width, height, and length will be positive numbers, in cm
// mass will be a positive number, in kg
function sort(width, height, length, mass) {
    let isBulky = isPackageBulky(width, height, length);
    let isHeavy = isPackageHeavy(mass);
    if (isBulky && isHeavy) return stacks.rejected;
    if (isBulky || isHeavy) return stacks.special;
    return stacks.standard;
}

function isPackageBulky(width, height, length) {
    let volume = width * height * length;
    return volume >= bulkyVolume || width >= bulkyLength || height >= bulkyLength || length >= bulkyLength;
}

function isPackageHeavy(mass) {
    return mass >= heavyMass;
}

// Testing
const testCases = [
    [15, 20, 30, 10, stacks.standard],
    [40, 149.999, 149.99, 19.99, stacks.standard],
    [15, 20.0, 25, 20.0, stacks.special],
    [25, 200, 250, 0.5, stacks.special],
    [149, 149, 149, 0.5, stacks.special],
    [20, 150, 100, 20, stacks.rejected],
    [25, 20, 250, 20.01, stacks.rejected],
    [149, 100, 149, 20.0, stacks.rejected],
]

testCases.forEach((package) => {
    if (sort(package[0], package[1], package[2], package[3]) === package[4]) {
        console.log('Passed');
    } else {
        console.log('TEST FAILED: ' + package);
    }
});
