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


