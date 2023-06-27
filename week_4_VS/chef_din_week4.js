class Hamster {
  constructor(name = " ", owner = " " , price = 15) {
    this.name = name;
    this.owner = owner; 
    this.price = price;
 }

  wheelRun(){
    console.log("squeak squeak")
  }
  eatFood(){
    console.log("nibble nibble")
  }  
  getPrice(){
    return this.price
  }
}
//This is the hamster: Jakie
const jakie = new Hamster("Jakie")

console.log("Get Price" , jakie.getPrice())

// End of Hamster Class

class Person {
  constructor(name, age = 0, height = 0 , weight = 0, mood = 0, hamsters = [], bankAccount = 0){
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight; 
  this.mood = mood;
  this.hamsters = hamsters;
  this.bankAccount = bankAccount;
  }

  // When we are doing a method(inside a class)/function, we only seperate the parameters by a semi-colon at the end of each argument. Do not seperate each perameters by curly braces, you wil get an error!
  
  getName(){
    return (this.name)
  }
  
  getAge(){
    console.log(`Boy time sure does fly by! Happy Birthday ${this.name}!!! You are ${this.age} years old!!! Lets eat some cake and make sure the festivities are eVen BETTER next year!!!\n`);
  }
  getWeight() {
    console.log(`Wow, your weight is on level ${this.weight}. You're getting plump ${this.name}! Gasp! We gotta make sure we in shape to race the boys on the playground like the movie Cars!\n Let's work it out!\n`); 
  
    return console.log(`Current Weight is: level ${this.weight}`)
  }
  greet(){
    console.log(`Hello, ${this.name}! How are you doing today?`);
  }

  buhHumBug(){
    console.log(`\nI am so bored. These video games, these books don't entertain me anymore. What's worse is there is ${this.bankAccount} dollars in my bank account. What is a boy to do?\n\nAt least I have food....!`);
  }
  
  eat(){
    console.log("(Timmy Eats)\nNom nom Nom!\n Yummy! My taste buds are tingling!");
    this.weight++; 
    this.mood++; 
  }

  exersize(){  
    console.log(`Lets go for a jog. Some resistant bands, and some pilates.\nFwew! ${this.name}! Yuck! That is a lot of sweat!\n`);
    this.weight--;
    
    return console.log(`Your current weight is: ${this.weight}.... Should we go again?!?`);
      }
  ageUp(){
    console.log("Growing like a weed....\n....(and harvesting money seeds...Loading.....\n");
    this.age++;
    this.height++;
    this.weight++;
    this.mood++;
    this.bankAccount+=10;

    return this.age
    
  }

  // Need to revise and revisit 
  buyHamster(hamster){
    this.hamsters.push(hamster.name) // console.log: hamsters: <ref *1> [ [Circular *1] ],  HELP
    // issue solved: I had this.hamster....push into this.hamster, so hamster was pushing into istelf for that error. SO instead of calling how many hamsters, call the anme of the hamster. 
    this.mood+=10 // had to insert the +=
    this.bankAccount-=(hamster.getPrice()) //had to insert the equal between bank account and gus
  }
}

// **********End of Person Class & Class Inilization *******************


// constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0)

//Initialize: Timmy is the Boy
const timmy = new Person("Timmy", 5, )

// Theses are a test to make sure my methods/class is running right 
// console.log("Hamster Method" , timmy.buyHamster(jakie))

// console.log("Hamster Price\n" , timmy)

console.log("-----Story Begins-----")

console.log(timmy.greet() , "\n" , timmy.buhHumBug())

console.log("Number 3\n" , timmy.eat(), timmy.eat() , timmy.eat(), timmy.eat(), timmy.eat())

// Midway Chechater Check
// console.log("Here's Timmy\n", timmy)

console.log("Question Number 4\n")
console.log(timmy.getWeight() , timmy.exersize(), timmy.exersize(), timmy.exersize(), timmy.exersize(), timmy.exersize())

//ask if there is a more simplified way of mutliplying methods and their strings

timmy.ageUp(), timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() 

console.log(timmy.getAge())
console.log(`Lets see what ${timmy.name} is up to now!\n\n` , timmy)

// initilize Gus, the hamster
// constructor(name = " ", owner = " " , price = 15)

const gus = new Hamster("Gus" , "Timmy" ,)

console.log("The adorable sandy brown hamster is born! **🐹Awees🐹**\n\n" , gus , "Who is going to buy him at the store?")

timmy.buyHamster(gus)

console.log(`Lets see what ${timmy.name} is up to now!\n\n` , timmy)

//left off having issueds the the equation of Timmy buying the hamster and subtracting that amount from the bank. The Numbers of hamsters is undefined, and the cost of the hanster was not dedcuted. *** fixed the decuction from the bank and the notes, not sure if the format of the hamster is correct. 

// Also, ask about all the undefined in story


timmy.ageUp(), timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp() , timmy.ageUp()

console.log(`Lets see what ${timmy.name} is up to now!\n\n` , timmy)

console.log(timmy.eat(), timmy.eat())


console.log(timmy.exersize(), timmy.exersize())

console.log(gus)

console.log(`Lets see what ${timmy.name} is up to now!\n\n` , timmy)

console.log("Ballin!!!! 🤑 ")

// while this process below works, it makes for additional work in order to call the static method for the entire class each time in addition to the object. Doesnt seem efficent in this example. 

// class Hamster {
//   static price = 15;
//   static owner = " ";

//   constructor(name, owner , price) {
//   this.name = name;
//  }
// }
// const jakie = new Hamster("Jakie")

// console.log(Hamster.price)
// this is how I would have to log the price, seperately 

// console.log(jakie)


console.log("\n\n\n\n-------------------The End------------------")

console.log("Chef Be Makin 'Dose Dinners!!!!")

//Lets make a Dinner Class!

class Dinner{
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}



class Chef {
  constructor(name, mood, from = "America", chefsSpecial = [],) {
    this.name = name;
    this.mood = mood;
    this.from = from;
    this.chefsSpecial = chefsSpecial;
    }
  }

  greeting() {
    console.log(`Hi! my name is ${this.name}! And this is my kitchen here in ${this.from}! Its a ${this.mood} type of day!`);
  }

  cookFood(a, b , c){
 console.log(`Let me put ${a} with this, ${b} to make ${c}! And Voila!!! Dinner is served!`)
  }
  
  burnFood(a, b, c){
    console.log(`Oh no! I burned the ${a}! And the ${b} and ${c} is no good either! Call the sous chef and tell the we will have to start over! `)
  }
  
  }

// Initilize Chef

const mamaMia = new Chef ("Mama Mia" , "happy",)

console.log(mamaMia)

console.log(mamaMia.greeting())

// constructor(appetizer, veggie, dessert)
const italian = new Dinner("Garlic Bread" , "Three Meat Pasta", "Canoli")

console.log(italian)

let menu = []

console.log(mamaMia.italian.push(mamaMia.chefsSpecial))
