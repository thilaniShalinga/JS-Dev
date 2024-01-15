const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('Offers'));


/*
The indexOf() method is a built-in JavaScript function that is used to find the index of the first occurrence of a 
specified value (substring or character) within a string. If the specified value is not found, it returns -1.

Certainly! Let's break down the code:

Function Definition:

The code defines an arrow function called addNew.
This function takes a single parameter str, which is expected to be a string.
Function Body:

The body of the arrow function consists of a single expression.
Conditional Operator (? :):

The expression uses a conditional (ternary) operator (? :) to check if the string str starts with the substring 'New!'.
If str starts with 'New!', the original string (str) is returned unchanged.
If str does not start with 'New!', a new string is constructed by concatenating 'New! ' with the original string (str).
Example Usage:

The console.log statement demonstrates the usage of the addNew function with the argument 'New! Offers'.
In this example, 'New! Offers' does start with 'New!', so the original string is returned unchanged.
Let's analyze the conditional expression part in more detail:

str.indexOf('New!') === 0: This checks whether the index of the substring 'New!' in the string str is equal to 0. If it is, that means 'New!' is at the beginning of the string.

The expression after ? is the value returned if the condition is true (str in this case).

The expression after : is the value returned if the condition is false (New! ${str} in this case).*/