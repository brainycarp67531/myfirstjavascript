// Create an empty object name "user"
let user = {};

// Add a property name with the value "John"
user.name = "John";

// alert the name of the user
alert(user.name);

// add the property surname with the value "Smith"
user.surname = "Smith";

// alert the surname of the user
alert(user.surname);

// Change the value ot the name to Pete
user.name = "Pete";

// Alert the new user name. 
alert(user.name);

// remove the property name from the object
delete user.name;

// alert the name of the user, should not work
alert(user.name);


