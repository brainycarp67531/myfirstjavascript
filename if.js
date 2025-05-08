// https://www.w3schools.com/js/js_if_else.asp

let hour = 17;

if (hour < 18) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

console.log(greeting);

if (hour < 10) {
    greeting = "Good morning!";
} else if (hour < 20) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

console.log(greeting);