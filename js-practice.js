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

// 3. ARRAYS (15 pts)

let favoriteFoods = ['pizza', 'burrito', 'chickenSalad', 'lasagna', 'steak'];
favoriteFoods.push('fries');
favoriteFoods.shift();
const index = favoriteFoods.findIndex(n => n === 'steak'); 
console.log(index);
console.log(favoriteFoods);
favoriteFoods = favoriteFoods.map(food => food.toUpperCase()); // map() method returns a new array.

console.log(favoriteFoods);


// 4. OBJECTS (15 pts)

let student = {
    name: 'Miguel',
    age: 22,
    courses: ['CISC 3140', 'CISC 1001', 'CISC 1005', 'Tennis', 'PSYC 1001'],
    isErolled: true,
    GPA: 3.3
}

const [, secondCourse] = student.courses;  // Array Destructuring, A pretty nifty ES6+ feature.

const {name: firstName, age : studentAge} = student; // Object Destructuring
console.log(firstName, studentAge);


// 5. FUNCTIONS (20 pts)

function sum(num1, num2) {
    return num1 + num2;
}

const sum2 = (num1, num2) => num1 + num2;

let arr = [2, 3, 4, 10, 0, -1];

const largestNum = array => Math.max(...array);  // spread operator is amazing for things like this!

console.log(`largest number is this array is: ${largestNum(arr)}`);

const reverseString = string =>  Array.from(string).reverse().join('');

console.log(`the reverse of Miguel is: ${reverseString('Miguel')}`);


// BONUS: Browser vs Node.js (10 pts)

