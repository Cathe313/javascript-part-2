//This is a random comment!

function makeWarrior (name, gender) {
    return {
        name: name,
        gender: gender,
        level: 1,
        weapon: "wooden sword",
        power: Math.ceil(Math.random() * 100),
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
}
   
var bob = makeWarrior("Bob the Hammer", "M");
var cat = makeWarrior("Cat Woman", "F");
var glad = makeWarrior("Gladiator", "M");
var pir = makeWarrior("Pirate!", "F");

console.log(cat.power);
console.log(glad.gender);
console.log(bob.name);
console.log(pir.weapon);

cat.fight();
bob.faceoff(pir);
glad.faceoff(cat);
pir.faceoff(glad);

