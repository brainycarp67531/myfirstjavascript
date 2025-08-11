function shuffle(arr) {
    // loop over each element of the array
    for (let i = arr.length - 1; i > 0; i--) {
        // console.log(i);
        // pick a random number from 0 - i.
        const j = Math.floor(Math.random() * (i + 1));
        // console.log(j)
        
        //swap elements array[i] and array[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

};

function shuffle2  (arr) {
    // loop over each element of the array 
    for (let i = 0; i < arr.length; i++) {
        // pick a random number between i and arr.length - 1
        const j = Math.floor(Math.random() * (arr.length - i)) + i;
               
        //swap elements array[i] and array[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [1, 2, 3]
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr2);

shuffle2(arr2);
console.log(arr2);

shuffle2(arr2);
console.log(arr2);

shuffle2(arr2);
console.log(arr2);