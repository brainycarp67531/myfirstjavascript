const string = "The revolution will not be televised.";
console.log(string);

// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

const badString = string;
console.log(badString);

// Single, double quotes and backticks

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);


// Embedding JavaScript
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello,";
const two = "how are you?";
const joined = `${one} ${two}`;
console.log(joined);


// Concatenation using +
const greeting2 = "Hello";
const name2 = "Chris2";
console.log(greeting2 + ", " + name2);


// Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `Ì like the song ${song}. I gave it a score of ${score / highestScore} * 100}%.`;
console.log(output);



