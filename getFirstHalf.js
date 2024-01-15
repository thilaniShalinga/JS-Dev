/* Write a JS program to extract the first half of a string of even length.*/


const getFirstHalf = (str) => str.slice(0, str.length/2);

console.log(getFirstHalf('temp'));
console.log(getFirstHalf('temple'));
console.log(getFirstHalf('temples'));