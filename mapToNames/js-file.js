let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// let names = [users[0]["name"], users[1]["name"], users[2]["name"]];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary