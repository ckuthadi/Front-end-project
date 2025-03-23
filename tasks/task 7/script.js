// Arithmetic Operations
let x = 5;
let y = 6;

let add = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;
let exp = x ** y;

console.log("Addition:", add); // 5 + 6 = 11
console.log("Subtraction:", sub); // 5 - 6 = -1
console.log("Multiplication:", mul); // 5 * 6 = 30
console.log("Division:", div); // 5 / 6 = 0.8333...
console.log("Exponentiation:", exp); // 5 ** 6 = 15625

// Assignment Operations
let b = 0;
b += x; // b = b + x
console.log("b += x:", b); // 0 + 5 = 5

let w = 0;
w -= y; // w = w - y
console.log("w -= y:", w); // 0 - 6 = -6

x *= y; // x = x * y
console.log("x *= y:", x); // 5 * 6 = 30

x /= y; // x = x / y
console.log("x /= y:", x); // 30 / 6 = 5

x **= y; // x = x ** y
console.log("x **= y:", x); // 5 ** 6 = 15625
