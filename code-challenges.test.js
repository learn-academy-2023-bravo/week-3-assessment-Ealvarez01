// ASSESSMENT 3: Coding Practical Questions with Jest

// const { number } = require("yargs")

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
  // expect statement will contain the function call to call the given functions and;
  // place test variable outputs inside the .toEqual() matcher parameter to compare the given outputs
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
// Output: 2 arrays with each number is equal to the sum of the previous two numbers

// Given array outputs (Fibonacci numbers):
// Input: 6 numbers length
// Output: [1, 1, 2, 3, 5, 8]

// Input: 10 numbers length
// Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Create a function named "fib" that takes in a number in the parameter named "num". 
// Create an array named "fibArray" that takes the 2 indexes of 1 for each given array output (since index starts at zero you need to take index one to start at the second number value for the fibonacci sequence). 
// For the number values of the index to be greater than 2 and equal to the two previous numbers, create a for loop to let the index equal two index elements for each index number in the array.
// Set an fibArray index element minus 1 (to get the last previous element in the array).
// Set a fibArray index element minus 2 (to get the second to last previous element in the array).
// Use the math logic for the sum of two index elements added together to equal the next index and therefore that index will be equal to the sum of the previous two elements.
// Use the .slice() method to return each element value as a new array without changing the original array length.
// Return array containing the numbers of the Fibonacci sequence (***sequence follows the rule that each number is equal to the sum of the next two numbers*** -----> https://en.wikipedia.org/wiki/Fibonacci_sequence <-----).

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fib = (num) => {
  const fibArray = [1, 1]
  for (let i = 2; i <num; i++) {
    fibArray[i] = fibArray[i -1] + fibArray[i -2]  
  }
    return fibArray.slice()
}
console.log(fib(fibLength1)) //[1, 1, 2, 3, 5, 8]
console.log(fib(fibLength2)) //[1,  1,  2,  3,  5, 8, 13, 21, 34, 55]

// PASSED!
// PASS  ./code-challenges.test.js
// fib
//   ✓ returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.129 s, estimated 1 s


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Process: RED!

// function takes in an object and;
describe("myObj", () => { 
  it("returns an array of the values sorted from least to greatest.", () => {
  // expect statements will contain the function call to call the given functions and;
   // place test variable outputs inside the .toEqual() matcher parameter to compare the given outputs
    expect(myObj(studyMinutesWeek1 )).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(myObj(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// FAIL!: "myObj is not defined" 
// FAIL  ./code-challenges.test.js
// myObj
//   ✕ returns an array of the values sorted from least to greatest.

// ● myObj › returns an array of the values sorted from least to greatest.

// ReferenceError: myObj is not defined

// b) Create the function that makes the test pass.

// Process: GREEN!

// PSEUDOCODE:
// Input: 2 functions with object property values
// Output: Array with object values sorted from least to greatest

// Given outputs:
// Input: sunday: 90, monday: 30, tuesday: 20, wednesday: 15, thursday: 30, friday: 15, saturday: 60
// Output: [15, 15, 20, 30, 30, 60, 90]

// Input: sunday: 100, monday: 10, tuesday: 45, wednesday: 60, thursday: 20, friday: 15, saturday: 65
// Output: [10, 15, 20, 45, 60, 65, 100]

// Create a function named "myObj" that takes in an object from the given functions.
// Create a function named "values" to use the Object.values() static method to extract the object values (numbers) for each object.
// Use the .sort() method to sort the values together with a compare function of two values (a, b) to define the sort order in ascending order.
// Return an array of the values sorted from least to greatest.

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

const myObj = (object) => {
  const values = Object.values(object)
  return values.sort((a,b) => a-b)
}
console.log(myObj(studyMinutesWeek1)) //[15, 15, 20, 30,30, 60, 90]
console.log(myObj(studyMinutesWeek2)) // [10, 15,  20, 45, 60, 65, 100]

// PASSED!
// PASS  ./code-challenges.test.js
// myObj
//   ✓ returns an array of the values sorted from least to greatest. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.129 s, estimated 1 s


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Process: RED!

// function takes in an array and;
describe("accounting", () => { 
  it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    // expect statements will contain the function call to call the given functions and;
     // place test variable outputs inside the .toEqual() matcher parameter to compare the given outputs
    expect(accounting(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accounting(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accounting(accountTransactions3)).toEqual([])
  })
})
// // FAIL!: "accounting is not defined" 
//  FAIL  ./code-challenges.test.js
// accounting
//   ✕ returns an array of the accumulating sum. An empty array should return an empty array.

// ● accounting › returns an array of the accumulating sum. An empty array should return an empty array.

//   ReferenceError: accounting is not defined

// b) Create the function that makes the test pass.

// Process: GREEN!

// PSEUDOCODE:
// Input: 1 array
// Output: An array of the accumulating sum. An empty array should return an empty array.

// Given outputs:
// Input: [100, -17, -23, -9]
// Output: [100, 83, 60, 51]

// Input: [250, -89, 100, -96]
// Output: [250, 161, 261, 165]

// Input: []
// Output: []

// Create a function named "accounting" that takes in an array with a parameter named "arraySum".
// Create a variable named "sum" to let the sum equal zero index(starting point).
// Return an array of the accumulating sum by using high order function .map() method to iterate over each element in the array and keep the original array length.
// Use a anonymous function syntax to invoke the index of zero to accumulate each number and equal the given output by taking the zero index value and using math to take the sum of the next index value to equal a new sum(new index value) and it will use the math logic for each previous index sum in the array.
// An empty array should return an empty array.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

const accounting = (arraySum) => {
  let sum = 0
  return arraySum.map((value) => sum += value)
}
console.log(accounting(accountTransactions1)) //[100, 83, 60, 51]
console.log(accounting(accountTransactions2)) // [250, 161, 261, 165]
console.log(accounting(accountTransactions3)) //[]

// PASSED!
//  PASS  ./code-challenges.test.js
// accounting
//   ✓ returns an array of the accumulating sum. An empty array should return an empty array.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.168 s