// 1. VARIABLES (10 pts)
const birthYear = 2003;
let age = 22;

const calculateAge = birthYear => 2030 - birthYear;

console.log(`In the year 2030, you will be ${calculateAge(birthYear)} years old!`);

// birthYear = 2000; --> ERROR: Assigment to constant variable. Why? Because const means the reference is immutatle (i.e., you cannot change what the variable references to.)

// 2. DATA TYPES (10 pts)
const name = 'Miguel'; // string
const favoriteNumber = 7; // number
const sixFoot = true; // boolean
const random = null; // null
const whatever = undefined; // undefined

console.log(typeof name);
console.log(typeof favoriteNumber);
console.log(typeof sixFoot);
console.log(typeof random);
console.log(typeof whatever);

/* typeof null return object which is a long known javascript bug. It should return null because null is not an object, it's a primitive value. The reason it's not updated is because it could break existing codebases. 
*/


