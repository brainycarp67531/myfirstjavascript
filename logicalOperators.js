// https://javascript.info/logical-operators

let a = true;
let b = false;

let result = a || b;
console.log(result);

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

if (1 || 0) {
    alert( 'truthy');
}


let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed. '); // it is the weekend
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// The && (AND) operator

result = a && b;

alert( true && true );
alert( false && true );
alert( true && false );
alert( false && false );

