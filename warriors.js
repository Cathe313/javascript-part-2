//This is a random comment!

function makeWarrior (name, gender) {
        this.name = name;
        this.gender = gender;
        this.power = Math.ceil(Math.random() * 100);
        this.power = 1;
        this.weapon = "wooden sword";
}

makeWarrior.prototype = {
        fight: function() {console.log(this.name + " rushes to the arena with " + this.weapon)},
        faceoff: function(opponent) {
            if (opponent.power > this.power) {
                console.log(opponent.name + " won the fight. " + this.name + " is toast!");
            }
            else if (opponent.power < this.power) {
                console.log(this.name + " won the fight! " + opponent.name + " is deader than dead!");
            } else { 
                console.log("This fight is really boring...");
            }
        },
}
   
var bob = new makeWarrior("Bob the Hammer", "M");
var cat = new makeWarrior("Cat Woman", "F");
var glad = new makeWarrior("Gladiator", "M");
var pir = new makeWarrior("Pirate!", "F");

console.log(cat.power);
console.log(glad.gender);
console.log(bob.name);
console.log(pir.weapon);

cat.fight();
bob.faceoff(pir);
glad.faceoff(cat);
pir.faceoff(glad);

