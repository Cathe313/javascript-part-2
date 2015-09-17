//This is a line with a comment.

//This function sorts strings based on their length.

function compareLength(a, b) {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    return 0;
}

//The code below tests the compareLength function.

var testArray = ["medium", "sho", "zloooongest", "evenlongeeeeeeeer", "1"];

testArray.sort(compareLength);

//Here is an array of objects:

var addressBook = [ 
    {name: "Brigitte", email:"brigitte@courrier.com"}, 
    {name: "Ziad", email:"ziad@decodemtl.com"},
    {name: "Jean-Jacques", email: "jj@test.com"},
    {name: "Catherine", email: "catherine@gmail.com"},
    {name: "Bob", email: "bob@gmail.com"}
];

//The code below will sort the above array by length of name.

function compareAgain(a, b) {
    if (a.name.length > b.name.length) {
        return 1;        
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
};

addressBook.sort(compareAgain);

//The fcode below sorts the addressBook array in alphabetical order of email address.

function compareAlpha(a, b) {
    if (a.email > b.email) {
        return 1;        
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
};

addressBook.sort(compareAlpha);

//Here is a function that can be used on an array of objects with Array.prototype.map() to return the 
//square of the num property (with a test array).

var testNumbers =[
    {name: "four", num: 4},
    {name: "three", num: 3},
    {name: "ten", num: 10},
    {name: "nine", num: 9}
    ];

var squareTestNumbers = testNumbers.map(function(obj){
    var eachObj = Object.create(obj);
    eachObj = obj;
    eachObj["num"] = obj.num * obj.num;
    return eachObj;
});
    
//This function takes a string called "operation" as argument and returns a function that will either add, subtract, multiply or divide two numbers.

function operationMaker(operation) {
    switch(operation) {
        case "add":
            return function adder(num1, num2){
                return num1 + num2;
            };
        case "subtract":
            return function subtracter(num1, num2) {
                return num1 - num2;
            };
        case "mult":
            return function multiplier(num1, num2) {
                return num1 * num2;        
                };
        case "div":
            return function divider(num1, num2) {
                return num1 / num2;
            };
        default:
            console.log ("I don't know this operation.");
    }
};






