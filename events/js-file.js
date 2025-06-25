// the JavaScript file

// select the html object with the ID "btn"
const btn = document.querySelector("#btn");

// create an alert event with on click that says "Hello World"
btn.onclick = () => alert("Hello World");


// select tje html object with the ID "btn2"
const btn2 = document.querySelector("#btn2");

// create an alert event with button btn2 is clicked
btn2.addEventListener("click", () => {
  alert("Hello World");
});


// select the html object with the ID "btn3"
const btn3 = document.querySelector("#btn3");

// create an alert displaying the function e in the console
btn3.addEventListener("click", function (e) {
   e.target.style.background = "blue";
    // console.log(e.target);
});


