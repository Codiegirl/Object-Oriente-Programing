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


  //Extend Constructors to Receive Arguments
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("George", "White");
  

 //
//Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(6)
myHouse instanceof House



//Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for(let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property)
  }

}
console.log(ownProps)



//Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4



// Add your code above this line
let beagle = new Dog("Snoopy");



//Iterate Over All Properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property)
  }else{
    prototypeProps.push(property)
  }
}


//Understand the Constructor Property
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){
    return true;
  }else{
    return false;
  }
}



//Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function(){
    return "nom nom nom"
  },
  describe: function(){
    return "My name is " + this.name
  }
};



//Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};



//Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);



//Understand the Prototype Chain
