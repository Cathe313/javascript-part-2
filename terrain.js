//Comment comment comment


function Tile(x, y) {
        this.x = x;
        this.y = y;
        this.height = Math.floor(3*Math.random());
        //this.type
            var randomType = (Math.floor(3*Math.random()))
            if (randomType === 0) {this.type = "grass"};
            if (randomType === 1) {this.type = "rocks"};
            if (randomType === 2) {this.type = "water"};
        //this.condition 
            var randomCondition = (Math.floor(3*Math.random()));
            if (randomCondition === 0) {this.condition = "burning"};
            if (randomCondition === 1) {this.condition = "normal"};
            if (randomCondition === 2) {this.condition = "frozen"};
}

Tile.prototype = {
       freeze: function() {
            if (this.condition === "burning") {
                this.condition = "normal";
            } else if (this.condition === "normal") {
                 this.condition = "frozen";
            } else {
                 this.height = this.height + 1;
            } 
       }, 
       burn: function() {
            if (this.condition === "frozen") {
                this.condition = "normal";
            } else if (this.condition === "normal") {
                this.condition = "burning";
            } else if (this.condition === "burning" && this.height > 0) {
                this.height = this.height - 1;
            } 
       }
}    
 
//Testing with the following tile:

//var testTile = new Tile(3, 4);
//console.log(testTile.height);
//console.log(testTile.condition);
//testTile.burn();
//console.log(testTile.condition);

function createGrid( x, y) {
    var grid = [];
    var aRow = [];
    var aTile = [];
    for (var i = 0; i < x; i ++ ){
        aRow = [];
        for (var j = 0; j < y; j ++ ) {
            aTile = new Tile( (Math.floor ( Math.random()*10) ), (Math.floor ( Math.random()*10) ) );
            aRow.push(aTile);
        }
        //console.log(aRow);
        grid.push(aRow);
    }
    return grid;
}

var newGrid = createGrid (20, 20);