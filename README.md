# Project Euler 061 - Cyclical Figurate Numbers

Triangle, square, pentagonal, hexagonal, heptagonal, and octagonal numbers are all figurate (polygonal) numbers and are generated by the following formulae:

Triangle   P<sub>3,n</sub> = n(n+1)/2 generates 1, 3, 6, 10, 15, ...

Square     P<sub>4,n</sub> = n<sup>2</sup> generates 1, 4, 9, 16, 25, ...

Pentagonal P<sub>5,n</sub> = n(3n-1)/2 generates 1, 5, 12, 22, 35, ...

Hexagonal  P<sub>6,n</sub> = n(2n-1) generates 1, 6, 15, 28, 45, ...

Heptagonal P<sub>7,n</sub> = n(5n-3)/2 generates 1, 7, 18, 34, 55, ...

Octagonal  P<sub>8,n</sub> = n(3n-2) generates 1, 8, 21, 40, 65, ...

The ordered set of three 4-digit numbers: 8128, 2882, 8281, has three interesting properties.

1. The set is cyclic, in that the last two digits of each number is the first two digits of the next number (including the last number with the first).
2. Each polygonal type: triangle (P<sub>3,127</sub> = 8128), square (P<sub>4,91</sub> = 8281), and pentagonal (P<sub>5,44</sub> = 2882), is represented by a different number in the set.
3. This is the only set of 4-digit numbers with this property.

Find the sum of the only ordered set of n cyclic 4-digit numbers for which each of the polygonal type: triangle, square, pentagonal, [hexagonal, heptagonal, and octagonal], is represented by a different number in the set.

Information at [Project Euler 061](https://projecteuler.net/problem=61)

## UX

**Getting Started**

Enter a whole number between 3 and 6 (without leading zeros) and select the Submit Button.  You will see the sum of the numbers in ordered sets of n cyclic 4-digit numbers for which each of the P<sub>3</sub> to P<sub>n+2</sub> polygonal types, is represented by a different number in the set.  For example, if you entered 3 then selected the Submit Button, you would expect the sum to be 19291.  If you have made an invalid input, you will get an error message.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect the function `cyclicalFigurateNums(3)` to return a number.

As a user, I expect the function `cyclicalFigurateNums(3)` to return 19291.

As a user, I expect the function `cyclicalFigurateNums(4)` to return 28684.

As a user, I expect the function `cyclicalFigurateNums(5)` to return 76255.

As a user, I expect the function `cyclicalFigurateNums(6)` to return 28684.

User Stories on function `cyclicalFigurateNums(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 061](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-61-cyclical-figurate-numbers)

**Information Architecture**

The function `cyclicalFigurateNums(n)` returns a number, where `n` is a number between 3 and 6.

