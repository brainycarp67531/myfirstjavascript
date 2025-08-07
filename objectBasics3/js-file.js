const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  },
};

// Don't edit the code above here!

// Add your code here
const cat2 = {
  name: "Bob",
  breed: "Cirmyc",
  color: "white",
  greeting: function () {
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  },
};

cat.greeting();
cat2.greeting();