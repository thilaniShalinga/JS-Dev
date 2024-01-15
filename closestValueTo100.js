/*Given two values, write JS program to find out which one is nearest to 100*/


const closestValueTo100 = (a, b) => (100-a) < (100- b) ? a : b;

console.log(closestValueTo100(1, 99));
console.log(closestValueTo100(51, 49));
console.log(closestValueTo100(50, 50));