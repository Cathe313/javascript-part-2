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