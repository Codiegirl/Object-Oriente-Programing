# Object-Oriented-Programing

Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.

Print both properties of the dog object to your console.

Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."

Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

Add the own properties of canary to the array ownProps.

Add a numLegs property to the prototype of Dog

Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object

Define the constructor property on the Dog prototype.

Use isPrototypeOf to check the prototype of beagle.

Modify the code to show the correct prototype chain.

The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

Use Object.create to make two instances of Animal named duck and beagle

Modify the code so that instances of Dog inherit from Animal.

