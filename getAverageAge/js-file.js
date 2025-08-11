function getAverageAge(arr) {
    let sum = 0;
    
    arr.forEach(element => {
        sum = sum + element.age;
    });
    
    let average = sum / arr.length;
    
    return average;
};


function getAverageAge2(arr) {
    let sum = arr.reduce((accumulater, element) => accumulater + element.age, 0);
    return sum / arr.length;
};


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
alert( getAverageAge2(arr) );