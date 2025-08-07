let bandInfo;

// Don't edit the code above here!

// Add your code here
const band = {
    name: "Great Dead",
    nationality: "Sweden",
    genre: "Rock",
    members: 4,
    formed: 1979,
    split: false, 
    album: [
        {name: "Parachutes", released: 1982 },
        {name: "Plane Crash", released: 1992 },
    ]
};

bandInfo = `The band ${band.name} is from ${band.nationality} and was formed in ${band.formed}. The band has ${band.members} members and plays ${band.genre} music. 
            The first album the band release is named ${band.album[0].name} and was released ${band.album[0].released}. The band has been active ${2025 - band.formed} years.`;

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
