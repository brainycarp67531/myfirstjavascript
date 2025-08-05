
// function the will sum all the value in an object 
function sumSalaries(object) {

    // create a variable to store the sum in and the initial value should be zero. 
    let tot = 0;

    // loop over all the properties in the object and sum all the salaries. 
    for (let key in object) {
        tot = tot + object[key];
    }

    // return the sum 
    return tot;
};


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}


// call the function sum on the object salaries
let sum = sumSalaries(salaries);

// alert the sum 
alert(sum);