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

const strPrim = "foo"; 
const strPrim2 = String(1);
const strPrim3 = String(true);
const strObj = new String(strPrim);

console.log(typeof strPrim);
console.log(typeof strPrim2);
console.log(typeof strPrim3);
console.log(typeof strObj);

// Convert a string object into a string primitive
const s1 = "2 + 2";
const s2 = new String("2 + 2");
console.log(eval(s1));
console.log(eval(s2));

console.log(eval(s2.valueOf()));  // returns the number 4


// next chapter is: String coersion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion

