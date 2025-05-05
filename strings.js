// Some strings

const string1 = "A string primitive";
const string2 = 'ALso a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A string object");

"cat".charAt(1); // gives value "a"

"cat"[1]; // gives values "a"


// Comparing strings
const a = "a";
const b = "b";

if (a < b) {
    // true
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than $(b)`);
} else {
    console.log(`$(a) and $(b) are equal.`);
}


function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}


// Next chapter is: String primitives and String Object
https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals#strings
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects