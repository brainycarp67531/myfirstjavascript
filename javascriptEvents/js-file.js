// Select the button with id btn
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');

// define a function called handleClick that will alert the user. 
function handleClick() {
    alert('I was clicked!');
}

// listen for an event, click of the button. 
btn.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);


let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});
