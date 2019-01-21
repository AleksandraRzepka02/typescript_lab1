//boolean
let flag : boolean = true;
console.log("Values assined to flag is: " + flag);

//decimal
let decimal: number = 6;
console.log("Values assigned to flag are: " + decimal);

//hex
let hex: number = 0xf00d;
console.log("Values assigned to flag are: " + hex);

//binary 
let binary: number = 0b1010;
console.log("Values assigned to flag are: " + binary);

//octal
let octal: number = 0o744;
console.log("Values assigned to flag are: " + octal);

//string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
/*let sentence: string = `Hello, my name is ${ fullName };
I'll be ${ age + 1 } years old next month.`;

//also can do 
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";*/

//array
//let list: number[] = [1, 2, 3];

//array type with elements
//let list: Array<number> = [1, 2, 3];

//tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

