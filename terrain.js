//Comment comment comment


function Tile(x, y) {
        this.x = x;
        this.y = y;
        this.height = Math.floor(3*Math.random());
        //this.type = {
            if (Math.floor(3*Math.random()) === 0) {this.type = "grass"};
            if (Math.floor(3*Math.random()) === 1) {this.type = "rocks"};
            if (Math.floor(3*Math.random()) === 2) {this.type = "water"};
        //this.condition = 
            if (Math.floor(3*Math.random()) === 0) {this.type = "burning"};
            if (Math.floor(3*Math.random()) === 1) {this.type = "normal"};
            if (Math.floor(3*Math.random()) === 2) {this.type = "frozen"};
}

Tile.prototype = {
       freeze: function() {
            if (this.condition === "burning") {
                this.condition = "normal";
            } else if (this.condition === "normal") {
                 this.condition === "frozen";
            } else {
                 this.height = this.height + 1;
            }
       }, 
       burn: function() {
            if (this.condition === "frozen") {
                this.condition = "normal";
            } else if (this.condition === "normal") {
                this.condition === "burning";
            } else if (this.condition === "burning" && this.height > 0) {
                this.height = this.height - 1;
            }
       }
}    
