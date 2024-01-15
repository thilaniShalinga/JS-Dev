/*Write a JS program to check a given string contains 2 to 4
occurances of a specified character.*/

const countChars = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const countChars2To4 = (str, char) =>
     countChars(str, char) >= 2 && countChars(str, char) <= 4;


console.log(countChars2To4('o', 'o'));
console.log(countChars2To4('ooo', 'o'));
console.log(countChars2To4('oo', 'o'));
console.log(countChars2To4('oooo', 'o'));

