console.log(hoisted());     // Hoisted function.
console.log(unhoisted());   // Undefined

var unhoisted = function(){
    return "Unhoisted function."
}

function hoisted() {
    return "Hoisted function."
}

console.log(hoisted());     // Hoisted function.
console.log(unhoisted());   // Unhoisted function.