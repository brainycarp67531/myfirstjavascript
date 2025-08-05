function isEmpty(schedule) {

    // Create a variable named count and set the initial value to zero. 
    let count = 0;

    // Loop over each of the elements in the object and count them 
    for (key in schedule) {
        count += 1;
    }

    // check if the object schedule have any properties
    if (count === 0) {
        // return TRUE if it is empty 
        return true;
    } else {
        // return FALSE if not
        return false;
    }
};

function isEmpty2(schedule) {
    return Object.keys(schedule).length === 0;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false