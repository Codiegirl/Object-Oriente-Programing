let dog = {
    name: "fido",
    numLegs: 2
};

//Use Dot Notation to Access the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Add your code below this line
  console.log(dog.name, dog.numLegs)

//Create a Method on an Object
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  };
  
  dog.sayLegs();


  //use this keyword
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();


//Define a Constructor function
  function Dog(){
    this.name = "fido",
    this.color = "red",
    this.numLegs = 4
}


//Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Add your code below this line
  
  let hound = new Dog()



  //Use a Constructor to Create Objects
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Add your code below this line
  let hound = new Dog();