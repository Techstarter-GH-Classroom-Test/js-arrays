// exercise1.js
function reverseArray(numbers) {
    numbers.reverse(); // -> reverse array order
    console.log(numbers); // [5, 4, 3, 2, 1]
  
    numbers.reverse();
    console.log(numbers); // [1, 2, 3, 4, 5]
}
  
module.exports = reverseArray;
  