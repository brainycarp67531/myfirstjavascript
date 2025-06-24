// your JavaScript file
// Select the HTML element with the ID 'container'
const container = document.querySelector("#container");

// Create a new <div> element
const content = document.createElement("div");

// Add the class 'content' to the new <div>
content.classList.add("content");

// Set the text inside the <div>
content.textContent = "This is the glorious text-content!";

// Append the new <div> as a child of the container
container.appendChild(content);



// create a new <p> element. 
const newParagraph = document.createElement("p");

// set the text inside the <p>
newParagraph.textContent = "Hey I am red!";

// Set the text in <p> to red. 
newParagraph.style.color = "red";

// Append the new <p> as a child of the container
container.appendChild(newParagraph);


// create a new <h3> element. 
const heading = document.createElement("h3");

// set the text inside the <h3> element
heading.textContent = "I am a blue h3!";

// set the text in <h3> to blue. 
heading.style.color = "blue";

// Append the new <h3> as a child of the container
container.appendChild(heading);


// create a new <div> element.
const newDiv = document.createElement("div");

// Set the border to black and the background to pink of the new <div>
newDiv.style.border = "1px solid black";
newDiv.style.backgroundColor = "pink";

// set the class 'secondDiv' to the new div;
newDiv.classList.add("secondDiv");

// Create the new <h1> element that will go inside the new <div>
const h1Heading = document.createElement("h1");

// set the text in the <h1> element
h1Heading.textContent = "I am a div!";

// Create the new <p> element the will go inside the new <div>
const secondParagraph = document.createElement("p");

// set the text in the <p> element. 
secondParagraph.textContent = "ME TOO";

// append the new <h1> and <p> element to the new <div>
newDiv.appendChild(h1Heading);
newDiv.appendChild(secondParagraph);

// Append the new <div> as a child to the container
container.appendChild(newDiv);