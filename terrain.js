//My tile constructor:

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

//This function creates a new square grid of tiles:

function createGrid ( x ) {
    var grid = [];
    var aRow = [];
    var aTile = {};
    for (var i = 0; i < x; i ++ ){
        aRow = [];
        for (var j = 0; j < x; j ++ ) {
            aTile = new Tile( (Math.floor ( Math.random()*10) ), (Math.floor ( Math.random()*10) ) );
            aRow.push(aTile);
        }
        grid.push(aRow);
    }
    return grid;
}

//This function creates a visualisation of a grid, using its height property as an "icon":

function heightMap(aGrid) {
    var tileRow = "";
    console.log(aGrid);
    for (var i = 0; i < aGrid.length; i ++ ) {
        tileRow = "";
        for (var j = 0; j < aGrid.length; j ++ ){
            tileRow += aGrid[i][j].height + " ";
        }
    console.log(tileRow);    
    }
}



var newGrid = createGrid (20);
heightMap(newGrid);

newGrid[4][7].burn();
newGrid[13][19].freeze();
newGrid[9][19].burn();
newGrid[18][6].burn();
newGrid[12][9].freeze();
newGrid[2][11].burn();
newGrid[1][17].freeze();
newGrid[19][8].burn();
newGrid[16][13].burn();
newGrid[7][8].freeze();

heightMap(newGrid);
