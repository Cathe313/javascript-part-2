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