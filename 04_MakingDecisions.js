// https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals#conditionals

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals

// A real example
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}


// an other example
let cheese = "Cheddar";

if (cheese) {
    console.log("Yay! CHeese available for making cheese on toast.");
} else {
    console.log("No cheese on toast for you today.");
}


// shopping updated
if (shoppingDone) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}


// Weather example

let temperature = 85;

if (choice === "sunny") {
    if (temperature < 86) {
        console.log('It is ${temperature} degrees outside - nice and sunny. Lets go out to the beach, or the Park, and get an ice createImageBitmap.');
    } else if (temperature >= 86) {
        console.log(`It is ${temperature} degrees outside- REALLY HOT! If you want to go outside, make sure to put some sunscreen on`);
    }
}


// Next task:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals#active_learning_a_simple_calendar