// ASSESSMENT 3: Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Process: RED!
// function takes in a number (greater than 2) and;
describe("fib", () => { 
  it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
  // expect statement will contain the function call with a jest matcher appended to the end
  // place test variables inside the it call back funtion
    expect(fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// FAIL!: "fib is not defined"
//  FAIL  ./code-challenges.test.js
//   fib
//   ✕ returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)

// ● fib › returns an array that length containing the numbers of the Fibonacci sequence.

//   ReferenceError: fib is not defined

// b) Create the function that makes the test pass.
// Process: GREEN!

// PSEUDOCODE:
// Input:2 arrays
// Output: 2 arrays with numbers greater than 2

// Given array outputs (Fibonacci numbers):
// Input: 6 numbers
// Output: [1, 1, 2, 3, 5, 8]

// Input: 10 numbers
// Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Create a function named "fib" that takes in a number (greater than 2)
// Returns an array that length containing the numbers of the Fibonacci sequence (***sequence follows the rule that each number is equal to the sum of the next two numbers***).

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// const fib = (number)
//   let number =  []
//     if(number.length.indexOf[0] + number.length.indexOf[1] === + 2) {
//       return `${number} is equal to the sum of the next two numbers`
//     }

  // for(let i = 0; <fib.length; i++) {
  //   if(fib[i] > 2===2) {
  //     return `${fib[i]} + is equal to the next two numbers`
  // } 
  // else {fib[i] !== 2
  //   return `${fibNum} is not equal to the sum of the next two numbers`
  // }
// }

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Process: RED!
// function takes in an object and;
describe("myObj", () => { 
  it("returns an array of the values sorted from least to greatest.", () => {
  // expect statement will contain the function call with a jest matcher appended to the end
  // place test variables inside the it call back funtion
    expect(myObj(studyMinutesWeek1 )).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(myObj(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// FAIL!: "obj is not defined" 
// FAIL  ./code-challenges.test.js
// obj
//   ✕ returns an array of the values sorted from least to greatest.

//     at Object.expect (code-challenges.test.js:23:5)

// ● obj › returns an array of the values sorted from least to greatest.

//   ReferenceError: obj is not defined

// b) Create the function that makes the test pass.

// Process: GREEN!

// PSEUDOCODE:
// Input:2 functions with property values
// Output: an array with values sorted from least to greatest

// Given outputs:
// Input: sunday: 90, monday: 30, tuesday: 20, wednesday: 15, thursday: 30, friday: 15, saturday: 60
// Output: [15, 15, 20, 30, 30, 60, 90]

// Input: sunday: 100, monday: 10, tuesday: 45, wednesday: 60, thursday: 20, friday: 15, saturday: 65
// Output: [10, 15, 20, 45, 60, 65, 100]

// Create a function named "myObj" that takes in an object
// Return an array of the values sorted from least to greatest

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

const myObj = {Object}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Process: RED!
// function takes in an array;
describe(accounting, () => { 
  it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
  // expect statement will contain the function call with a jest matcher appended to the end
  // place test variables inside the it call back funtion
    expect(accounting(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accounting(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accounting(accountTransactions3)).toEqual([])
  })
})
// // FAIL!: "accounting is not defined" 
// FAIL  ./code-challenges.test.js
//   ● Test suite failed to run

//   ReferenceError: accounting is not defined

// b) Create the function that makes the test pass.

// Process: GREEN!

// PSEUDOCODE:
// Input:2 functions with property values
// Output: an array of the accumulating sum. An empty array should return an empty array.

// Given outputs:
// Input: [100, -17, -23, -9]
// Output: [100, 83, 60, 51]

// Input: [250, -89, 100, -96]
// Output: [250, 161, 261, 165]

// Input: []
// Output: []

// Create a function named "accounting" takes in an array
// Return an array of the accumulating sum. An empty array should return an empty array.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

const accounting = ([]) => {

}


