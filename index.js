// EXAMPLE 1 - Check if an Array Index exists in JavaScript

const arr = ['bobby', 'hadz'];

if (arr[3] !== undefined) {
  console.log('The index exists in the array');
} else {
  // 👇️ this runs
  console.log('The index does NOT exist');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if an Array index exists using `includes()`

// const arr = ['bobby', 'hadz', 'com'];

// if (arr.includes('bobby')) {
//   // 👇️ this runs
//   console.log('The value is contained in the array');
// } else {
//   console.log('The value is NOT contained in the array');
// }

// console.log(arr.includes('bobby')); // 👉️ true
// console.log(arr.includes('another')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if an Array Index exists using the array's length

// const arr = ['bobby', 'hadz'];

// if (arr.length > 5) {
//   console.log('Index 5 exists in the array');
// } else {
//   // 👇️ this runs
//   console.log('Index 5 does NOT exist in the array');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if an Array Index exists using optional chaining

// const arr = ['bobby', 'hadz'];

// const firstIndex = arr?.[1];
// console.log(firstIndex); // 👉️ hadz

// if (firstIndex !== undefined) {
//   // 👉️ index 1 exists in the array
// }

// const fifthIndex = arr?.[5];
// console.log(fifthIndex); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if an Array Index exists using indexOf()

// const arr = ['bobby', 'hadz'];

// if (arr.indexOf('bobby') !== -1) {
//   // 👇️ this runs
//   console.log('The value is contained in the array');
// } else {
//   console.log('The value is NOT contained in the array');
// }

// console.log(arr.indexOf('bobby')); // 👉️ 0
// console.log(arr.indexOf('another')); // 👉️ -1

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if an Array Index exists using hasOwnProperty()

// const arr = ['bobby', 'hadz', 'com'];

// if (arr.hasOwnProperty(1)) {
//   console.log(arr[1]); // 👉️ hadz
//   console.log('The index exists in the array');
// } else {
//   console.log('The specified index does NOT exist');
// }

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if an Index exists in a nested array using `try/catch`

// const arr = [
//   ['a', 'b'],
//   ['c', 'd'],
// ];

// try {
//   const value1 = arr[0][1];
//   console.log(value1); // 👉️ b

//   const value2 = arr[0][1][2][3];
//   console.log(value2); // ⛔️ error
// } catch (err) {
//   // 👇️ this runs
//   console.log('The index does NOT exist');
// }
