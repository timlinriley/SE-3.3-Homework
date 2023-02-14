class Person{
  constructor(firstName,lastName,hairColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.hairColor = hairColor;
  }
  hungry(){
    console.log("I'm hungry. I'm going to eat so much")
  }
  thirsty(){
    console.log("I'm so thirsty. Need water")
  }
  tired(){
    console.log("Time for bed")
  }
}

class PostalWorker extends Person{
  constructor(firstName,lastName,hairColor){
    super(firstName,lastName,hairColor)
    this.job = "mailman"
  }
  deliverMail(){
    console.log("I hope I don't get chased by any dogs today")
  }
}
const mailman1 = new PostalWorker('John', 'Doe', 'brown', 'mailman')
console.log(mailman1)

class chef extends Person{
  constructor(firstName,lastName,hairColor){
  super(firstName,lastName,hairColor)
  this.skills = ["dicing","chopping", "baking","sauteeing"]
}
  chopped(){
    console.log('Here buddy I just whipped you up a meal very quickly')
  }
}

const chef1 = new chef('jake','davis', 'blonde')

console.log(chef1)

class Character {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }}

class Hobbit extends Character {
  constructor (name, age, eyes, hair) {
    super(name, age, eyes, hair);
    this.skills = ["thievery", "speed", "willpower"];
  }
  steal () {
    console.log('lets get away!');
  }
  greet (otherCharacter) {
    console.log('Greetings ' + otherCharacter);
  }
  smite () {
    super.smite();
    this.steal();
  }
}
const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
console.log(frodo);