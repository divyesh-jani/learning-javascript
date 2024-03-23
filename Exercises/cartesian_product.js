// Given two finite non-empty sets, find the cartesian product of those sets

function generateCartesianProduct(setA, setB) {
    let cartesianProduct = [];
    for (const elementA of setA) {
        for (const elementB of setB) {
            cartesianProduct.push([elementA, elementB]);
        }
    }
    return cartesianProduct;
}

// Big-O : O(nm)

const A = [1, 2];
const B = [3, 4];
console.log(generateCartesianProduct(A, B));
// [ [1,3], [1,4], [2,3], [2,4] ]
const C = [3, 4, 5];
console.log(generateCartesianProduct(A, C));
// [ [1,3], [1,4], [1,5], [2,3], [2,4], [2,5] ]
