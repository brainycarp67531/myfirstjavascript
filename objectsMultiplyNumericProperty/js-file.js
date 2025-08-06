function multiplyNumeric(object) {
    // loop over each of the properties in the object
    for (let key in object) {
        // check if the object is a number 
        if (typeof(object[key]) === "number") {
            // if it is a number the multiply by two 
            object[key] = object[key] * 2;
        };
    }
}


// before the call
let menu = {
  width: 300,
  height: 400,
  title: "My menu"
};

// Start values
console.log("Before the call...")
console.log(menu.title);
console.log(menu.height);
console.log(menu.width);

// running the multiplier
console.log("Multiplier...")
multiplyNumeric(menu);

// after the multiplication...
console.log("After the call...")
console.log(menu.title);
console.log(menu.height);
console.log(menu.width);
