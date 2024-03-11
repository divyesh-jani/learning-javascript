/* this keyword bindings order of precedence
    1. New Binding
    2. Explicit Binding
    3. Implicit Binding
    4. Default Global Binding
*/

/* New Binding */
function language(name) {
    this.name = name;
}
const l1 = new language('JavaScipt');
const l2 = new language('English');
console.log(l1.name);                       // JavaScript
console.log(l2.name);                       // English

/* Implicit binding */
const student = {
    languageName: 'JavaScript',
    currentlyStudying: function() {
        console.log('I am currently studying ' + this.languageName );
    }
}
// Call with the context of object student
student.currentlyStudying();                // I am currently studying JavaScript

/* Explicit binding */
function currentlyStudying() {
    console.log('I am studying ' + this.languageName);  // I am studying JavaScript
}
currentlyStudying.call(student);
const newStudent = { languageName: 'Algebra' }
currentlyStudying.call(newStudent);         // I am studying Algebra

/* Default Global binding */
function whatDayIsToday() {
    console.log('Today is ' + this.day);
}
whatDayIsToday();                           // Today is undefined
// can be set using const such as:
// const day = 'the best day ever!';
// but we needed globalThis.day
// since I am using node locally
globalThis.day = 'the best day ever!';
whatDayIsToday();                           // Today is the best day ever!
