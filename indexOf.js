const str = "Hello, World!";

console.log(str.indexOf("Hello"));// Output: 0 (index where "Hello" starts)
console.log(str.indexOf("World"));// Output: 7 (index where "World" starts)
console.log(str.indexOf("JavaScript")); // Output: -1 (not found)

//using fromIndex
console.log(str.indexOf("o", 5)); // Output: 7 (index where the second "o" starts) 





/*The indexOf() method is a built-in JavaScript function that is used to find the 
index of the first occurrence of a specified value (substring or character) within a string. If the specified value is not found, it returns -1.

Here is the basic syntax of the indexOf() method:

javascript

Copy code
string.indexOf(searchValue[, fromIndex])


string: The string in which to search for the specified value.
searchValue: The value to search for within the string.
fromIndex (optional): The index at which to start the search. If omitted, the search starts from the beginning of the string.
The indexOf() method returns the index of the first occurrence of the searchValue in the string. If the searchValue is not found, it returns -1.*/