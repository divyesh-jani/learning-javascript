// Check if anyone can finish all courses given their prerequisites
// input n is number of courses, prerequisites is an array of course dependencies
// [2, 5] => course 5 is a prerequisite for course 2
// Return a boolean to show whether anyone can finish all courses given prerequisites

function canTakeAllCourses(numberOfCourses, prerequisiteArray) {
    let prerequisiteMap = {};
    for (let preReq of prerequisiteArray) {
        if (!prerequisiteMap[preReq[0]]) {
            prerequisiteMap[preReq[0]] = [preReq[1]];
        } else {
            prerequisiteMap[preReq[0]].push(preReq[1]);
        }
    }

    let visitedCourses = new Set();
    function _isFreeOfCyclicDependency(course) {
        if (visitedCourses.has(course)) return false;
        if (!prerequisiteMap[course]) return true;
        visitedCourses.add(course);
        for (let nextCourse of prerequisiteMap[course]) {
            if (!_isFreeOfCyclicDependency(nextCourse)) {
                return false;
            }
        }
        visitedCourses.delete(course);
        prerequisiteMap[course] = [];
        return true;
    }
    for (let course in prerequisiteMap) {
        if (!_isFreeOfCyclicDependency(course)) {
            return false;
        }
    }
    return true;
}

let a = 2;
let pre = [[1, 0]];
console.log(canTakeAllCourses(a, pre));                 // true

let b = 2;
let preReq = [[1,0],[0,1]];
console.log(canTakeAllCourses(b, preReq));              // false

let c = 6;
let prerequisites = [[0,1],[3,0],[1,3],[2,1],[4,1],[4,2],[5,3],[5,4]];
console.log(canTakeAllCourses(c, prerequisites));       // false
